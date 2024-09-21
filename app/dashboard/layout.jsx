import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import style from "../ui/dashboard/dashboard.module.css"

const Layout = ({ children }) => {
    //({ children }) มาจาก layout.js
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <Sidebar />
            </div>
            <div className={style.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout
