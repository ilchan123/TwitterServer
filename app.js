import express from 'express'
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import { config } from './config.js'
import { initSocket } from './connection/socket.js'
import { connectDB } from './db/database.js'
// import { sequelize } from './db/database.js'
import cors from 'cors'

// npm i cors

const app = express()

app.use(express.json())

app.use(cors({
    origin: '*',
    credentials:true
}))

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)


app.use((req, res, next) =>{
    res.sendStatus(404)
})

connectDB()
    .then(()=>{
        const server = app.listen(config.host.port)
        initSocket(server)
    }).catch(console.eror)

// sequelize.sync().then(()=>{
//     const server = app.listen(config.host.port)
//     initSocket(server)
// })


// DB연결 확인
// db.getConnection().then((connection)=>console.log(connection))
// const server = app.listen(config.host.port)
// initSocket(server)
