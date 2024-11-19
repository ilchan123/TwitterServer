import Mongoose from 'mongoose'
import { useVirtualId } from '../db/database.js' 

const userSchema = new Mongoose.Schema({
    username: { type: String, require: true },
    name: {type: String, require: true},
    email: { type: String, require: true },
    password: { type: String, require: true },
    url: String
}, { versionKey: false})

useVirtualId(userSchema)
const User = Mongoose.model('User', userSchema)

export async function findByUsername(username) {
    return User.findOne({username})
}

export async function findById(id) {
    return User.findById(id)    
}

export async function createUser(user) {
    return User(user).save().then((data)=>data.id)
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