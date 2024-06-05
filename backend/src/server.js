const express = require('express');
const dotenv = require('dotenv').config();

const AccountRoutes = require('../routes/AccountRoutes');
const SyncRoutes = require('../routes/SyncRoutes');
const { errorHandler } = require('../middlewares/ErrorMiddleware');



const app = express();
const port = process.env.PORT || 5000;

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
    next(); 
})


// PRE-Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


/// Routes

    // Account Routes
    app.use('/api/accounts', AccountRoutes);

    // Sync Routes
    app.use('/api/sync', SyncRoutes);



// POST-Middlewares
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});