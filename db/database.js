import mysql from 'mysql2'
import { config } from '../config.js'

/* 
    
*/ 
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})

// 문제 : 여기서 promise 가 뭘까?
// 답변 : (여기에 적어주세요)
export const db = pool.promise()