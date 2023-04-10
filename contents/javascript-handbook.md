---
date: '2023-02-14'
title: '자바스크립트 핸드북'
categories: ['Javascript', 'study']
summary: '들고다니면서 볼 자바스크립트 핸드북'
thumbnail: './javascript.png'
---

# 자바스크립트
- 크로스 플랫폼, 객체지향 스크립트 언어.
- 프로토타입 기반 객체 모델 갖는다.
- 프로토타입 기반 모델은 동적 상속을 제공하여 어떤 객체든 동적으로 추가 가능.
- 객체의 형 간에 차이가 없다.
- 숫자,불리언,문자열의 적은 수의 자료형 갖는다.
- 자바스크립트를 표준화하기 위해서 ECMAScript 명세를 따른다.
- 프로그래밍 패러다임: 프로그래머에게 프로그래밍 관점을 갖게해주고 결정하는 역할.
- 멀티패러다임 언어. (명령형,함수형,객체지향형 패러다임 다 갖고있다)
- 명령형 프로그래밍: 어떻게 동작을 할 것인지 알고리즘 직접 작성함.
- 선언형 프로그래밍: 무엇을 할 것인지 표현
  컴퓨터가 수행할 명령들을 순서대로 작성하여 프로그래밍하는 것.
- 절차적 프로그래밍: 프로시저 콜, 즉 함수 호출을 통해서 추상화와 재사용성 얻어내는 것이 본질인 프로그래밍
- 객체지향 프로그래밍: 프로그램을 수많은 객체라는 기본 단위로 나누고 객체들 간의 상호작용으로 프로그래밍 하는 방식
  - 캡슐화: 변수와 함수를 하나의 단위로 묶는것. 
  - 정보은닉: 프로그램 세부 구현을 외부로 드러나지 않도록 모듈 내부로 감추는 것 이를 통해서 모듈간에 결합도는 낮추고 모듈 안에서는 응집도는 높인다 
  - 상속: 자식 클래스가 부모클래스의 기능을 받아 쓰는것. 
  - 다형성: 하나의 변수 또는 함수가 다른 의미로 해석되는 것을 말한다.
  - 오버로딩: 같은 이름의 함수인데 파라미터에 따라 다르게 동작되는 것.
  - 오버라이딩: 상위 클래스의 함수를 하위클래스에서 재정의 하는것.
  - 제네릭: 선언 시점이 아닌 생성 시점에서 타입을 결정하는 것
- 객체지향 5원칙(SOLID)
  - SRP(Single Responsibility Principle, 단일 책임 원칙):객체는 오직 하나의 역할만을 수행해야한다. ex) 계산 클래스는 사칙연산만
  - OCP(Open-Closed Principle, 개방 폐쇄 원칙): 객체의 기능 확장에 대해서는 개방적이고, 수정에 대해서는 폐쇄적이어야한다.
  - LSP(Liskov Substitution Principle, 리스코프 치환 원칙): 자식 클래스는 언제나 부모 클래스 대신할 수 있어야ㅐ한다.
  - ISP(Inteface Segregation Principle, 인터페이스 분리 원칙): 인터페이스에는 사용하지 않는 메소드는 정의 하지 않는다. 만약 필요하다면 인터페이스를 쪼개야한다. 인터페이스의 SRP 라고 보면된다.
  - DIP(Dependency Inversion Principle, 의존성 역전 원칙): 상위 클래스는 구체적이고 변하기 쉬운 클래스에 의존하면 안된다.
    - ex)자동차는 스노우 타이어,일반 타이어 같은 저 수준에 의존하면 안되고 스노우 타이어, 일반타이어를 추상화 시킨 타이어에 의존해야한다.
