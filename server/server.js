const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(express.json())
app.use(cors());



const authRoutes = require('./Routes/authRoutes');


app.use('/api/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});