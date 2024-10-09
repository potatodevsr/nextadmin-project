import { addUser } from "@/app/lip/action"
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

const AddUser = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder='username' name='username' required />
                <input type="email" placeholder='email' name='email' required />
                <input type="password" placeholder='password' name='password' required />
                <input type="phone" placeholder='phone' name='phone' />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <input type="position" placeholder='position' name='position' />
                <textarea name="address" id="address" cols="30" rows="16" placeholder='Address' ></textarea>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default AddUser