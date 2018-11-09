const mongoose = require('mongoose');
const {mongodb} = requiere('./keys');

mongoose.connect(mongodb.URI,{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db => console.log('connection success!'))
.catch(err => console.log(err));