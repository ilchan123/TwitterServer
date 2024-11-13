import * as tweetRepository from '../data/tweet.js'

// 해당 아이디에 대한 모든 트윗을 가져오는 함수
export async function getTweets(req, res,next){
    const username = req.query.username
    const data = await(username ? tweetRepository.getAllByUsername(username): tweetRepository.getAll())
    res.status(200).json(data)
}

// 해당 글번호에 대한 모든 트윗을 가져오는 함수
export async function getIdTweets(req,res,next){
    const id = req.params.id
    const data = await(id ? tweetRepository.getAllById(id) : res.status(404).json({message: `${id}의 트윗이 없습니다`}))
    res.status(200).json(data)
}

// 트윗을 생성하는 함수
export async function postTweets(req,res,next){
    const {username, name, text} = req.body
    const tweet = await tweetRepository.create(username, name, text)  
    res.status(201).json(tweet)
}

// 트윗 수정하기
export async function updateTweets(req,res,next){
    const id = req.params.id 
    const text = req.body.text
    const tweet = await tweetRepository.getById(id)
    if(!tweet){
        return res.status(404).json({message:`${id}의 트윗이 없습니다`})
    }
    if(tweet.userId !== req.userId){
        return res.sendStatus(403)
    }

    const updated = await tweetRepository.update(id, text)
    res.status(200).json(updated)
}


// 트윗 삭제하기
export async function deleteTweets(req,res,next){
    const id = req.params.id
    const tweet = await tweetRepository.getById(id)
    if(!tweet){
        return res.status(404).json({message:`${id}의 트윗이 없습니다`})
    }
    if(tweet.userId !== req.userId){
        return res.sendStatus(403)
    }

    await tweetRepository.remove(id)
    res.sendstatus(204)
}

