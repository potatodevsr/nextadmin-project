import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"

const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='title' name='title' required />
                <select name="cat" id="cat">
                    <option value="general">Choose a Catgegory</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder='price' name='price' required />
                <input type="number" placeholder='stock' name='stock' required />
                <input type="text" placeholder='color' name='color' required />
                <input type="text" placeholder='size' name='size' required />
                <textarea name="desc" id="desc" cols="30" rows="16" placeholder='description' ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddProduct