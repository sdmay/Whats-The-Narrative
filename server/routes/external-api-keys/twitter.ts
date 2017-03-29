import Twitter = require('twitter');

export class TwitterApiConstructor {
    twitterApiInstance: Twitter;
    twitterSearchTweetsEndPoint: string;
    twitterLeftWingSearchParameters: object;
    twitterRightWingSearchParameters: object;

    constructor() {
        this.twitterApiInstance = this.createTwitterApiInstance();
        this.twitterSearchTweetsEndPoint = this.createTwitterSearchTweetsEndPoint();
        this.twitterLeftWingSearchParameters = this.createTwitterLeftWingSearchParameters();
        this.twitterRightWingSearchParameters = this.createTwitterRightWingSearchParameters();
    }

    private createTwitterApiInstance(): Twitter {
        const twitterApiInstance = new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });
        return twitterApiInstance;
    }

    private createTwitterSearchTweetsEndPoint(): string {
        return 'search/tweets';
    }

    private createTwitterLeftWingSearchParameters(): object {
        return { q: 'democrat' };
    }

    private createTwitterRightWingSearchParameters(): object {
        return { q: 'republican' };
    }
}

export default new TwitterApiConstructor();
