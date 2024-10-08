// นำเข้าโมเดล User จากไฟล์ model
import { User } from "./model"

// ประกาศฟังก์ชัน fetchUsers ซึ่งเป็นฟังก์ชันแบบ async ฟังก์ชันนี้ใช้สำหรับดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูล
export const fetchUsers = async () => {
    try {
        // ใช้ await เพื่อรอผลลัพธ์จากการค้นหาผู้ใช้ทั้งหมดในฐานข้อมูล
        const users = await User.find();
        // คืนค่าผู้ใช้ที่ค้นหาได้ (เป็น array ของผู้ใช้)
        return users;
    } catch (err) {
        console.log(err);
        // ส่ง error กลับออกไปพร้อมกับข้อความแจ้งเตือน
        throw new Error("Failed to fetch users! 🚫🥲");
    }
};
