const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "API inafanya kazi vizuri kupitia Jenkins!" });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password123') {
        return res.status(200).json({ message: "Login successful!", token: "fake-jwt-token" });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(PORT, () => {
    console.log(`Server inakimbia kwenye port ${PORT}`);
});