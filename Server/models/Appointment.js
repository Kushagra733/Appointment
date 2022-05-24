import mongoose from 'mongoose';

const appSchema  = mongoose.Schema({
    date:String,
    time:String,
    email:{type:String,required:true},
    age:{type:String,required:true}
});

const appoint = mongoose.model('Appointment',appSchema);

export default appoint;