var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/demo1",{ useNewUrlParser:true });
mongoose.connection.once("open",function(){
    console.log("数据库连接成功了~");
});
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    name:String,
    id:Number,
    sex:{
        type:String,
        default:"man"
    },
    age:Number
});
var stuModel = mongoose.model("students",stuSchema);

// 操作 document：
// 1. document.save()
    // - 就是将当前的 document 存储到数据库里
// 2. document.get(propertyName)
    // - 获取指定属性的属性值
    // - 其实也可以通过 document.propertyName 来获取【这种方法更简便】
// 3. document.set(propertyName,value)

stuModel.findOne({name:"lisi"},function(error,doc){
    if(!error){
        // console.log(doc);
        // console.log(doc.name);
        // console.log(doc.get("name"));
        doc.set("name","lisi");
        // doc.name = "laowang";
        // doc.save();
        // doc.toJSON();
        var o = doc.toObject();
        delete doc.age;
        delete o.age;
        // doc.save();
        // o.save();
        console.log(doc);
        console.log(o);
    }
})