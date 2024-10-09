const Page = () => {
    const handleForm = async (formData) => {
        "use server"
        console.log('This is data from input handleForm 👋🏻', formData);

        const username = formData.get("username");
        console.log("Hello! This is from handleForm 👋🏻", username);
    }

    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Page