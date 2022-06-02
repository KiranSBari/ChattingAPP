'use strict';


//router mapping code
module.exports  = function(app) {
    
    var ChattingController = require('../controller/ChattingController');
    var UploadController = require('../controller/UploadController');
    //************Registration API **************/
    app.route('/api/chatting')
    .get(ChattingController.getAll)
    .post(ChattingController.insert);

    app.route('/api/upload')
    .post(UploadController.upload);
 
};

