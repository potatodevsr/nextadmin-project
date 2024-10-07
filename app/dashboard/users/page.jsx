import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"

const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user.." />
                <Link href="/dashboard/users/add" >
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>

            <div className={styles.table}></div>
        </div>
    )
}

export default UsersPage