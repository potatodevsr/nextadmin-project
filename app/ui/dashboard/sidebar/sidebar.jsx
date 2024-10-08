import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import Image from "next/image";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
}
    from "react-icons/md";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },

        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            }

        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/profile_user/chada-profile.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Chadapohn Sorakanit</span>
                    <span className={styles.userTitle}>Programmer</span>
                </div>
            </div>
            <ul className={styles.list}>
                {/* วนลูปแสดงเมนูหลักแต่ละรายการจาก menuItems */}
                {menuItems.map((cat) => (
                    // สร้างรายการ li สำหรับเมนูหลัก โดยใช้ title ของเมนูเป็น key
                    <li key={cat.title}>
                        {/* แสดงชื่อเมนูหลัก */}
                        <span className={styles.cat}>{cat.title}</span>

                        {/* วนลูปแสดงเมนูย่อยแต่ละรายการจาก cat.list */}
                        {cat.list.map(item => (
                            // แสดงรายการเมนูย่อย โดยใช้คอมโพเนนต์ MenuLink
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div >
    )
}


export default Sidebar