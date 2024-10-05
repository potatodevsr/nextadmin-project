"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

// ฟังก์ชัน MenuLink ใช้สำหรับสร้างลิงก์เมนูแบบไดนามิก
const MenuLink = ({ item }) => {

    // ดึง path ปัจจุบันของหน้า
    const pathname = usePathname();

    console.log('pathname', pathname);

    return (
        // คอมโพเนนต์ Link ใช้สำหรับสร้างลิงก์ และกำหนด className ให้กับเมนู
        <Link
            href={item.path}
            className={`${styles.container} ${pathname === item.path && styles.active}`}>

            {/* แสดงไอคอนของเมนู */}
            {item.icon}

            {/* แสดงชื่อเมนู */}
            {item.title}
        </Link>
    );
}
export default MenuLink;
