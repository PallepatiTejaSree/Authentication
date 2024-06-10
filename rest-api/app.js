const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to Student Management System' });
});

app.get('/students', (req, res) => {
    const students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Alice Johnson', age: 21 }
    ];
    res.render('students', { title: 'Students List', students });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

