import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';


export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;

export interface UserModel extends mongoose.Document {
    name: string;
    password: string;
    leftOrRight: string;
    savedArticle: string;
    createdAt: Date;
    modifiedAt: Date;
}

export let userSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required"
        // validate: [
        //     function (input) {
        //         return input.length >= 6;
        //     },
        //     "Password should be longer."
        // ]
    },
    leftOrRight: {
        type: Boolean,
        default: false,
        required: true

    },
    savedArticle: [{
        type: Schema.Types.ObjectId,
        ref: 'articles'
    }],
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = <UserModel>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model<UserModel>('User', userSchema);
export default User;
