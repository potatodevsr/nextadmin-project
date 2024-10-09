import mongoose from "mongoose"

// ฟังก์ชันสำหรับเชื่อมต่อกับฐานข้อมูล MongoDB
export const connectToDB = async () => {
    // สร้างออบเจ็กต์เพื่อเก็บสถานะการเชื่อมต่อ
    const connection = {}
    // ตัวอย่่างการ connection จาก mongoose: https://mongoosejs.com/docs/connections.html
    try {
        if (connection.isConnected) return;
        // เชื่อมต่อกับฐานข้อมูล MongoDB ที่รันบน localhost และใช้ฐานข้อมูลชื่อ 'test'
        // Connect to Cluster0
        const db = await mongoose.connect(process.env.MONGO);
        // console.log('debuging db :', db);

        // เก็บสถานะการเชื่อมต่อในตัวแปร connection โดยเข้าถึง connection[0]
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        // ถ้ามีข้อผิดพลาดเกิดขึ้น จะโยน error ออกไป
        throw error; // แก้ไขจาก 'new (error)' เป็น 'error'
    }
};

export function formatDateToThai(dateString) {
    const date = new Date(dateString);
    console.log('This is dateString 🌎 ', dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear() + 543; // เพิ่ม 543 เพื่อให้เป็นปี พ.ศ.
    return `${day}/${month}/${year}`;
}