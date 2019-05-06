// import { Mongoose } from "mongoose";

// mongoose 是一个对象文档模型【ODM】

// mongoose 提供了几个新的对象：
// 1. Schema【模式对象】
    // - Schema对象 定义了 约束了数据库中的文档结构
// 2. Model
    // - Model【模型】 相当于 collections【集合】，一个模型就是一个集合
// 3. Document
    // - Document 表示集合中的文档


// 使用 mongoose
// 1. 下载安装 mongoose
    // - npm i mongoose -S/--save
// 2. 在项目中引入 mongoose
    // var mongoose = require("mongoose");
// 3. 连接 MongoDB 数据库
    // - Mongoose.connect("mongodb://数据库的ip地址:端口号/数据库名",{ useNewUrlParser: true });
    // - 如果端口号是27017，就可以省略不写
// 4. 断开数据库连接（一般不需要调用）
    // - mongoose.disconnect()

// - 监听 MongoDB 数据库的连接状态
    // - 在 mongoose 对象中，有一个属性，叫做 connection，该对象表示的就是数据库的连接
        // - 通过监视该对象的状态，可以来监听数据库的 连接 与 断开

    // 数据库连接成功的事件：
    // - mongoose.connection.once("open",function(){});
    // 数据库断开的事件：
    // - mongoose.connection.once("close",function(){});


// 引入
var mongoose = require("mongoose");
// 连接数据库  注意：后面加上 { useNewUrlParser:true }
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{ useNewUrlParser: true });

mongoose.connection.once("open",function(){
    console.log("数据库连接成功");
});
