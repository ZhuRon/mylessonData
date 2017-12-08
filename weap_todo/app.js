//app.js
var wilddog = require('wilddog-weapp-all');
App({
  onLaunch: function () {
    var config = {
      syncURL: 'https://wd5804878290fcyhog.wilddogio.com',
      authDomain: 'wd5804878290fcyhog.wilddog.com'
    }
    wilddog.initializeApp(config);
    // 数据库 ip: db
    this.ref = wilddog.sync().ref('todo')
  },
  addItem: function(text){
    this.ref.push(text);
  },
  getTodoRef: function(){
    return this.ref;
  },
  globalData: {
    userInfo: null
  }
})
