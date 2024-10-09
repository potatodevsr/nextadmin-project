import { revalidatePath } from "next/cache";
import { User } from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
    "use server";
    const { username, email, password, isAdmin, isActive, phone, address } =
        Object.fromEntries(formData);
    try {
        await connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            isAdmin,
            isActive,
            phone,
            address,
        });
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create users! 🚫🥲");
    }

    revalidatePath("/dashboard/users");
    // ใช้ redirect ที่ถูกต้องตามคำแนะนำ
    return redirect("/dashboard/users");
};