import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { fetchUsers } from "@/app/lip/data"

const UsersPage = async () => {
    const users = await fetchUsers()
    console.log('Debuging users: ', users);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user.." />
                <Link href="/dashboard/users/add" >
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}> {/* Use <table> instead of <div> */}
                <thead>
                    <tr>
                        <td>Name</td> {/* Use <td> for table headers */}
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/profile_user/chada-profile.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Chadapohn Sorakanit
                            </div>
                        </td>
                        <td>
                            chadapohn@gmail.com
                        </td>
                        <td>
                            07/10/2567
                        </td>
                        <td>
                            Programmer
                        </td>
                        <td>
                            Active
                        </td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/test">
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage