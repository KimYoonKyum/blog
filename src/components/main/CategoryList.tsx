import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Link, Breadcrumbs } from '@mui/material'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}
const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CustomLink = styled((props:{[key:string]:any})=>(<Link {...props}/>))`
  font-size: 20px;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {

  return (
    <CategoryListWrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <CustomLink href="?category=All">{'All'}</CustomLink>
        <CustomLink href="?category=study">{'Study'}</CustomLink>
        <CustomLink href="?category=issue">{'Issue'}</CustomLink>
      </Breadcrumbs>
    </CategoryListWrapper>
  )
}
export default CategoryList
