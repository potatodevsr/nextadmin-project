import styles from "./transactions.module.css";
import Image from "next/image";
const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr >
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Chadapohn Sorakanit
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.222</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Thida Sangsawang
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancel</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$6.587</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Wanchai Surasakudom
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>15.05.2024</td>
                        <td>$4.442</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Tanika Arunrung
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>18.06.2024</td>
                        <td>$4.442</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Rungsun Sriwanwilai
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>17.08.2024</td>
                        <td>$5.487</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions