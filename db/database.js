import { config } from '../config.js'
import SQ from 'sequelize'

const { host, user, database, password } = config.db
export const sequelize = new SQ.Sequelize(database, user, password, {
    host, 
    dialect: 'mysql',
    logging: false 
})







// mysql을 연결하던 거- 이젠 필요없어짐
// const pool = mysql.createPool({
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     password: config.db.password
// })

// 문제 : 여기서 promise 가 뭘까?
// 답변 : (여기에 적어주세요)
// export const db = pool.promise()