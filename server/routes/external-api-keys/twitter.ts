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
            consumer_key: 'dv1iRBGxLYjyKn41qpvayuI8U',
            consumer_secret: 'Der5Hk7WdnyYiFwCmRbx9akiFlAANbHdXT9ZVS4jYaNWU4w9E1',
            access_token_key: '249584013-wk8Vlc2jWdc95EqlOT7WvikOpH2Qe81YjKUb0Xxf',
            access_token_secret: 'hlGBlj3nB8VMpAfG6euyeZGs6o0pgW43wdfcSWtBM2faz'
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
