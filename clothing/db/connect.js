const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/clothing',{ useNewUrlParser: true });

let  db = mongoose.connection;
db.on("error", function (error) {
    console.log("Database connection failure：" + error);
});

db.on("open", function () {
    console.log("数据库连接成功");
})

db.on('disconnected', function () {
    console.log('数据库连接断开');
})