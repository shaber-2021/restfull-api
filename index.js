const app = require('./app')
const dotenv = require('dotenv');
dotenv.config({path:'./.env'})
const port = process.env.PORT



app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})