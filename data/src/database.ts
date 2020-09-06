import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (err) => {
    if(err) return err.message;
    console.log('Database is online');
});