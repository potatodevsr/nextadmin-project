import styles from "@/app/ui/dashboard/products/sigleProduct/sigleProduct.module.css"
import Image from "next/image"
const SigleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/products/iphone.png" alt="" fill />
                </div>
                Chadapohn Sorakanit
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" id="" placeholder="title" />

                    <label>Price</label>
                    <input type="number" name="price" id="" placeholder="price" />

                    <label>Stock</label>
                    <input type="number" name="stock" id="" placeholder="stock" />

                    <label>Color</label>
                    <input type="text" name="color" id="" placeholder="color" />

                    <label>Size</label>
                    <input type="text" name="size" id="" placeholder="size" />

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

export default SigleProductPage
