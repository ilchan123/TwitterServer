// import SQ from 'sequelize'
import MongoDb, { ObjectId } from 'mongodb'
import { getUsers } from '../db/database.js' 


const ObjectID = MongoDb.ObjectId

export async function findByUsername(username) {
    return getUsers().find({username}).next().then(mapOptionalUser)    
}

export async function findById(id) {
    return getUsers().find({ _id: new ObjectId(id)})
    .next()
    .then(mapOptionalUser)    
}

export async function  createUser(user) {
    return getUsers().insertOne(user).then((result)=> result.insertedId.toString())    
}

function mapOptionalUser(user){
    return user ? { ...user, id: user._id.toString() } : user
}










































// const DataTypes = SQ.DataTypes

// export const User = sequelize.define(
//     'user',
//     {
//         id:{
//             type:DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         username:{
//             type: DataTypes.STRING(50),
//             allowNull: false
//         },
//         password:{
//             type: DataTypes.STRING(500),
//             allowNull: false
//         },
//         name: {
//             type: DataTypes.STRING(20),
//             allowNull: false
//         },
//         email:{
//             type: DataTypes.STRING(50),
//             allowNull: false
//         },
//         url: DataTypes.TEXT
//     },
//     {timestamps: false}
// )

// export async function findByUsername(username){
//     return User.findOne({ where: { username }})
// }

// export async function findById(id){
//     return User.findByPk(id)
// }

// export async function createUser(user){
//     return User.create(user).then((data)=>{data.dataValues.id})
// }





// 11.18일
// export async function findByUsername(username) {
//     return db.execute('SELECT * FROM users WHERE username=?', [username])
//     .then((result)=>result[0][0])    
// }

// export async function findById(id){
//     return db.execute('SELECT * FROM users WHERE id=?', [id]).then((result)=>result[0][0])
// }

// export async function createUser(user){
//     const {username, password, name, email, url} = user
//     return db.execute('INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)',
//         [username, password, name, email, url]).then((result)=>result[0].insertId)       
// }