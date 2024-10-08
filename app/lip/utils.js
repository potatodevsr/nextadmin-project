import mongoose from "mongoose"

// ฟังก์ชันสำหรับเชื่อมต่อกับฐานข้อมูล MongoDB
export const connectToDB = async () => {
    // สร้างออบเจ็กต์เพื่อเก็บสถานะการเชื่อมต่อ
    const connection = {}

    // จาก mongoose: https://mongoosejs.com/docs/connections.html
    try {
        if (connection.isConnected) return;
        // เชื่อมต่อกับฐานข้อมูล MongoDB ที่รันบน localhost และใช้ฐานข้อมูลชื่อ 'test'
        // Connect to Cluster0
        const db = await mongoose.connect(ProcessingInstruction.env.MONGO);
        // เก็บสถานะการเชื่อมต่อในตัวแปร connection โดยเข้าถึง connection[0]
        connection.isConnected = db.connection[0]
    } catch (error) {
        // ถ้ามีข้อผิดพลาดเกิดขึ้น จะโยน error ออกไป
        throw new (error);
    }
};
