const createUser = async(userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await users.findOne({ email });
        // Handle the case when the user already exists
    } catch(err) {
        console.error(err);
    }
}