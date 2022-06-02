'use strict';


//router mapping code
module.exports  = function(app) {
    

  //  var ChattingController = require('../controller/ChattingController');
    var UploadController = require('../controller/UploadController');
    //************Registration API **************/
    // app.route('/api/chatting')
    // .get(ChattingController.getAll)
    // .post(ChattingController.insert);

    app.route('/api/upload')
    .post(UploadController.upload);
 
    var loginmodel=require('../model/login')
    var chatcontroller = require('../controller/chatcontroller');
    var logincontroller = require('../controller/logincontroller')
 
    //************login table **************//

     app.route('/api/login')
    .get(logincontroller.getAll)
    .post(loginmodel.login);


    //************chat table **************//
     app.route('/api/chat')
    .get(chatcontroller.getAll);

};

