"use client";

import { usePathname } from "next/navigation"
import styles from "./navbar.module.css";

import {
    MdSearch,
    MdOutlineChat,
    MdNotifications,
    MdPublic


}
    from "react-icons/md";

const Navbar = () => {

    const pathname = usePathname();

    console.log('pathname', pathname);

    return (
        <div className={styles.container}>

            {/* แสดงชื่อหน้าปัจจุบัน โดยแยก pathname และดึงส่วนท้ายสุด */}
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            {/* .pop(): ใช้สำหรับดึงค่าตัวสุดท้ายของ array ซึ่งในกรณีนี้คือ edit หรือส่วนท้ายสุดของ URL path. */}

            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar