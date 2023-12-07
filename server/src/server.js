const app = require(".");
const connectDB = require("../config/db");

const PORT = 5180;

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Ecommerce listening on port:", PORT);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
})();
