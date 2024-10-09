This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

installation
1 git clone https://github.com/potatodevsr/nextadmin.git
2 npm i และ npm install uuid@latest
3 npm run dev http://localhost:3000

Floder Structure,Layouts, Styles
app/dashboard/page.js => comp Dashboard => http://localhost:3000/dashboard
app/login/page.js => comp Login => http://localhost:3000/login

สร้างโฟลเดอ 
ui
-dashboard
--navbar
---navbar.jsx เป็น component สำหรับ navbar
--sidebar
---sidebar.jsx เป็น component สำหรับ sidebar
-login

สร้าง layout.jsx และทดลองการแสดงผล h1 ใน layout.js
import Navbar, Sidebar เพื่อใช้ {children} ใน layout.jsx

ติดตั้ง npm i recharts@2.9.0
มาจาก https://recharts.org/en-US/


เชื่อม database 
 npm i mongoose
 -- สร้าง Folder lip -> ไฟล์ utils.js เชื่อฐานข้อมูล

 สร้าง Folder .env ใส่ mongodb+srv://chadapohnDev:chadapohnDev@cluster0.p99m9.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0' ที่ตอนแรกมาจาก utils.js ใน  const db = await mongoose.connect
สร้าง File model.js ใน Folder lip
สร้าง File data.js ใน Folder lip

install npm i use-debounce@9.0.4 
    use-debounce -> ลดจำนวนการเรียกฟังก์ชัน: เมื่อต้องการลดการเรียก API หรือฟังก์ชันบ่อยครั้งเกินไป (เช่น เมื่อผู้ใช้พิมพ์ข้อความในช่องค้นหาและคุณไม่ต้องการเรียก API ทุกครั้งที่พิมพ์) คุณสามารถใช้ use-debounce เพื่อหน่วงเวลาให้เรียกฟังก์ชันเพียงครั้งเดียวหลังจากผู้ใช้หยุดพิมพ์ไปสักระยะเวลาหนึ่ง.
ปรับปรุงประสิทธิภาพ: โดยเฉพาะอย่างยิ่งในการทำงานที่ต้องการประสิทธิภาพ เช่น การเรียก API เพื่อค้นหาข้อมูล การลดจำนวนการเรียก API จะช่วยลดภาระงานบนเซิร์ฟเวอร์และทำให้การตอบสนองของแอปพลิเคชันเร็วขึ้น.