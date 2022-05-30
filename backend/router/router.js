'use strict';


//router mapping code
module.exports  = function(app) {
    
    var ChattingController = require('../controller/ChattingController');
 
    //************Registration API **************/
    app.route('/api/chatting')
    .get(ChattingController.getAll)
    .post(ChattingController.insert);

    // app.route('/api/chatting/:ID')
    // .get(ChattingController.getBy)
    // .put(ChattingController.update)
    // .delete(ChattingController.remove);
 
};

