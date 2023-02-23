import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      제 블로그에 오신 분들 모두 환영 해요, 잘못 된 지식이 있으면 지적 부탁드립니다!
      <br />© Powered By KIM YOON KYUM.
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
export default Footer
