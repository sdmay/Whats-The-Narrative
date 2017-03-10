import * as mongoose from 'mongoose';


export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;

export interface NewsLetterModel extends mongoose.Document {
    name: string;
    email: string;
    createdAt: Date;
    modifiedAt: Date;

}

export let newsLetterSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        trim: true,
        required: 'Password is Required'
        // validate: [
        //     function (input) {
        //         return input.length >= 6;
        //     },
        //     "Password should be longer."
        // ]
    },
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
        const doc = <NewsLetterModel>this._doc;
        const now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

const NewsLetter = mongoose.model<NewsLetterModel>('NewsLetter', newsLetterSchema);
export default NewsLetter;
