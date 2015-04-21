var gcm = require('node-gcm');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/sendMessage', function(req, res, next) {

    var message = new gcm.Message();

    message.addData('key1', 'msg1');

    var regIds = ['Device Registration ID'];

    var sender = new gcm.Sender('API KEY');

    sender.send(message, regIds, function (err, result) {
        if(err) {
            console.error(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });


});

module.exports = router;
