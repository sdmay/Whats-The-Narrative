import * as mongoose from 'mongoose';
import bcrypt = require("bcrypt");



let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

interface UserModel extends mongoose.Document {
    name: string;
    password: string;
    leftOrRight: string;
    savedArticles: string;
    createdAt: Date;
    modifiedAt: Date

    comparseLoginPasswordWithEncryptedPassword(unEncryptedPassword: string, callback: Function): Function;
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
        type: String,
        default: false,
        required: true
    },
    savedArticles: [{
        type: Schema.Types.ObjectId,
        ref: "Article"
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

userSchema.methods.comparseLoginPasswordWithEncryptedPassword = function (unEncryptedPassword: string, callback: Function)  {
    // if the passwords do not makes return a callback with the error if the passwords match the error value is equal to null and we send the result back as true
    bcrypt.compare(unEncryptedPassword, this.password, (error, result) => {
        if (error) return callback(error);
        return callback(null, result);
    });
}

export const User = mongoose.model<UserModel>('User', userSchema);