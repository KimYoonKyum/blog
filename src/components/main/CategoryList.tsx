import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}
type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  const [category, setCategory] = React.useState(selectedCategory)

  const onChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
  }

  return (
    <CategoryListWrapper>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={category}
        onChange={onChange}
        autoWidth
        label="Tag"
      >
        {Object.entries(categoryList).map(([name, count]) => (
          <MenuItem value={name} key={name}>
            <CategoryItem
              to={`?category=${name}`}
              active={name === selectedCategory}
            >
              #{name}({count})
            </CategoryItem>
          </MenuItem>
        ))}
      </Select>
    </CategoryListWrapper>
  )
}
export default CategoryList
