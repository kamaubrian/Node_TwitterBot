var twit = require('twit')
var config = require('./config')

var Twitter = new twit(config)

var retweet = function(){
    var params = {
        q: '#JKL, #nodejs',
        result_type: 'recent',
        lang: 'en'
    }


}
