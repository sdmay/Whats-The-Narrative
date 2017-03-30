import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

interface ArticleModel extends mongoose.Document {
    title: string;
    url: string;
    createdAt: Date;
    modifiedAt: Date;
}

let articleSchema = new Schema({
    pictureUrl: {
        type: String,
        required: true
    },
    articleId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summaryPartOne: {
        type: String,
        required: true
    },
    summaryPartTwo: {
        type: String,
        require: true
    },
    articleUrl: {
        type: String,
        required: true
    },
    articleTitle: {
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
});


export const Article = mongoose.model<ArticleModel>('Article', articleSchema);
