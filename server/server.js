const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(express.json())
app.use(cors());



const authRoutes = require('./Routes/authRoutes');
const aiRoutes = require('./Routes/aiRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});