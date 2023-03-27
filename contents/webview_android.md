---
date: '2023-03-27'
title: '웹뷰 개발 환경 구성하기(1)'
categories: ['Webview', 'Android', 'AndroidStudio', 'Chrome']
summary: '안드로이드 개발 환경 구성'
thumbnail: './images/webview.png'
---

# 웹뷰 연동?
- 지난번 포스트에서도 말했듯이 우리 서비스의 네이티브 앱은 일부분이 웹뷰로 되어 있다.
- 우리 팀은 지금까지 웹뷰 작업을 하면 아래와 같은 방식으로 일을 해왔었다.
  - 제일 처음 리액트로 웹 페이지 개발
  - QA 진행
  - QA 완료 후에 webview 용 페이지 똑같이 만들고 그 링크를 네이티브 앱 개발자에게 전달
  - 앱 개발자가 그거 받고나서 브릿지 함수들 만들어 주고 프론트 개발자 연동하면서 해야할 수정사항이 있으면 요청하고 요청 받음
- 문제는 위 과정에서 앱 개발자가 수정한 코드를 프론트 팀인 우리가 바로바로 앱 개발 진행상황을 확인 할 수 없었고, 웹뷰에 들어가는 웹 페이지 링크는 항상 VERCEL을 통해 한번 배포 된 상태로 네이티브 앱에 들어가야 하기 때문에 실제 코딩 하는 시간 보다 의사소통+웹/앱 빌드해야 하는 시간이 더 많은 상황이었다.
- 그래서 이 참에 working day 몇일 날리더라도 안드로이드와 iOS 코드 받아서 환경을 구성하는게 좋다고 생각했다.
- 우선 안드로이드 부터 시작이다!

# 안드로이드 스튜디오 설치와 실행
- 우선은 안드로이드 코드를 받아와서 보려면 안드로이드 스튜디오가 필요하다.(Java는 이미 설치되어있어서 패스)
- <https://developer.android.com/studio/install?hl=ko> <- 여기 링크로 가서 아래 화면으로 가서 다운 받는다.
- ![안드로이드 스튜디오 설치](https://user-images.githubusercontent.com/21151247/227894476-2aa57a1e-5038-4481-b957-624c2be75dd9.png)
- 설치가 완료 후 프로젝트 여는 화면에서 :를 선택하고 아래 화면의 Virtual Device Manager를 실행한다.
- ![virtual device](https://user-images.githubusercontent.com/21151247/227895503-1220046f-a63c-4d6c-a9f5-4d7a3b6577f0.png)
- 그 다음 원하는 스펙의 디바이스를 만들고 실행한다. 나는 아래와 같이 두 개의 디바이스를 만들었다.
- ![디바이스](https://user-images.githubusercontent.com/21151247/227897054-621902a7-bd11-4cf0-ae60-23676f294c98.png)
- 그리고 나는 local 환경에서 개발 중이니 localhost로 내가 작업 하고 있는 리액트 웹 앱을 웹뷰에 사용해야 하는데, localhost로는 접근이 안된다.
- 방법은 ngrok 같은 vpn 터널을 뚫어주는 툴을 사용하거나 내 네트워트 ip 주소의 웹 앱이 떠있는 포트를 사용하는 것이 있다.
- ngrok은 사용해 보았으나 웹뷰에서 한번에 뜨지 않고 connection rufused 에러가 나오길래 패스하였다. 
- 그래서 내 네트워크 주소를 사용해서 웹뷰 연동을 하였다.(아래 모자이크 된 곳이 공유기에 연결된 나의 맥북의 현재 ip 주소 이다.)
- ![ip](https://user-images.githubusercontent.com/21151247/227898526-ba298300-9a33-4480-b53a-00f9db3b5745.png)
- 그리고 해당 정보를 웹뷰 설정 부분에 연동하면 아래와 같이 앱 안에 웹뷰가 뜬다!.
- ![실행화면](https://user-images.githubusercontent.com/21151247/227899418-3bad4c10-351d-4496-ad0b-419c8ba3e705.png)

# 실행했으면 디버그 모드 까지
- console.log() 를 안드로이드 스튜디오에서 찍는 방법도 있고 크롬 개발자 모드 연동해서 찍는 방법도 있는데 왠만하면 break 까지 걸어서 보고 싶기에 크롬 개발자 모드로 연동하는 것을 선택 했다.
- 우선 디바이스를 실행 후 앱까지 실행을 시킨 다음에 <chrome://inspect/> <- 여기에 들어가면 아래와 같은 화면이 보인다.
- ![디버그모드](https://user-images.githubusercontent.com/21151247/227900868-2e9cebaf-aa98-4be5-8bcb-5ea39dc6b2f5.png)
- 그 다음 inspect를 누르면 아래와 같이 화면이 뜬다!
- ![디버그모드2](https://user-images.githubusercontent.com/21151247/227901862-bf244d51-ecde-4c11-81fa-01256500c14b.png)
- 이제 연동만 시작하면된다

# 정리
- 디버그모드를 연결을 하긴 했지만 사실 조금 버벅거리는 점이 있긴하다.
- 그래서 console 만이라도 안드로이드 스튜디오에서 확인 할 수 있는게 좋지 않을까라는 생각이 들기도 한다.
- 기회가 되면 에뮬레이터 말고 실제 기기와 연동해서 개발을 진행하고 싶다. 그게 더 빠를거 같다. 지금은 회사에서 받은 M1 Pro 칩을 써서 그나마 낫긴 한데, 예전 인텔칩 써서 에뮬레이터 띄우면 비행기 소리가 나기도 했기에...
- iOS도 환경도 셋팅이 완료되면 빨리 포스트 작성을 해야겠다.





# Source
- Android Studio
    - [<https://developer.android.com/?hl=ko/>](<https://developer.android.com/?hl=ko>)

    