import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

interface NewsLetterModel extends mongoose.Document {
    name: string;
    email: string;
    createdAt: Date;
    modifiedAt: Date;

}

const newsLetterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: 'Password is Required'
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
});

export const NewsLetter = mongoose.model<NewsLetterModel>('NewsLetter', newsLetterSchema);
