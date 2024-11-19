
import Mongoose from 'mongoose'
import { useVirtualId } from "../db/database.js"
import * as UserRepository from './auth.js'

const tweetSchema = new Mongoose.Schema({
    text: {type: String, require: true},
    userId: {type: String, require: true},
    name: {type: String, require: true},
    username: {type: String, require: true},
    url: String
},{timestamps: true})

useVirtualId(tweetSchema)
const Tweet = Mongoose.model('Tweet', tweetSchema)

export async function getAll() {
    return Tweet.find().sort({createdAt: -1})    
}

export async function getAllByUsername(username){
    return Tweet.find({username}).sort({createdAt: -1})
}

export async function getById(id) {
    return Tweet.findById(id)
}

export async function create(text, userId){
    return UserRepository.findById(userId)
        .then((user)=> new Tweet({
            text,
            userId,
            name: user.name,
            username:user.username
        }).save())
}

export async function update(id, text) {
    return Tweet.findByIdAndUpdate(id, {text}, {returnDocument: 'after'}) 
}

export async function remove(id) {
    return Tweet.findByIdAndDelete(id)    
}

























// import { sequelize } from '../db/database.js

// const DataTypes = SQ.DataTypes
// const Sequelize = SQ.Sequelize
// const Tweet = sequelize.define('tweet', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     text: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     }
// })
// Tweet.belongsTo(User)

// const INCLUDE_USER = {
//     attributes: [
//         'id',
//         'text',
//         'createdAt',
//         'userId',
//         [Sequelize.col('user.name'), 'name'],
//         [Sequelize.col('user.username'), 'username'],
//         [Sequelize.col('user.url'), 'url'],
//     ],
//     include: {
//         model: User,
//         attributes: []
//     }
// }
// const ORDER_DESC = {
//     order: [['createdAt', 'DESC']]
// }
// export async function getAll(){
//     return Tweet.findAll({ ...INCLUDE_USER, ...ORDER_DESC })
// }
// export async function getAllByUsername(username) {
//     return Tweet.findAll({
//         ...INCLUDE_USER, ...ORDER_DESC,
//         include: {
//             ...INCLUDE_USER.include,
//             where: { username }
//         }
//     })
// }
// export async function getById(id) {
//     return Tweet.findOne({
//         ...INCLUDE_USER,
//         where: { id }
//     })
// }
// export async function create(text, userId) {
//     return Tweet.create({text, userId}).then((data)=> this.getById(data.dataValues.id))
// }

// export async function update(id, text) {
//     return Tweet.findByPk(id, INCLUDE_USER).then((tweet)=>{
//         tweet.text = text
//         return tweet.save()
//     })    
// }

// export async function remove(id){
//     return Tweet.findByPk(id).then((tweet)=>{
//         tweet.destroy()
//     })
// }


// 11.18
// const SELECT_JOIN='SELECT tw.id, u.username, u.name, u.url, tw.userId, tw.text, tw.createdAt FROM users as u JOIN tweets as tw ON u.id = tw.userId'
// const ORDER_DESC= 'ORDER BY tw.createdAt DESC'

// // 모든 트윗 리턴
// export async function getAll(){
//     return db.execute(`${SELECT_JOIN} ${ORDER_DESC}`).then((result)=>result[0])
//  }
//  //아이디에 대한 트윗 리턴
//  export async function getAllByUsername(username) {
//      return db.execute(`${SELECT_JOIN} WHERE u.username=? ${ORDER_DESC}`, [username])
//      .then((result)=> result[0])}
     
//  //글 번호에 대한 트윗 리턴
//  export async function getById(id){
//      //return tweets.find((tweet)=>tweet.id ===id)
//      return db.execute(`${SELECT_JOIN} where tw.id=?`,[id]).then((result) => result[0][0])
//  }
//  // 트윗 작성
//  export async function create(text, userId) {
//      return db.execute('INSERT INTO tweets (userId, text, createdAt) VALUES (?,?,?)',
//      [userId, text, new Date()]
//  ).then((result)=> getById(result[0].insertId))
//  }
//  //트윗 변경
//  export async function update(id, text) {
//      return  db.execute('UPDATE tweets SET text=? WHERE id=?',[text, id]).then(()=> getById(id))
//  }
//  // 트윗 삭제
//  export async function remove(id) {
//      return db.execute('DELETE FROM tweets Where id=?', [id])
//  }