const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const app = express();

dotenv.config()

mongoose.connect(process.env.CONNECTION_URL)
mongoose.connection.once("open", () => {
    console.log("Connected to the DB");
})


app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true    
}));

app.listen(4000, () => {
    console.log("listening for requests")
})