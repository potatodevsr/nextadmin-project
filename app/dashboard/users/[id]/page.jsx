import styles from "@/app/ui/dashboard/users/sigleUser/sigleUser.module.css"
import Image from "next/image"
const SigleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/profile_user/chada-profile.png" alt="" fill />
                </div>
                Chadapohn Sorakanit
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" id="" placeholder="username" />

                    <label>Email</label>
                    <input type="email" name="email" id="" placeholder="email" />

                    <label>Password</label>
                    <input type="password" name="password" id="" placeholder="password" />

                    <label>Phone</label>
                    <input type="text" name="Phone" id="" placeholder="+1234567" />

                    <label>Address</label>
                    <textarea type="text" name="address" id="" placeholder="address" ></textarea>

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form >
            </div>
        </div >
    )
}

export default SigleUserPage

