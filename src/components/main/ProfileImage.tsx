import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
// @ts-ignore
import profileImage from '../../images/my_profile2.png'

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={profileImage} alt="Profile Image" />
}

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`


export default ProfileImage