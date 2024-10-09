import { User } from "./model";
import { connectToDB } from "./utils";

export const addUser = async (fromData) => {
    "use server"
    const { username, email, password, isAdmin, isActive, phone, address } =
        Object.fromEntries(fromData);
    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            isAdmin,
            isActive,
            phone,
            address
        });
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create users! 🚫🥲");
    }
};