import { fetchUser, updateUser } from "@/app/lip/users/action";
import styles from "@/app/ui/dashboard/users/sigleUser/sigleUser.module.css";
import Image from "next/image";

const SigleUserPage = async ({ params }) => {
    const { id } = params;
    const user = await fetchUser(id);

    console.log('Debug SigleUserPage 💙:', user);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user?.img || "/profile_user/noavatar.png"} alt="" fill />
                </div>
                {user.username}
            </div>

            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user.id} />
                    <label>Username</label>
                    <input type="text" name="username" id="" placeholder={user.username} />

                    <label>Email</label>
                    <input type="email" name="email" id="" placeholder={user.email} />

                    <label>Password</label>
                    <input type="password" name="password" id="" placeholder={user.password} />

                    <label>Phone</label>
                    <input type="text" name="phone" id="" placeholder={user.phone} />

                    <label>Address</label>
                    <textarea name="address" id="" placeholder={user.address}></textarea>

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>

                    <label>Is Active?</label>
                    <select name="isActive" id="isActive" defaultValue={user.isActive}>
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SigleUserPage;
