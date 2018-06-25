const Koa = require('koa');
const app = new Koa();

// 引入connect
const mongoose = require('mongoose')
const { connect,initSchemas } = require('./database/init.js')

// 立即执行函数
;(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({
        userName:'terry3',
        password:'123456'
    })
    oneUser.save().then(()=>{
        console.log('插入成功')
    })

    let  users = await User.find({}).exec()
    console.log('------------------')
    console.log(users)
    console.log('------------------')  
})()

app
    .use(async(ctx)=>{
        ctx.body = 'adasdasd'
    })
    .listen(3000,()=>{
        console.log(3000)
    })