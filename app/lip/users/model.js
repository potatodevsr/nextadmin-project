import mongoose from "mongoose";
// userSchema: เป็น schema ที่กำหนดไว้สำหรับ collection ของ user
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
            // ต้องมี (required: true), ไม่ซ้ำ (unique: true), ความยาวตั้งแต่ 3 ถึง 20 ตัวอักษร
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // ต้องมี (required: true), ไม่ซ้ำ (unique: true)
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
            // ค่าเริ่มต้น: false
        },
        isActive: {
            type: Boolean,
            default: true,
            // ค่าเริ่มต้น: true
        },
        img: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    {
        timestamps: true, // exp. "date": 2002-08-18T04:56:07.000+00:00
    }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

