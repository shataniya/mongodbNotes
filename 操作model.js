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

// 操作 Model 的方法：

// 查询的方法：
// 1. Model.find({ 查询条件 },[ 投影 ],[ limit,skip... ],[ callback ])
    // - 返回的是一个数组
// 2. Model.findOne()
    // - 返回符合查询条件的第一个
    // - 返回的是一个文档对象，可以是直接使用属性 
// 3. Model.findMany()
    // - 功能和 find() 差不多 
// 4. Model.findById()
    // - 通过时间戳进行查询
// 5. Model.findByIdAndDelete()
// 6. Model.findByIdAndRemove()
    // - 查询到之后直接删除

// stuModel.findById("5cbcfb7606bc07a168361f5e",function(error,docs){
//     if(!error){
//         console.log(docs instanceof stuModel);//true
//         // 说明 文档【Document】 是 模型对象【Model】的实例
//     }
// });

// stuModel.findByIdAndRemove("5cbc6b768dcbce8b6cc46177",function(error,docs){
//     if(!error){
//         console.log(docs);
//     }
// });

// stuModel.find({name:"lisi"},"name age -_id",function(error,docs){
//     if(error){
//         console.log("获取数据失败~"+error);
//     }else{
//         console.log(docs);
//     }
// });

// 添加的方法：
// 1. Model.create()

// stuModel.create({
//     name:"xiaoming",
//     id:26,
//     sex:"woman",
//     age:20
// },function(error){
//     if(!error){
//         console.log("数据添加成功了");
//     }
// });

// 修改的方法：
// 1. Model.update() 注意：现在可以用，但是会提示不推荐使用
// 2. Model.updateOne()
// 3. Model.updateMany()
    // - 第一个参数是error, 检查是否出现错误,如果出现错误，则 error=1，如果没有错误 error = null
    // - 第二个参数是修改完成信息，不论成功失败，都会返回修改的信息

// stuModel.updateOne({name:"xiaoming"},{$set:{age:32}},function(error,docs){
//     if(!error){
//         console.log("数据修改成功");
//     }
// });

// stuModel.update({name:"xiaoming"},{$set:{name:"xioahong"}},function(error,message){
//     if(!error){
//         // console.log("修改成功了");
//         console.log(arguments);
//     }
// });

// 删除的方法：
// 1. Model.remove()  注意：虽然可以使用，但是他会提示不推荐使用
    // - 第一个参数是error, 检查是否出现错误,如果出现错误，则 error=1，如果没有错误 error = null
    // - 第二个参数是删除完成信息，不论成功失败，都会返回删除的信息
// 2. Model.deleteOne()
// 3. Model.deleteMany()

// stuModel.deleteOne({name:"xioahong"},function(error,message){
//     if(!error){
//         console.log(arguments);
//     }
// })



