import * as mongoose from 'mongoose';
import bcrypt = require("bcrypt");



let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

interface UserModel extends mongoose.Document {
    name: string;
    password: string;
    leftOrRight: string;
    savedArticle: string;
    createdAt: Date;
    modifiedAt: Date;
}

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: 'Password is Required'

    },
    leftOrRight: {
        type: Boolean,
        default: false,
        required: true
    },
    savedArticles: [{
        type: Schema.Types.ObjectId,
        ref: "article"
    }],
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
});

userSchema.pre("save", function (next: Function) {
    if (this._doc) {
        const doc = <UserModel>this._doc;
        const now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    const user = this;
    generateBcryptSalt(next, user);
});

// thanks http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
const generateBcryptSalt = (next, user) => {

    bcrypt.genSalt(10, (error, salt) => {
        if (error) return next(error);
        encryptPassword(next, user, salt);
    });
};

const encryptPassword = (next, user, salt) => {

    bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
        user.password = hash;
        return next();
    });
};







export const User = mongoose.model<UserModel>('User', userSchema);