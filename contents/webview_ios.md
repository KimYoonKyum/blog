---
date: '2023-03-28'
title: '웹뷰 개발 환경 구성하기(2)'
categories: ['Webview', 'iOS', 'Apple', 'Xcode']
summary: 'iOS 개발 환경 구성'
thumbnail: './images/webview.png'
---

# 진행 중...
- 지난번 포스트에 이어서 오늘은 iOS 개발 환경을 세팅했다.
- iOS 환경 세팅은 생각보다 해야할 것들이 조금 있어서 앱 개발자분의 도움을 조금 많이 받았다.
- 자 그럼 고고

# Xcode 설치와 시뮬레이터 실행
- 우선 Xcode를 App Store에서 받자.
  - 잠깐, Xcode는 iOS 앱을 개발하고 실행하고 테스트하고 배포할 수 있는 멀티 플랫폼이다.
- Xcode + 시뮬레이터 까지 깔고 나니 거의 용량이 23기가 였다. 다운하는 시간 + 설치하는 시간이 조금 걸리긴 했다.
- ![Xcode](https://user-images.githubusercontent.com/21151247/228148946-b3c8c355-4e2f-4cde-89dc-069006c4ddd6.png)
- 그 다음 소스 코드를 받아 오기 전에 시뮬레이터를 세팅했다. 아래 메뉴를 클릭하면 시뮬레이터가 뜬다.
- ![simulator_select](https://user-images.githubusercontent.com/21151247/228149802-b782cf95-546b-455a-a8bd-005d0f3a059b.png)
- 시뮬레이터가 뜨고 원하는 iOS 기기 들을 아래처럼 선택할 수 있다. 나는 iPhone 14 Pro Max 기기를 선택했다.
- ![simulator_select2](https://user-images.githubusercontent.com/21151247/228150142-0b1dd27f-bdc3-4b96-862d-7f97557936df.png)
- 시뮬레이터 까지 설치하고 실행한 결과이다.
- ![스크린샷 2023-03-28 오후 3 35 59](https://user-images.githubusercontent.com/21151247/228149111-818b25ce-be28-4a4d-a5b7-8d625f921e23.png)

# CocoaPods 설치
- iOS 개발할 때는 CocoaPods 라는 툴이 필요하다. 
- 이게 뭐냐면 리액트 프로젝트로 개발할 때는 npm이나 yarn이 있는거 처럼 Swift나 Object-C 프로젝트는 CocoaPods가 필요하다.
- 설치는 아래와 같다.
  - CocoaPods 설치 중간에 Ruby 버전 관련 에러가 발생할 수도 있다. 그럴 때에는 에러 로그에 찍한 버전을 그대로 깔아주면 말끔히 해결된다.
- ![cocoapods](https://user-images.githubusercontent.com/21151247/228151406-c602f617-3f95-48ae-a843-98b823d8aec9.png)

# 앱 실행
- 이제 받아온 소스 코드를 시뮬레이터에 앱으로 띄워보자.
- 역시 나의 개발과 환경 세팅은 한 번에 될 리가 없다.
- ![error](https://user-images.githubusercontent.com/21151247/228153543-2db474ef-18a6-4327-aca8-002335dc07ac.png)
- 이게 무엇이냐.. 찾아보니 나의 현재 맥북과 아이폰 시뮬레이터의 CPU가 달라서 생기는 문제라 한다.
- 해결법은 간단하다. 아래와 같이 Xcode를 실행하는 옵션만 바꿔주면 된다.(Rosetta를 사용하여 열기 체크하고 Xcode 재 실행)
- <img width="272" alt="스크린샷 2023-03-28 오후 4 02 43" src="https://user-images.githubusercontent.com/21151247/228154898-6ad8ecee-23eb-4fa6-9c02-144b3ba34aa2.png">
- 다시 Xcode 실행을 하고 이전에 빌드 했던 폴더는 clean 시키자.
- ![clean](https://user-images.githubusercontent.com/21151247/228156932-f61ea19f-e7ae-44fb-b7fb-389db5c8efd9.png)
- 다시 빌드 하니 아주 잘 실행 된다.
- ![success](https://user-images.githubusercontent.com/21151247/228195476-79702de7-3235-44b1-8e70-8ea3ec905547.png)

# 실행했으면 디버그 모드 까지
- 안드로이드는 디버그 모드는 크롬을 사용했다면, iOS 디버그는 사파리를 사용한다.
- 그 중에서도 Xcode로 실행 시킨 시뮬레이터를 Safari Technology Preview 라는 프로그램을 사용해서 디버깅 가능하다.
- Safari Technology Preview는 검색하면 바로 나오니 설치법은 생략
- 설치하고 아래를 따라하면
- ![debug1](https://user-images.githubusercontent.com/21151247/228196936-68536597-f884-4abe-9a99-f52f54acbbd3.png)
- 사파리 디버그 화면이 나오고 우리가 원하는 디버깅을 할 수 있다.
- ![debug2](https://user-images.githubusercontent.com/21151247/228197562-600092cc-e5e6-42bb-a9c5-a45be299cb06.png)

# 정리
- iOS가 조금 더 복잡하게 설치할게 많긴 했지만 디버그 모드 실행시 안드로이드보다 조금 더 반응도 빠르고 버벅거리지 않았다.
- 진작에 이 환경 구축했으면 좋았다는 생각이 든다. 이 두 개 세팅하는거 working day로 1.5일도 안걸렸다.
- 또 다시 느낀건 모든 것에서 수동적으로 움직이는 거보다 적극적인게 무조건 좋다고 생각한다. 
- 이런 환경이나 설정들 내가 직접 설치하고 구성해서 질문/요청/응답 이런 커뮤니케이션 시간을 줄이는게 개발 잘한다는 소리 듣는 방법 중 하나라는 생각이 든다.

# Source
- Apple Developer page
    - [<https://developer.apple.com/>](<https://developer.apple.com/>)

    