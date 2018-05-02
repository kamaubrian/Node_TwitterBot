var twit = require('twitter')
var config = require('./config')

var Twitter = new twit(config)

var retweet = function(){
    var params = {
        q: '#StateOfTheNation',
        result_type: 'recent',
        lang: 'en'
    }
    Twitter.get('search/tweets',params,function(err,data){
        if(!err){
            var retweetId = data.statuses[0].id_str;
            Twitter.post('/statuses/retweet/:id',{
                id: retweetId
            },function(err,response){
                if(response){
                    console.log('Retweeted!!!');
                }
                if(err){
                    console.log('Something went wrong while processing Tweets, Status maybe a duplicate')
                }
            });
        }else{
            console.log('Error while Searching');
        }
    });
}
retweet();
setInterval(retweet,30000)
