const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGOPORT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { 
        console.log('Database is connected') 
}).catch((e) => {
    console.log(`no connection`)
})
