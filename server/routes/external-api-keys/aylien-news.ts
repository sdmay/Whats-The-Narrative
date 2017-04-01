import AylienNewsApi = require('aylien-news-api');

export class AylienNewsApiConstructor {
    aylienNewsApiInstance: AylienNewsApi;
    trendingNowNewsSearchOptions: object;
    politicsNewsSearchOptions: object;
    peoplesNewsSearchOptions: object;
    moneyNewsSearchOptions: object;
    healthNewsSearchOptions: object;
    rightWingNewsSearchOptions: object;
    leftWingNewsSearchOptions: object;
    halfAndHalfLeftAndRightWingSearchOptions: object;

    constructor() {
        this.aylienNewsApiInstance = this.createAylienNewsApiInstance();
        this.trendingNowNewsSearchOptions = this.createTrendingNowNewsSearchOptions();
        this.politicsNewsSearchOptions = this.createPoliticsNewsSearchOptions();
        this.peoplesNewsSearchOptions = this.createPeopleNewsSearchOptions();
        this.moneyNewsSearchOptions = this.createMoneyNewsSearchOptions();
        this.healthNewsSearchOptions = this.createHealthNewsSearchOptions();
        this.rightWingNewsSearchOptions = this.createRightWingNewsSearchOptions();
        this.leftWingNewsSearchOptions = this.createLeftWingNewsSearchOptions();
        this.halfAndHalfLeftAndRightWingSearchOptions = this.createHalfAndHalfLeftAndRightWingSearchOptions();
    }


    private createAylienNewsApiInstance(): AylienNewsApi {
        const AylienNewsInstance = new AylienNewsApi.DefaultApi();
        AylienNewsInstance.apiClient.authentications['app_id'].apiKey = process.env.AYLIEN_NEWS_APP_ID;
        AylienNewsInstance.apiClient.authentications['app_key'].apiKey = process.env.AYLIEN_NEWS_APP_KEY;
        return AylienNewsInstance;
    }

    private createTrendingNowNewsSearchOptions(): object {
        return {
            'text': 'news',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com'],
            'mediaImagesCountMin': 1
        };
    }

    // TODO: adjust source Domains for this search
    private createPoliticsNewsSearchOptions(): object {
        return {
            'text': 'politics',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com'],
            'mediaImagesCountMin': 1
        };
    }

    // TODO: adjust source Domains for this search.
    private createPeopleNewsSearchOptions(): object {
        return {
            'text': 'society',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com'],
            'mediaImagesCountMin': 1
        };
    }

    private createMoneyNewsSearchOptions(): object {
        return {
            'text': 'economy',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['wsj.com', 'economist.com', 'bloomberg.com'],
            'mediaImagesCountMin': 1
        };
    }

    private createHealthNewsSearchOptions(): object {
        return {
            'text': 'healthcare',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com'],
            'mediaImagesCountMin': 1
        };
    }

    private createRightWingNewsSearchOptions(): object {
        return {
            'text': '',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'dailycaller.com', 'nationalreview.com', 'townhall.com'],
            'mediaImagesCountMin': 1
        };
    }

    private createLeftWingNewsSearchOptions(): object {
        return {
            'text': '',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['huffingtonpost.co.uk', 'salon.com', 'dailykos.com', 'thedailybeast.com', 'alternet.org', 'motherjones.com'],
            'mediaImagesCountMin': 1
        };
    }

    private createHalfAndHalfLeftAndRightWingSearchOptions(): object {
        return {
            'text': '',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['huffingtonpost.co.uk', 'salon.com', 'dailykos.com', 'breitbart.com', 'theblaze.com', 'drudgereport.com'],
            'mediaImagesCountMin': 1
        };
    }
}

export default new AylienNewsApiConstructor();
