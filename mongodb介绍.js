// 数据库主要分成两大类：
// 1. 关系型数据库【RDBMS】
//  1.1 MySQL Oracle DB2 SQL Server
//  1.2 关系型数据库中全都是表
// 2. 菲关系型数据库【NoSQL No Only SQL】
//  2.1 MongoDB Redis
//  2.2 键值对数据库
//  2.3 文档性数据库 MongoDB

// 关系型数据库 开发速度 很慢很慢

// MongoDB 是为了 快速开发 互联网Web应用而设计的数据库系统 【天下武功 唯快不破】

// MongoDB 的数据类型是面向文档的

// MongoDB 里面存的就是 JSON ，还可以存储 BSON（二进制json）

// MongoDB 下载地址：https://www.mongodb.org/dl/win32

// 安装MongoDB
// - 安装
// - 配置环境变量
// - 在C盘根目录
    // - 创建一个文件夹 data
    // - 在 data 里创建一个文件夹 db
// - 打开 cmd 命令行窗口
    // - 输入 mongod 启动 mongodb 服务器

// 端口号要在1024以上，但不要超过65535


// 三个概念：
// 1. 数据库【database】
    // 数据库 就是一个仓库，在仓库中可以存放 集合
// 2. 集合【collection】
    // 数据库 存放的内容就是 集合，集合类似于数组，集合中可以存放文档
// 3. 文档【document】
    // 文档 是数据库中最小的单位，我们 存储 和 操作 的内容都是 文档
    // 因此 我们操作的就是 文档
    // - 在 MongoDB 中,数据库 和 集合 都不需要手动创建
        // - 当我们创建文档时,如果文档所在的 数据库 或者 集合 不存在时,他会自动创建 数据库 和 集合

// 基本的指令:
// 1. show dbs/database 
    // - 显示当前所有的数据库
// 2. use 数据库名
    // - 进入到指定的数据库
// 3. db 
    // - 表示当前所处的数据库
// 4. show collections
    // - 显示数据库中所有的集合

// 数据库的 CRUD 操作,就是 增删改除
    // - 向数据库中插入文档
        // db.<collection>.insert(document)
        // - 向集合中插入一个文档
        // - 例子：向 test 数据库 stus集合中 插入一个新的学生对象
        // { name:"lisi",age:20,gender:"man" }
        // db.stus.insert({ name:"zs",age:20,gender:"man" });
    
    // - db.<collections>.find()
        // - 查询 当前集合 中的所有文档


// 默认安装 MongoDB Manage 的安装位置：C:\Program Files (x86)\NoSQL Manager for MongoDB

// 记得要使用 MongoDB Manage 的话，记得先启动 MongoDB 的数据服务器  





