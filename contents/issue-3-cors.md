---
date: '2023-03-13'
title: '오늘의 이슈'
categories: ['NextJS', 'Image', 'CORS', 'issue']
summary: 'NextJS에서 CORS 이슈'
thumbnail: './images/issue-logo.png'
---

# 문제 발생
- 현재 우리 서비스는 NextJS를 사용하여 서비스하고 있다.
- 지난번 공유하기 기능을 맡으셨던 분이 이미지를 첨부해서 공유를 해야하는데, 로컬에 있는 이미지로만 테스트를 하시다가 서버에서 내려주는 CDN 경로에 있는 이미지를 첨부해야하는 일이 생겼다.
- 위 내용만 보면 이상이 업지만 이전 포스팅에서 Web Api의 share 기능을 사용할 때, 이미지를 첨부하기 위해서는 이미지 파일을 받아와 blob 형태로 만들어서 파일로 추가를 해줘야했다.
- 그래서 해당 이미지 url을 fetch 해와 blob으로 만들어 주라고 알려줬는데 여기서 CORS 에러가 나온다고 하셨다.
- 이미 나한테 이 이야기가 들어왔을 때는 2일 동안 주니어분들 끼리 논의를 하셨었는데 몇 가지 대안은 이런거 였다.
  - cors anywhere 라는 라이브러리를 사용해서 cors 해결
  - 기획과 타협해서 프론트 쪽에서 이미지 매번 수동으로 업로드 해서 이미지 url 따로 받아오지 않게 하기
- 뭐 등등 있었지만, 이 문제는 딱 몇 줄로 해결되는 문제이다.

# 문제 해결 단계
- 사실 NextJS를 실무에서 써본 적은 이 회사가 처음이여서 해결법은 알고는 있었지만 실제 적용은 해보지 않았었다. 지식을 늘릴 수 있는 아주 좋은 기회였다.
- NextJS에서는 rewrites 라는 아주 좋은 기능을 제공해준다. NextJS에 쓰여있는 설명은 아래와 같다.
  - ![rewrite](https://user-images.githubusercontent.com/21151247/224694784-c14a394b-3237-4a42-9221-d2d00fce1c67.PNG)
  - rewrites는 요청으로 들어온 url을 새로운 url로 매핑하는 기능을 제공하는 것이다.
  - rewrites는 프록시 처럼 동작하고 url을 마스킹하여 전혀 다른 url 처럼 보이게 하는 것이다.
  - redirect와는 다른 것이다. redirect는 요청으로 들어온 url을 새로운 페이지의 url로 말 그대로 리다이렉트 하는 것이다.
- 아래와 같은 코드로 문제를 해결했다.(보안상 실제 업무로 쓰인 코드는 아니지만 대충 비슷하게)
  - ![code-1](https://user-images.githubusercontent.com/21151247/224697713-587d07de-34b3-4b8d-9f7b-32ff548b1eb7.png)
  - ![code-2](https://user-images.githubusercontent.com/21151247/224697931-5d40e2f7-8882-4a37-90a3-51a9ce746d8c.png)
- next.conig.js 설정에서 '/cdn-image~' 경로에 해당하는 것은 실제 cdn 서버로 rewrite 시켰다.
- 그리고 서버에서 image url을 받아 왔을 때, .com 까지 최상의 도메인 다음의 경로를 파싱해 '/cdn-image' 경로 뒤에 붙여서 내부적으로 호출하게 수정했다.
- 이 몇줄로 깔끔하게 해결이 되었다.
- 이 기능으로 CORS를 해결하는 것이 가능한 이유는 CORS는 브라우저-서버간의 규약이기 때문이다.
- rewrite를 설정해 두면 특정 api 요청이 발생했을 때 next 서버를 한번 거쳐서 원래 api 요청을 하기 때문에 가능하다고 생각을 했다.
- 원래 CORS가 발생할 때 해결법 들은 여러가지 인데 그 중에 프록시 서버를 만들어서 해결하는 방법과 비슷하다는 생각이 든다.

# 아쉬웠던 점
- Share api 사용할 때 조금만 더 신경 써줬으면, 낭비되는 시간을 줄일 수 있었을 텐데, 사수로서 약간 부족한? 모습을 보였나 생각도 들었다.
- 현재 실무에서 어떠한 프로젝트는 서로 다른 플랫폼(JAVA,PHP 등)의 api를 호출 하고 있는데, 이전 개발자가 해놓은 것 형태는 특정 플랫폼 API를 호출해야 한다면 플래그 값을 하나 두고 코드상 매번 으로 해결하고 있었다.
- 이걸 보고도 NextJS rewrites를 떠올려서 바로 바꾸지 못했던 내 모습을 반성한다. 현재는 거의 크런치 모드 이기 때문에 이 설정을 변경하고 api 호출 로직을 살짝 수정하기에는 테스트 시간도 촉박하니 추후에 꼭 고쳐야겠다.

# Source
- MDN
  - https://developer.mozilla.org/ko/docs/Web/HTTP/CORS
- Next JS
  - https://nextjs.org/docs/api-reference/next.config.js/rewrites