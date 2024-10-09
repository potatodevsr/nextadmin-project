import { User } from "./model";
import { connectToDB } from "./utils";

// ประกาศฟังก์ชัน fetchUsers ซึ่งเป็นฟังก์ชันแบบ async ฟังก์ชันนี้ใช้สำหรับดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูล
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
