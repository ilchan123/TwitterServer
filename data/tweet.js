let tweets = [
    {
        id:'1',
        name:'김사과',
        username:'apple',
        text:'오지엉덮밥!',
        createdAt: Date.now().toString(),
        url:'https://r2.jjalbot.com/2023/03/Vmpor2ad_O.jpeg'
    },
    {
        id:'2',
        name:'반하나',
        username:'banana',
        text:'문방구 안녕하시요',
        createdAt: Date.now().toString(),
        url:'https://i.namu.wiki/i/hz7d5fA5FHkfWUU5JBg6DHEkDQ6p_BLMdO1uMMnz-fVm6ENhORHqo2OvECOoeBFK8Gjwe9CgGJw0EduN6hRg-Q.webp'
    },
    {
        id:'3',
        name:'오렝지',
        username:'orange',
        text:'시대의 주먹!',
        createdAt: Date.now().toString(),
        url:'https://aws-cdn.peanutoon.com/POCSTORAGE3/compression/jpeg/comic/4049/60644/EPI_COVER_IMG_060644_20191103_080656_143.jpeg'
    }
]

// 모든 트윗을 리턴
export async function getAll(){
    return tweets
}

// 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username){
    return tweets.filter((tweet)=>tweet.username == username)
}

// 트윗을 변경
export async function getAllById(id){
    return tweets.find((tweet)=>tweet.id===id)
}

// 트윗을 삭제
export async function deleteById(id){
    tweets = tweets.filter((tweet)=>tweet.id !== id)
}

// 글 번호에 대한 수정
export async function putById(id){
    return tweets
}
