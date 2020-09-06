import mongoose from 'mongoose';

mongoose.connect(process.env.TOKEN_SECRET, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (err) => {
    if(err) return err.message;
    console.log('Database is online');
});