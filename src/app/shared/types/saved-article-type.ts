export class SavedArticleType {
    // adding optional id field because when these come back from the database we will need that id;
    _id?: string;
    pictureUrl: string;
    articleId: string;
    author: string;
    summaryPartOne: string;
    summaryPartTwo: string;
    articleUrl: string;
    title: string;
}
