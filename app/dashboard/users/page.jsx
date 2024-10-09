import { fetchUsers } from "@/app/lip/data"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { formatDateToThai } from "@/app/lip/utils"
import { deleteUser } from "@/app/lip/action";

const UsersPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, users } = await fetchUsers(q, page)
    // console.log('Debuging searchParams UsersPage 🌍:', q);
    // console.log('This is fetchUsers 🌍:', users);

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
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image src={user.img || "/profile_user/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {formatDateToThai(user.createdAt)}
                            </td>
                            <td>
                                {user.isAdmin ? "Admin" : "Client"}
                            </td>
                            <td>
                                {user.isActive ? "active" : "passive"}
                            </td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>

                                    <form action={deleteUser}>
                                        <input type="hidden" name="id" value={user.id} />
                                        <button className={`${styles.button} ${styles.delete}`}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div >
    )
}

export default UsersPage