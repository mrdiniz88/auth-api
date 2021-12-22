const express = require('express');
const app = express();

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');



// Middleware
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);



app.listen(3000, () => console.log('Server Up and running'));