- 함수형 프로그래밍: 자료처리를 수학적 함수의 계산으로 취급하고 가변 데이터를 멀리하는 프로그래밍 패러다임.(선언형 프로그래밍)
  - 순수 함수: 동일한 입력에 항상 같은 값을 반환하는 함수. 사이드 이펙트가 없어야한다. 함수의 실행이 프로그램의 실행에 영항을 미치지 않아야한다.
  - 비상태, 불변성: 함수형 프로그래밍에서는 데이터는 변하지 않는 불변성 유지해야함. 데이터의 변경이 필요한 경우 원본 데이터를 변경하지 않고 원본 데이터를 복사해서 복사한 값을 사용한다. 
  - 1급 객체: 함수형 프로그래밍에서는 함수가 1급 객체가 된다. 1급 객체는 파라미터로 전달할 수 있고, 변수나 데이터에 저장 할 수 있고, 반환 값으로 사용할 수 있다. 
  - 고차 함수: 함수를 인자로 전달 할 수 있는 함수. 함수의 리턴 값으로 또 다른 함수 사용할 수 있는 함수
  - 함수형 프로그래밍 장점: 높은 수준 추상화, 함수 단위의 코드 재사용
  - 함수형 프로그래밍 단점: 디버깅 과정이 어렵다. 조합이 어려움

# 개념들
- 웹 페이지에서 global 객체는 window.
- 변수 호이스팅: 나중에 선언된 변수를 참조 할 수 있는 것.함수나 문맥의 최상단으로 끌어 올려지는것. 그렇지만 끌어올려진 변수는 undefined를 반환
  - 자바스크립트엔진은 코드상에서 변수들을 위한 메모리를 설정한다. 이것을 호이스팅이라고한다.
  - tdz: 변수가 선언되고 초기화 되지않은 상태
- 자바스크립트 변수 선언은 세가지 과정을 거친다
  - 선언단계: 변수를 실행컨텍스트에 등록한다.
  - 초기화단계: undefined로 초기화
  - 할당단계: 값을 할당
  - 이때 변수가 초기화 되지 않은 구간은 tdz 라고한다.
- 함수 호이스팅: 함수 선언만 호이스팅되고 함수 표현식은 되지 않는다.
- 함수 선언: 말 그대로 function 키워드를 사용해 함수를 선언한것
- 함수 표현식: 함수를 선언하지만 function 키워드가 맨 처음에 오지 않는 경우
- const로 선언된 객체나 배열의 내용은 바꿀수 있다.
- ecma script 표준은 7가지의 데이터 형 
  - 6가지 원시 데이터형:Boolean, null, undefined, Number, String, Symbol / 그리고 Object 
  - null vs undefined: null은 변수를 선언하고 빈값을할당한 상태. undefined는 변수를 선언하고 아무런 값도 할당되지 않은 상태. 
  - type은 null은 object이고 undefined는 undefined이다
- 리터럴: 값을 나타내기 위한 코드 ex) String, int ...
- 엄격모드: 기존에 무시되던 에러들을 throwing, js엔진 최적화 작업을 어렵게 만드는 실수 바로잡음. es5부터 기존의 기능들이 변경되어 호환성 문제가 생기는데 이를 방지하기 위해서 사용한다. 쓰지 않으면 과거의 코드가 동작하는 일이 발생할 수 있다. class나 import 같은 문법 쓰면 알아서 use strict 명령서 포함되어있어서 따로 설정 안해줘도 된다.
- 스코프: 변수에 접근할 수 있는 범위
  - 함수스코프 vs 블록스코프
  - 함수스코프는 변수가 함수내에서 유효한 범위를 가진다는 것이다.
  - let과 const가 나오면서 블록스코프도 가질수잇다.
- 렉시컬 스코프: 함수가 어디에서 호출되는지가 아니라 어디서 선언되었는지를 가지고 스코프를 정하는 것. 정적 스코프라고도 한다.
- 클로저: 자바스크립트는 함수의 중첩을 가능하게 하는데, 내부함수에서 외부함수의 문맥에 접근할 수 있도록 하는 승인해주는것.
- 실행 컨텍스트: 자바스크립트 코드가 실행되기 위한 환경.
  - 전역컨텍스트와 함수 컨텍스트가 있다.
  - 이 컨텍스트들의 실행순서를 결정하는 것이 실행컨텍스트 스택이다.
  - 컨텍스트 생성시에는 변수객체, 스코프체인, this가 생성된다.
  - 변수들은 변수 객체에서 찾고 변수객체에 없다면 스코프 체인을 타고 올라가서 찾는다.
  - 스코프체인? 변수를 검색하는 메커니즘
  - 프로토타입체인? 객체의 프로퍼티를 검색하는 메커니즘
