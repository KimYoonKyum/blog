---
date: '2023-04-07'
title: 'AWS lightsail로 서버 세팅 하기(1)'
categories: ['AWS', 'lightsail', 'ubuntu', 'study']
summary: 'AWS lightsail을 사용해서 ubuntu 환경 구축해보기'
thumbnail: './images/aws.png'
---

# AWS lightsail?
- 젠킨스를 사용해서 직접  CI/CD 파이프라인을 구축해보고 싶어서 클라우드 서버를 하나 만들기로 했다.
- AWS에서 찾아보니 여러가지 서비스가 있었는데 EC2와 lightsail 이 두 개를 가장 많이 사용하는거 같았다.
- EC2 보다 lightsail이 조금 더 가볍게 사용할 수 있고 과금 형태가 개인 플젝으로 사용하기에 알맞아서 선택했다.

# ubuntu 설치 및 설정
- 여러가지 OS들이 많았지만 학부 때 ubuntu를 사용한 기억이 있어서 ubuntu를 설치했다.
- 아래와 같이 os를 선택할 수 있다.
- ![ubuntu1](https://user-images.githubusercontent.com/21151247/230590322-9e375a83-03d8-40cb-a4e6-bdcf00e56350.PNG)
- ubuntu를 선택한 다음에 과금 유형을 선택할 수 있다.
- ![ubuntu2](https://user-images.githubusercontent.com/21151247/230590532-fb493f6c-92c8-4c70-97fe-48d01d7d61e7.PNG)
- 과금 유형은 위 처럼 성능에 따라 다양하게 선택할 수 있다. 일단은 처음이기에 가장 낮은 성능으로 선택했다.
- ![ubuntu3](https://user-images.githubusercontent.com/21151247/230590879-ff01a651-e8ab-41ee-901e-923a67e206a0.PNG)
- 인스턴스를 만들었다.
- ':'를 클릭하면 인스턴스를 재부팅/시작/멈춤/삭제/매니징 등을 할 수 있다.
- 매니징 콘솔 화면으로 이동해서 아래 처럼 사용할 포트들의 방화벽 룰을 설정 했다.
- 8080은 api 서버나 젠킨스 빌드 서버로 사용할 예정이고, 3000은 프론트엔드용 포트로 사용할 것이다.
- ![ubuntu4](https://user-images.githubusercontent.com/21151247/230591390-0e86fd1b-8f47-4ed5-97c6-9c1d0c42e80c.PNG)
- 이제 ssh로 접속해서 터미널을 보면 아래처럼 나온다.
- ![ubuntu5](https://user-images.githubusercontent.com/21151247/230591681-83cc9ffa-9442-4f2f-b437-6c6ae92ca7f4.PNG)

# 사용자 계정 설정
- 우선 아래와 같은 명령어를 통해서 root 계정의 비밀번호를 설정한다.
- ![ubuntu6](https://user-images.githubusercontent.com/21151247/230592210-d55a5822-608d-4535-a0e8-a5a0085ed501.PNG)
- 처음 터미널 열리면 ubuntu 라는 계정으로 로그인 되기 때문에 root 계정으로 전환해서 사용했다.
- ![ubuntu7](https://user-images.githubusercontent.com/21151247/230592892-949e9e36-a87b-48e5-bc5b-0df12fd1c211.PNG)
- 이전 계정으로 돌아가고 싶으면 'exit' 명령어를 사용하면 된다.
- 이제 기본적인 설정은 끝났다.


# Source
- AWS
    - [<https://aws.amazon.com/ko/?nc2=h_lg/>](<https://aws.amazon.com/ko/?nc2=h_lg/>)

    