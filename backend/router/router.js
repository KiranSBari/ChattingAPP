'use strict';


//router mapping code
module.exports  = function(app) {
    
    var chatcontroller = require('../controller/chatcontroller');
    var logincontroller = require('../controller/logincontroller')
 
    //************login table **************//

     app.route('/api/login')
    .get(logincontroller.getAll);
  //  .post(logincontroller.insert);


    //************chat table **************//
     app.route('/api/chat')
    .get(chatcontroller.getAll);
};

