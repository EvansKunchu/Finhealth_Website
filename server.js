const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/finhealth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send('User added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
