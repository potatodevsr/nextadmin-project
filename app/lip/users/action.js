"use server";

import { revalidatePath } from "next/cache";
import { User } from "../users/model";
import { connectToDB } from "../utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
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

export const deleteUser = async (formData) => {
    // แปลงข้อมูลจาก formData ที่รับเข้ามาให้อยู่ในรูปแบบของ object
    const { id } = Object.fromEntries(formData);
    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete users! 🚫🥲");
    }

    // ทำการรีเฟรชแคชของเส้นทาง (path) ที่แสดงรายชื่อผู้ใช้ เพื่อให้ข้อมูลที่แสดงเป็นข้อมูลล่าสุด
    revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
    // แปลงข้อมูลจาก formData ที่รับเข้ามาให้อยู่ในรูปแบบของ object
    const { id, username, email, password, isAdmin, isActive, phone, address } =
        Object.fromEntries(formData);
    try {
        connectToDB();
        // สร้างผู้ใช้ใหม่ด้วยรหัสผ่านที่ถูกเข้ารหัสแล้ว
        const updateFields = {
            username,
            email,
            password,
            isAdmin,
            isActive,
            phone,
            address,
        };

        // Only include fields that are not empty or undefined
        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
        );

        // Proceed with the update
        await User.findByIdAndUpdate(id, updateFields);

    } catch (err) {
        console.log(err);
        throw new Error("Failed to update users! 🚫🥲");
    }

    // ทำการรีเฟรชแคชของเส้นทาง (path) ที่แสดงรายชื่อผู้ใช้ เพื่อให้ข้อมูลที่แสดงเป็นข้อมูลล่าสุด
    revalidatePath("/dashboard/users");
    // ทำการเปลี่ยนเส้นทาง (redirect) ไปยังหน้ารายชื่อผู้ใช้
    return redirect("/dashboard/users");
};

// Listdata
export const fetchUsers = async (q, page) => {
    // สร้างตัวแปร regex ที่เป็น Regular Expression สำหรับการค้นหาที่ไม่คำนึงถึงตัวพิมพ์ใหญ่-เล็ก (case-insensitive)
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 10; // กำหนดจำนวนรายการต่อหน้า (ในที่นี้คือ 2 รายการต่อหน้า)

    try {
        await connectToDB(); // รอการเชื่อมต่อกับฐานข้อมูล

        // นับจำนวนผู้ใช้ที่ตรงกับเงื่อนไขการค้นหา
        const count = await User.countDocuments({ username: { $regex: regex } });

        // ค้นหาผู้ใช้ที่มี username ตรงกับ regex และทำการแบ่งหน้า
        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE) // จำกัดการแสดงผลเพียง 2 รายการ ITEM_PER_PAGE
            .skip(ITEM_PER_PAGE * (page - 1)); // ข้ามรายการก่อนหน้าไปตามจำนวนหน้าที่กำหนด (ใช้เพื่อกำหนดว่าจะแสดงผลจากหน้าใด)

        // คืนค่าจำนวนทั้งหมดและผู้ใช้ที่ค้นหาได้ (เป็น object ที่มี count และ users)
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users! 🚫🥲");
    }
};

// Getby ID
export const fetchUser = async (id) => {
    console.log('Debug id', id)
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user! 🚫🥲");
    }
};