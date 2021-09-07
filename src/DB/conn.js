const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/choicebazzardb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`db connection failed due to `,e);
})