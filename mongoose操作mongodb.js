var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/demo1",{ useNewUrlParser:true });
mongoose.connection.once("open",function(){
    console.log("数据库连接成功了~");
});

// 先使用 Schema1
var Schema = mongoose.Schema;
// 创建 Schema 对象模型
var stuSchema = new Schema({
    name:String,
    id:Number,
    sex:{
        type:String,
        default:"man" // default 指定默认值
    },
    age:Number
});
// 创建集合 Model
// modelName 会自动检测 是不是复数，如果不是就自动转为复数
var stuModel = mongoose.model("students",stuSchema);
// 创建文档 Document
// 要插入一个文档，数据库才会创建
stuModel.create({
    name:"lisi",
    id:18,
    sex:"man",
    age:29
},function(error){
    // if(!error)
    // console.log("插入成功~");
    if(error){
        console.log("插入失败~"+error);
    }else{
        console.log("插入成功了~");
    }
});




