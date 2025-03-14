# 🐦 TwitterServer (가상 트위터 서버)

> **Node.js와 Express를 활용한 트위터 클론 서버**  
> 기본적인 트윗 작성, 팔로우, 좋아요 기능이 포함된 백엔드 서버입니다.

[![GitHub Repo](https://img.shields.io/badge/GitHub-TwitterServer-blue?style=flat&logo=github)](https://github.com/ilchan123/TwitterServer)

---

## 📌 프로젝트 개요
이 프로젝트는 트위터의 기본 기능을 백엔드에서 구현하는 연습 프로젝트입니다.  
Node.js와 Express.js를 기반으로 구축되었으며, 데이터베이스 연결 및 API 개발을 실습했습니다.

## 🚀 주요 기능
- **사용자 인증 (JWT)**
- **트윗 작성, 조회, 삭제**
- **팔로우/언팔로우 기능**
- **좋아요(Like) 및 리트윗(Retweet)**
- **실시간 업데이트 (WebSocket)**
- **MongoDB 또는 PostgreSQL 데이터 저장**

## 🛠 기술 스택
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL / MongoDB  
- **Authentication**: JWT (JSON Web Token)  
- **Real-time**: WebSocket (Socket.io)  
- **API Documentation**: Swagger  

## 📂 폴더 구조
![asd](https://github.com/user-attachments/assets/4a98cf88-0b82-4555-a2a5-f398cc45d4d0)


## 📦 설치 방법
```bash
# 리포지토리 클론
git clone https://github.com/ilchan123/TwitterServer.git
cd TwitterServer

# 패키지 설치
npm install

# 서버 실행
npm start

⚙️ API 엔드포인트
회원가입	POST	/auth/signup	사용자 회원가입
로그인	POST	/auth/login	사용자 로그인
트윗 작성	POST	/tweets	새로운 트윗 작성
트윗 조회	GET	/tweets/:id	특정 트윗 가져오기
트윗 삭제	DELETE	/tweets/:id	특정 트윗 삭제
팔로우	POST	/users/:id/follow	사용자 팔로우
좋아요	POST	/tweets/:id/like	트윗 좋아요

### ✅ **설명**
- 깃허브 링크를 걸어서 쉽게 이동할 수 있도록 함  
- 프로젝트의 목적과 기능을 명확히 정리  
- 설치 방법과 API 엔드포인트를 깔끔하게 표로 정리  
- 폴더 구조를 나타내어 코드 이해를 돕도록 구성  

이제 `README.md` 파일을 만들어서 GitHub에 추가하면 프로젝트가 더 정리되어 보일 거야!  
더 수정하고 싶은 부분 있으면 말해줘 😊

