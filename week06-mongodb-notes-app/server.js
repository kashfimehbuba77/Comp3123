const express = require('express');
const noteRoutes = require('./routes/NoteRoutes');
const mongoose = require('mongoose');

// TODO - Update your mongoDB Atals Url here to Connect to the database
const DB_URL = process.env.DB_URL || "mongodb+srv://admin:password123%21@cluster0.tqloabq.mongodb.net/Comp3123_Lab_Exec06?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", noteRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
    app.listen(PORT, () => {
    console.log("Server is listening on port 8081");
});
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
