---
date: '2023-03-23'
title: 'Firebase의 RealTime Database와 Web App 연동하기'
categories: ['Javascript', 'Firebase', 'Database']
summary: 'Firebase의 RealTime Database와 연동하여 데이터 읽고 쓰기 '
thumbnail: './images/firebase.png'
---

# 갑자기 Firebase?
- 지금 내가 맡은 서비스에서는 웹에서는 채팅 기능을 아직 지원하지 않는다.
- 또한 이미 네이티브 앱으로 만들어진 서비스가 존재하고 그에 맞춰 API들도 존재한다.(앞으로는 웹뷰로 모든 네이티브 앱 화면들을 대체할 예정)
- 그런데 이번 스프린트 개발 범위에서 특정 API에 채팅 관련 정보(chat token)를 필수로 넣어서 호출해야하는 일이 발생했다.
- 처음에는 API를 조금 바꿔달라고 요청했지만 생각해보니 웹뷰 작업이 들어가게 되면 어쩔수 없이 chat token을 API에 담아 보내야 한다고 생각했다.
- 결국 네이티브 앱 코드를 까서 chat token을 발급 받는 방식을 찾아보았는데, Firebase의 RealTime Database에 row key를 생성하고 그 키를 API의 호출 값에 넣어줘야 했다. 
- 이걸 다 찾아보고 하는데 하루(워킹타임 8시간)가 꼬박 걸렸다.....

