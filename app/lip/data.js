import { User } from "./model"
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
    // สร้างตัวแปร regex ที่เป็น Regular Expression สำหรับการค้นหาที่ไม่คำนึงถึงตัวพิมพ์ใหญ่-เล็ก (case-insensitive)
    const regex = new RegExp(q, "i")
    try {
        connectToDB()
        // ค้นหาผู้ใช้ทั้งหมดในฐานข้อมูลที่มี username ตรงกับ regex โดยใช้เงื่อนไข { username: { $regex: regex } } เพื่อให้ MongoDB ค้นหา username ที่ตรงกับ pattern ที่กำหนด
        // ใช้ await เพื่อรอผลลัพธ์จากการค้นหาผู้ใช้ทั้งหมดในฐานข้อมูล
        const users = await User.find({ username: { $regex: regex } });
        // คืนค่าผู้ใช้ที่ค้นหาได้ (เป็น array ของผู้ใช้) ไปยังฟังก์ชันที่เรียกใช้ fetchUsers
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users! 🚫🥲");
    }
};
