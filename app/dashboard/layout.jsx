import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

const Layout = ({ children }) => {
    //({ children }) มาจาก layout.js
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout
