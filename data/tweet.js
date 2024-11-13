let tweets = [
    {
        id:'1',
        userId: '1',
        text:'오지엉덮밥!',
        createdAt: Date.now().toString()
    },
    {
        id:'2',
        userId: '2',
        text:'문방구 안녕하시요',
        createdAt: Date.now().toString()
    },
    {
        id:'3',
        userId: '1',
        text:'시대의 주먹!',
        createdAt: Date.now().toString()
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

// 글 번호에 대한 수정
export async function putById(id){
    return tweets.find((tweet) => tweet.id === id)
}

// 트윗을 작성
export async function create(username, name, text){
    const tweet = {
        id: '4',
        username: username,
        name: name,
        text: text,
        createdAt: Date.now().toString()
    }
    tweets = [tweet, ...tweets]
    return tweet
}

// 트윗을 변경
export async function getAllById(id, text){
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text = text
    }
    return tweet
}

// 트윗을 삭제
export async function deleteById(id){
    tweets = tweets.filter((tweet)=>tweet.id !== id)
}
