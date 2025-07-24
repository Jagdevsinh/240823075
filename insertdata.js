const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'
})
connection.connect((err)=>{
    if(err)
    {
        console.error('connection error',err.stack)
        stack
    }
    const user = {name:'jagdev',age:21}
    const sql= 'insert into ex set ?'

    connection.query(sql,user,(err,result)=>{
        if(err) throw err
        console.log('1 record insertde id',result.insertId)
        connection.end()
    })
})