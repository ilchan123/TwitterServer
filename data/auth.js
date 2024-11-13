let users = [
    {
        id:'1',
        username:'apple',
        password:'$2b$10$dsXMgtLVg5yJzhRyseGw7O/HPLJcGDIB/q0emsZE9bC4PH/InI8VK',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://aws-cdn.peanutoon.com/POCSTORAGE3/compression/jpeg/comic/4049/60644/EPI_COVER_IMG_060644_20191103_080656_143.jpeg'
    },
    {
        id:'2',
        username:'banana',
        password:'$2b$10$ByVyNsLcwcs7FkV30hovl.PJg0.L4/crIDg6DgcERfF8mi8kwPjZm',
        name:'반하나',
        email:'banana@banana.com',
        url:'https://aws-cdn.peanutoon.com/POCSTORAGE3/compression/jpeg/comic/4049/60644/EPI_COVER_IMG_060644_20191103_080656_143.jpeg'
    },
    {
        id:'3',
        username:'orange',
        password:'$2b$10$A1LomhLuwUuT./MtvthWMOFurDKYfKHse9g830UKiMdiR9iTwuJcK',
        name:'오렝지',
        email:'orange@orange.com',
        url:'https://aws-cdn.peanutoon.com/POCSTORAGE3/compression/jpeg/comic/4049/60644/EPI_COVER_IMG_060644_20191103_080656_143.jpeg'
    }
]

export async function createUser(username, password, name, email){
    const user = {
        id: '4',
        username,
        password,
        name,
        email,
        url:'https://aws-cdn.peanutoon.com/POCSTORAGE3/compression/jpeg/comic/4049/60644/EPI_COVER_IMG_060644_20191103_080656_143.jpeg'
    }
    users = [user, ...users]
    return user
}

export async function findByUsername(username, password){
    const user = users.find((user)=> user.username === username)
    return user
}

export async function findById(id){
    return users.find((user)=>user.id ===id)
}