import AylienNewsApi = require('aylien-news-api');

export class AylienNewsApiConstructor {
    aylienNewsApiInstance: AylienNewsApi;
    trendingNowNewsSearchOptions: object;
    politicsNewsSearchOptions: object;
    peoplesNewsSearchOptions: object;
    moneyNewsSearchOptions: object;
    healthNewsSearchOptions: object;


    constructor() {
        this.aylienNewsApiInstance = this.createAylienNewsApiInstance();
        this.trendingNowNewsSearchOptions = this.createTrendingNowNewsSearchOptions();
        this.politicsNewsSearchOptions = this.createPoliticsNewsSearchOptions();
        this.peoplesNewsSearchOptions = this.createPeopleNewsSearchOptions();
        this.moneyNewsSearchOptions = this.createMoneyNewsSearchOptions();
        this.healthNewsSearchOptions = this.createHealthNewsSearchOptions();
    }


    private createAylienNewsApiInstance(): AylienNewsApi {
        const AylienNewsInstance = new AylienNewsApi.DefaultApi();
        AylienNewsInstance.apiClient.authentications['app_id'].apiKey = '2f2ac0fa';
        AylienNewsInstance.apiClient.authentications['app_key'].apiKey = 'eebf8dce086aeb01006fcbd87323a13a';
        return AylienNewsInstance;
    }

    private createTrendingNowNewsSearchOptions(): object {
        return {
            'text': 'trending',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
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
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
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
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
    }

    // TODO: adjust source Domains for this search.
    private createMoneyNewsSearchOptions(): object {
        return {
            'text': 'money',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
    }

    private createHealthNewsSearchOptions(): object {
        return {
            'text': 'health',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
    }

}

export default new AylienNewsApiConstructor();
