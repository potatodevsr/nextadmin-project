
import styles from "@/app/ui/login/login.module.css";


const LoginPage = () => {
    // console.log('Debug LoginPage styles', styles);

    return (
        <div className={styles.container} >
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" name="username" id="" placeholder="username" ></input>
                <input type="password" name="password" id="" placeholder="password" ></input>
                <button className={styles.button}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
