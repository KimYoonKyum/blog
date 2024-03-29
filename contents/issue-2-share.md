---
date: '2023-03-02'
title: '오늘의 이슈'
categories: ['Web API', 'Share', 'issue']
summary: '공유하기 기능 관련 이슈'
thumbnail: './images/issue-logo.png'
---

# 문제 발생
- 모바일 웹 서비스 기능 내 특정 버튼 또는 링크 클릭스 문자메세지로 url 공유하기 기능을 구현해야하는 일이 있었다.(클릭 시 모바일 디바이스 내 문자메세지 텍스트 입력창 내용과 함께 이동됨)
- 이걸 맡으신 분은 우리 팀 신입개발자분.
- 그 분 말로는 텍스트만 전송하는 것은 되는데 이미지 첨부된 상태로는 이동이 안된다함. 
- 최초에 그 분이 작업 하던 코드는 아래와 비슷했다(회사 코드는 공유된 곳에 올리면 안되기에 비슷하게 표현)
  ![sms_share_1](https://user-images.githubusercontent.com/21151247/222418364-af4a8311-e04a-4470-b142-3f4c9657bbcb.PNG)

# 문제 해결 단계
- 일단 이미지가 첨부된 것 문자메세지는 sms 형식이 아니라 mms 형식이라는 것을 파악 했다.
- a 태그 안에 href 속성을 mms 스킴이 들어가도록 수정해보았는데 역시나 텍스트만 들어가고 동작하지 않았다.
- stackoverflow , 구글 등 여러 검색을 해보았지만 html 태그로 구현되는 이미지 첨부한 문자메세지 보내는 기능은 찾아볼 수가 없었다.
- 여러가지 검색 중에 Web API 중에 Navigator.share 라는 기능이 있다는 것을 알았다.
- Navigator.share란 무엇이고 어떻게 사용?
  - 모바일 디바이스의 네이티브 공유하기 기능을 웹에서 실행 시켜주는 것
  - 아래와 같이 사용한다.
  - <img width="450" alt="sms_share_2" src="https://user-images.githubusercontent.com/21151247/222420531-4db2f757-7358-432b-800c-15c7434c3ec5.png">
  - data 객체는 공유할 text, url, files이 포함된다. 이 셋 중에 하나라도 있어야 한다.
  - 리턴 값은 promise 객체이고 파라미터가 제대로 명시 되지 않는다면 즉시 reject 된다.
  - Navigator.share는 HTTPS 가 적용된 도메인 에서만 가능하다.
  - Navigator.share는 모든 브라우저에서 지원되지 않는다. 따라서 지원하는 브라우저인지 아닌지 판별하는 로직이 필요하다.
  - 함께 사용해줘야 하는 메소드로 Navigator.canShare 가 있다. 
  - 오늘 테스트중 공유하기 기능이 동작 안했던 대표적인 브라우저로 안드로이드-네이버 앱 브라우저가 있었다.
- 실행하면 아래와 같다
  - ![share](https://user-images.githubusercontent.com/21151247/222422741-9d477fff-e94c-4405-b90c-dc377a6ff932.jpg)
  - sms test를 누르면 bottom sheet 처럼 위와 같은 공유하기 영역이 나온다
  - ![sms_share](https://user-images.githubusercontent.com/21151247/222422926-63a83318-79fd-4340-9850-102df8b24dee.jpg)
  - 메세지를 클릭하면 코드에서 file에 추가 되었던 이미지가 텍스트와 함께 첨부되어서 나온다
  - ![insta_share](https://user-images.githubusercontent.com/21151247/222423099-67846cb2-b801-423a-974e-df4baf7666ab.jpg)
  - 인스타그램 공유를 하면 게시물,스토리,DM 중에서 선택해서 공유할 수 있다.
  - 위 예 말고도 카카오나 다른 여러가지 공유할 수 있는 앱들이 있다.
- 위 방식으로 하니 최초 요구사항 이었던 카카오 공유하기, 문자메세지로 공유하기, 인스타그램으로 공유하기 세가지 요구사항이 한번에 처리 되었다.

# 아쉬웠던 점
- 버튼 클릭시 바로 텍스트 메세지 입력창으로 이동하거나 카카오 앱으로 이동하거나 인스타그램 으로 이동하지 않고 Navigator.share가 지원하는 bottom sheet와 같은 창 하나를 띄운 다음에 선택해야 하는 것이 조금 아쉬웠다.
- 위와 같은 이유로 사실 기획자 분과 공유하기 bottom sheet가 한번 실행 되는 것에 관련 협의를 하긴 했었다.
- 다행히 PM 분도 공유하기 기능 중 가장 중요한 인스타그램 게시물/스토리/DM 기능이 동작하는 것이 더 중요하다고 생각해 Navigator.share의 기능을 사용하기로 했다
- 그렇지만 어찌되었던 사용자가  bottom sheet 통해서 한번 더 공유해야한다는 것이 개발자인 나로서는 약간 맘에 들지 않았다.
- 더 좋은 방법이 있나 시간이 있으면 찾아보고 더 좋은 방법이 있으면 댓글로 알려주시면 너무 감사하겠습니다~!

# Source
- MDN 
    - [<https://developer.mozilla.org/ko/docs/Web/API/Navigator/share/>](<https://developer.mozilla.org/ko/docs/Web/API/Navigator/share/>)