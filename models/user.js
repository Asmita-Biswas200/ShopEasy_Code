import mongoose from "mongoose";
import { type } from "os";

const UserSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
});

const User = mongoose.model('User', UserSchema);
export default User;