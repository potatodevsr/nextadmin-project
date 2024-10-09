"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams(); // รับค่าจาก useSearchParams
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (e) => {
        const params = new URLSearchParams(searchParams); // ใช้ URLSearchParams ดั้งเดิม
        if (e.target.value) {
            params.set("q", e.target.value); // ตั้งค่าพารามิเตอร์ 'q' เป็นค่าที่ค้นหา
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params.toString()}`); // ใช้ toString() เพื่อให้ได้รูปแบบพารามิเตอร์ที่ถูกต้อง
    };

    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;