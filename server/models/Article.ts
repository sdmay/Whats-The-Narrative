import * as mongoose from 'mongoose';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;

export interface ArticleModel extends mongoose.Document {
    title: string;
    url: string;
    createdAt: Date;
    modifiedAt: Date;
}

let articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
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
        let doc = <ArticleModel>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