- this : 자신이 속한 객체나 자신이 생성할 인스턴스를 가리키는 자기참조 변수
  - 일반 함수에서는 전역 객체에 바인딩된다.
  - 메소드 내부에서는 메소드를 호출한 객체와 바인딩된다.
  - 생성자 함수 내부에서는 생성자 함수가 생성할 인스턴스와 바인딩된다.
  - apply,bind,call 사용시 첫번째 인수로 전달되는 객체에 바인딩된다.
  - apply와 call의 차이점은 바인딩할 함수의 파라미터를 배열로 넘길것인지 나열할지 차이다.
  - bind는 원본함수를 가진 새로운 함수를 생성하는 것
  - 화살표함수에서 this는 자신을 감싼 범위
- 프로토타입
  - 자바스크립트는 프로토타입 기반 언어인데, 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로 프로토타입 객체를 가진다는 의미. 
  - 그 프로토타입 객체는 또다시 상위의 프로토타입 객체를 가지는데 이렇게 이어진 것을 프로토타입 체인이라고 한다. 
  - 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있는데 이 부모객체를 프로토타입이라고 한다. 
  - 각 객체가 상속하는 속성과 메소드는 해당 객체에 있는 것이 아니라 프로토타입 속성에 정의되어 있다. 
  - prototype 속성은 상속시키려는 멤버들이 정의된 객체
  - \_\_proto\_\_ : 자신의 프로토타입에 접근할 수 있는 속성. 프로토타입 체이닝이 이 속성을 따라 올라가면서 특정 속성이나 메소드 찾는 것이다.
- 이벤트 전파
  - 이벤트 버블링: 특정 엘리먼트에 이벤트가 발생하면 그 엘리먼트의 상위 엘리먼트를 타고 올라가면서 이벤트가 발생하는것
  - 이벤트 캡쳐링: 특정 엘리먼트에 이벤트가 발생 하면 최상위 요소인 body에서 부터 해당 엘리먼트까지 타고 내려가면서 이벤트 발생하는것.
  - stopPropagation(): 이벤트가 전파되는 것을 방지는 Web API
- 이벤트 위임
  - 하위 엘리먼트에 각각 이벤트를 바인딩하는게 아니라 부모 요소 하나에 이벤트를 바인딩해서 하위 엘리먼트들을 제어하는 방법
- Symbol
  - 객체 프로퍼티의 고유한 식별자로 사용하는 것
- 이터러블(Iterable)
  - 순회가능한 객체. Symbol.iterator 속성 가지고 있다.이터레이터 객체 반환 하는 객체
  - String,Map,Set,Array 등이 있다.
  - 이터러블을 사용하면 for of 루프를 통해 아이템을 가져올 수 있다.(디스트럭쳐링도 가능)
- 이터레이터
  - next 메소드 구현하고 있고, {value,done}을 반환하는 객체
- 제너레이터
  - 이터레이터를 편하게 사용할 수 있게 해주는 보조수단. 
  - function* 과 yield를 사용해서 구현
- promise
  - 비동기 처리에 사용되는 자바스크립트 객체.
  - 대기/이행/실패로 나눠서 콜백함수 실행이 가능하고요
  - promise.all이나 allsettled로 api로 여러개의 요청도 한번에 처리가 가능.
  - all은 여러개의 비동기 요청중에서 하나라도 실패하면 나머지가 다 무시되고
  - allsettled은 각 요청의 성공과 실패 상관없이 처리된다
- async/await
  - 프로미스 객체를 좀 더 편리하게 사용하기 위해 나온것
  - 프로미스 객체를 반환하는 함수에만 사용이 가능하다.
- 즉시실행함수
  - 생성과동시에 실행되는 함수. 한번만 실행되게 하는 함수 같은 곳에 쓰인다.


### 참고 문서

  - [<https://developer.mozilla.org/ko/>](<https://developer.mozilla.org/ko/>)
  - [<https://ko.javascript.info/>](<https://ko.javascript.info/>)