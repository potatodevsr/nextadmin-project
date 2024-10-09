"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

// ประกาศฟังก์ชัน Search ที่รับ props placeholder
const Search = ({ placeholder }) => {
    const searchParams = useSearchParams(); // รับค่าพารามิเตอร์การค้นหาจาก URL
    const pathname = usePathname(); // ดึง path ของหน้าปัจจุบัน
    const { replace } = useRouter(); // ฟังก์ชัน replace เพื่อเปลี่ยน URL โดยไม่ต้องรีโหลดหน้า

    // ประกาศฟังก์ชัน handleSearch ที่ใช้ useDebouncedCallback เพื่อลดความถี่ในการเรียกฟังก์ชัน
    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams); // สร้างสำเนาของ searchParams ที่มีอยู่

        // ตรวจสอบว่า e.target.value มีค่าและมีความยาวมากกว่า 2 อักขระ
        if (e.target.value) {
            e.target.value.length > 2 && params.set("q", e.target.value); // ตั้งค่าพารามิเตอร์ 'q' ใน URL เป็นค่าที่ค้นหา
        } else {
            params.delete("q"); // ลบพารามิเตอร์ 'q' ออกจาก URL หากค่าที่ค้นหาว่างเปล่า
        }

        // ใช้ replace() เพื่ออัปเดต URL โดยไม่ต้องรีโหลดหน้าใหม่
        replace(`${pathname}?${params.toString()}`);
    }, 300); // หน่วงเวลา 300 มิลลิวินาที

    // การแสดงผลของ component
    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={handleSearch} // เรียก handleSearch เมื่อมีการเปลี่ยนแปลงข้อความใน input
            />
        </div>
    );
};

export default Search;