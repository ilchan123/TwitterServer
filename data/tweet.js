
import MongoDb, { ObjectId, ReturnDocument } from 'mongodb'
import { getTweets } from "../db/database.js"
import * as UserRepository from './auth.js'
const ObjectID = MongoDb.ObjectId

export async function getAll() {
    return getTweets().find().sort({createAt: -1}).toArray().then(mapTweets)    
}

export async function create(text, userId){
    return UserRepository.findById(userId)
        .then((user)=> getTweets().insertOne({
            text,
            createdAt: new Date(),
            userId,
            name:user.name,
            username:user.username,
            url:user.url
        }))
        .then((result)=>{
            return getTweets().findOne({_id: result.insertedId})
        })
        .then(mapOptionalTweet)
}

export async function getAllByUsername(username){
    return getTweets().find({username}).sort({createdAt:-1}).toArray().then(mapTweets)
}

export async function getById(id) {
    return getTweets().find({_id:new ObjectID(id)}).next().then(mapOptionalTweet)  
}

export async function update(id, text) {
    return getTweets().findOneAndUpdate(
        {_id:new ObjectID(id)}, {$set: {text}}, {returnDocument:'after'} 
    ).then((result)=> result).then(mapOptionalTweet)    
}

export async function remove(id) {
    return getTweets().deleteOne({_id: new ObjectID(id)})    
}
function mapOptionalTweet(tweet){
    return tweet ? { ...tweet, id: tweet._id.toString()}:tweet
}

function mapTweets(tweets){
    return tweets.map(mapOptionalTweet)
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