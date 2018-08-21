const mongoose = require("../../db/connection")
const Schema = mongoose.Schema

const Book = new Schema({

    title: String,
    author: String,
    description: String,
    image: String,
    //below is in there to get comments model into book model
    // comments: [Comment] grey out for now until comment model

})


module.exports = mongoose.model("Book", Book)

// {
//     Book: mongoose.model("Book", Book),
//     // Comment: mongoose.model("Comment", Comment)
// }