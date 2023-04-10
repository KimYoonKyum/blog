---
date: '2023-04-09'
title: 'AWS lightsail로 서버 세팅 하기(2)'
categories: ['AWS', 'lightsail', 'ubuntu', 'study']
summary: 'AWS lightsail을 사용해서 ubuntu 환경 구축해보기'
thumbnail: './images/aws.png'
---

# 웹서버 띄워 보기
- 지난번 포스팅에 이어서 웹서버를 띄워보려 한다.
- 계속 사용해왔고 여기저기서 사용 많이 하는 nginx로 웹서버를 설치하려고 한다.
- 우선 아래 명령어로 설치를 진행한다.
- ```sudo apt install nginx```
- ![nginx1](https://user-images.githubusercontent.com/21151247/230854566-b61e74d5-efe0-4f68-a58d-5dbdd6b79398.png)
- 그 다음, 설치가 완료되면 아래 두 명령어로 nginx를 실행 시키고 상태를 확인한다. active 되어 있으면 성공이다.
- ```sudo service nginx start```
- ```sudo service nginx status```
- ![nginx2](https://user-images.githubusercontent.com/21151247/230854620-a2fdb95d-88b4-4978-ba9c-64b1b37823ba.png)
- 이제 웹에서 80번 포트로 접속해보자.
- ![nginx3](https://user-images.githubusercontent.com/21151247/230854912-36c55b3d-39d4-4cc8-9bb6-c9f3f8698758.png)
- 잘 나온다.

# 정리
- 오랜만에 서버세팅을 해서 명령어들 헷갈리기도 했다. 주기적으로 shell 명령어들은 만져봐야겠다.
- 그리고 이 다음으로 nginx 위에 간단하게 cra로 기본 리액트 앱을 3000번 포트에 띄워보려고 했다.
- 근데 cra로 설치 도중에 자꾸 버벅이거나 멈추는 현상이 발생하면서 결국에는 설치 실패가 되었다.
- 우선 접속한 내 계정이 해당 디렉토리에 rwd 권한들이 잘 들어가있는지 확인해도 이상이 없고, npm, yarn cache clean을 해도 계속 멈추는 현상이 발생했다.
- Error code 또한 없었어서 혹시 메모리 문제인가 하고 AWS lightsail 콘솔 화면에 들어가서 확인해보니 cra 설치 할때마다 아래 사진 처럼 cpu가 폭발적으로 사용되고 있었다.
- <img width="724" alt="aws-console" src="https://user-images.githubusercontent.com/21151247/230856003-6d9804f7-90d2-48f1-b773-477388b4e8e8.png">
- 설치 할 때, 돈 아낀다고 3.5달러 짜리로 메모리 512MB를 선택했는데, 이게 문제였었다. 그리고 stackoverflow를 뒤져보니 lightsail은 저 sustainable zone 안에서만 잘 동작하게끔 과금 형태가 되어 있다고 한다.
- 환경 세팅은 완료 했는데 하드웨어 땜시 app 못띄운게 아쉽진 하지만 shell 명령어 복습 했다고 생각하고, lightsail 대신에 ec2 한번 써봐야 겠다.
- 그리고 앞으로는 이런 제품을 쓸때 조금 더 꼼꼼하게 찾아보고 써야겠다~ 프로덕션 나가는게 아니라 다행이었다~!


# Source
- AWS
    - [<https://ap-northeast-2.console.aws.amazon.com/console/services?region=ap-northeast-2>](<https://ap-northeast-2.console.aws.amazon.com/console/services?region=ap-northeast-2>)

    