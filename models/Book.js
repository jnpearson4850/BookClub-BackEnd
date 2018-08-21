//require seed.js file into this, do we create DB file??
const Schema = mongoose.Schema





const Book = new Schema({

    title: "string",
    author: "string",
    description: "string",
    image: "description",
    //below is in there to get comments model into book model
    comments: [Comment]

})


module.exports = {
    Book: mongoose.model("Book", Book),
    Comment: mongoose.model("Comment", Comment)