# 근데 Firebase는 뭐에여??
![image](https://firebase.google.com/static/docs/projects/images/firebase-projects-hierarchy_projects-apps-resources.png?hl=ko)
- Firebase는 구글에서 만든 웹/앱 개발 플랫폼이다.
- 이 플랫폼 안에는 인증, 앱 빌드, DB, 모니터링 등등 여러가지 기능들이 포함되어 있다.
- 내가 앱개발자가 아니라서 잘은 모르지만, 회사에서 이야기 들어보면 앱 빌드하고 배포할때 Firebase를 통해서 하고, 또한 사용자가 사용하고 있는 앱이 Crash 나는 것도 감지 할 수 있다고 한다.
- 이번에는 위 기능들 중에서 나는 RealTime DataBase를 사용 한다.

# RealTime DataBase?
- 서버에서 데이터를 저장하고 공유해야 하는 앱에서 많은 사항을 염두해야한다.
- 연결 설정이나 데이터를 실시간으로 동기화, 오프라인에서 작업 등 하려면 많은 작업 시간이 들어간다.
- 그렇지만 Firebase를 사용하면 데이터를 저장하고 실시간으로 동기화 한다.
- 클라우드 환경이기 때문에 서버관리나 운영이 불필요 하다. 그리고 Android, Ios, Javascript 용 SDK가 존재한다.
- 사용자는 기기에 구애받지 않고 웹이나 모바일에서 손쉽게 데이터에 접근할 수도 있고, 다른 사용자와 공동 작업을 할 수 있다.
- 데이터가 업데이트 되면 클라우드에 데이터가 저장되고 이러한 데이터를 사용하는 모든 기기에 알림도 보낼 수 있다.(거의 동시)
- 또한 오프라인에 최적화가 되어 있는데, 사용자의 인터넷 연결이 끊기면 SDK는 기기의 로컬 캐시를 사용해 변경사항을 제공하고 저장한다. 그러니깐 사용자가 온라인 상태로 바뀌면 로컬 데이터가 자동으로 동기화 된다.
- 그리고 보안 권한도 설정할 수 있어 사용자별 데이터별 액세스 권한을 부여할 수도 있다.
- NoSQL 클라우드 DB 이고, JSON 형태로 데이터가 저장된다.
- 그리고 Blaze 요금제를 적용하면 한 Firebase 프로젝트에서 여러 DB 인스턴스로 데이터를 분할하여 규모에 따라 앱 데이터 수요를 감당할 수 있다.
- 그렇지만 실시간 DB는 NoSQL DB 이기 때문에 최적화 방식이 관계형 DB와 다르다. 오직 작업 실행 속도에 중점을 두고 설계된 DB 이기 때문에 사용자의 데이터 엑세스 방식을 미리 계획하고 구조화 하는 것이 중요하다.

# Javascript와 연동
- 우선 Firebase 콘솔의 아래 화면의 앱 추가를 눌러 내가 사용할 Web App을 추가해야 한다. 
 ![스크린샷 2023-03-23 오후 7 45 05](https://user-images.githubusercontent.com/110433448/227180461-47151272-430f-4a11-ab13-9ab8c7eedb8e.png)
- 그리고 아래의 config 정보를 복사 한다.
  ![스크린샷 2023-03-23 오후 7 49 34](https://user-images.githubusercontent.com/21151247/227181075-ca5fee8a-6e11-4ced-afe2-d54c900e4175.png)
- 나는 Firebase와 연동하는 코드를 Util 형식으로 분리해서 사용할 것이기 때문에 아래 처럼 작성했다.
- initializeApp은 설정정보로 초기화 하는 것이고 getDatabase는 설정한 Firebase 정보의 dataBaseUrl에 해당하는 DB를 가져온다.
- 그리고 ref는 앞으로 자주 등장할 텐데, db와 뒤에 path 정보(key 값)을 설정하면 그 위치의 DB 정보 객체 형식를 가져올 수 있다.
- ![스크린샷 2023-03-23 오후 7 51 43](https://user-images.githubusercontent.com/110433448/227181964-545265b5-fac8-4921-b6a5-13872359f5a6.png)
- 다음으로는 데이터를 읽어오는 방식인데, 공식문서에 잘 안나오는거 같아서 이러 찾아보고 저리 찾아보다가 발견한 방식이다.
- child는 현재 DB의 위치와 path를 넘겨주면 path 밑의 DB 정보를 가져온다. 
- child로 가져온 객체를 get 안에 파라미터로 넣으면 Promise 리턴한다.(꼭 child를 넘겨줄 필요 없고 가져오고 싶은 데이터 위치만 DatabaseReference 타입으로 파라미터로 넣어주면 된다.)
- ![스크린샷 2023-03-23 오후 7 54 54](https://user-images.githubusercontent.com/110433448/227182857-6e49896f-96d6-4414-b490-71322a334206.png)
- 그 다음 data를 insert 하는 코드다.
- 우선 나는 row key가 필요했기에 아래 처럼 push를 사용해 빈 row만 생성하고 그 row의 key 값을 가져 왔다.
- ![스크린샷 2023-03-23 오후 8 00 39](https://user-images.githubusercontent.com/110433448/227183512-387c57df-9e08-4c6b-abf3-3689a6649e1d.png)
- 그런 다음에 아래 처럼 insert를 했다.
- set은 insert 하고 싶은 위치의 DB 정보와 data를 넘겨 주면 promise 를 리턴한다.
- 나는 key를 이미 받아 왔기 때문에 child를 한번 호출해 db의 row key가 위치한 곳에 데이터를 넣는 방식으로 개발했다.
- ![스크린샷 2023-03-23 오후 8 01 48](https://user-images.githubusercontent.com/110433448/227183786-86dcb19f-9223-48df-a9f1-5455d9dea0de.png)

# 개발하면서 느낀점
- 진짜 진짜 좋은거 같다. 사람들이 Firebase를 사용해서 개발 많이 한다고 했는데 나는 별로 크게 생각 한적 없었는데, 이번에 되게 편리한 기능들이 많고 유용한 기능들이 많다고 느꼈다.
- 특히 app 개발자들이 app crash 나는 것도 확인할 수 있는 것이 되게 인상 깊었고, 실시간 DB를 사용해 오프라인에서의 작업도 가능하게하는 점 등이 흥미로웠다.
- 피그마 처럼 여러사람이 동시에 텍스트 편집기를 사용하는 기능이 있을 때, 실시간 DB를 사용하면 되게 편리하게 개발 할 수 있다고 생각도 든다.
- 앞으로 또 Firebase를 이용한 다양한 기능들을 개발하면 재미있을 것 같다.


# Source
- Firebase
    - [<https://firebase.google.com/?hl=ko&authuser=0/>](<https://firebase.google.com/?hl=ko&authuser=0/>)

    