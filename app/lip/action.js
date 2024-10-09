import { revalidatePath } from "next/cache";
import { User } from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    "use server";
    
    // แปลงข้อมูลจาก formData ที่รับเข้ามาให้อยู่ในรูปแบบของ object
    const { username, email, password, isAdmin, isActive, phone, address } =
        Object.fromEntries(formData);
    try {
        await connectToDB();
        // ใช้ bcrypt เพื่อสร้าง salt สำหรับการเข้ารหัส (hashing) รหัสผ่าน
        const salt = await bcrypt.genSalt(10);
        // ใช้ bcrypt เพื่อเข้ารหัสรหัสผ่านด้วย salt ที่สร้างขึ้น
        const hashedPassword = await bcrypt.hash(password, salt);
        // สร้างผู้ใช้ใหม่ด้วยรหัสผ่านที่ถูกเข้ารหัสแล้ว
        const newUser = new User({
            username,
            email,
            password: hashedPassword, // เก็บรหัสผ่านที่ถูกเข้ารหัสไว้ในฐานข้อมูล
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

    // ทำการรีเฟรชแคชของเส้นทาง (path) ที่แสดงรายชื่อผู้ใช้ เพื่อให้ข้อมูลที่แสดงเป็นข้อมูลล่าสุด
    revalidatePath("/dashboard/users");
    // ทำการเปลี่ยนเส้นทาง (redirect) ไปยังหน้ารายชื่อผู้ใช้
    return redirect("/dashboard/users");
};