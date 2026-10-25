const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());

// const userRoute = require('./routes/user.route');
const userRoute = require('./routes/user.route');
app.use('/user', userRoute);
const menuRoute = require('./routes/menu.route');
app.use('/menu', menuRoute);

app.get('/', (req, res) => {
    res.json({ message: "welcome to our website!" });
})
app.listen(port, (req, res) => {
    console.log(`Server dang hoat dong o port ${port}!`);
})












