var Twitter = require('twitter');
// import Twitter from 'twitter';
var client = new Twitter({
    consumer_key: 'dv1iRBGxLYjyKn41qpvayuI8U',
    consumer_secret: 'Der5Hk7WdnyYiFwCmRbx9akiFlAANbHdXT9ZVS4jYaNWU4w9E1',
    access_token_key: "	249584013-wk8Vlc2jWdc95EqlOT7WvikOpH2Qe81YjKUb0Xxf",
    access_token_secret: "	hlGBlj3nB8VMpAfG6euyeZGs6o0pgW43wdfcSWtBM2faz"
});
module.exports = {
    seeResults: function (req, res) {
        var query = req.url.match(/[^=]+$/)[0];
        client.get('search/tweets', { q: query }, function (error, tweets, response) {
            var status = tweets.statuses;
            res.end(JSON.stringify(status));
        });
    }
};
//# sourceMappingURL=twitter.js.map