import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
  posts,
  selectedCategory,
}) {
  // const postListData = useMemo(
  //   () =>
  //     posts.filter(
  //       ({
  //         node: {
  //           frontmatter: { categories },
  //         },
  //       }: PostListItemType) =>
  //         selectedCategory !== 'All'
  //           ? categories.includes(selectedCategory)
  //           : true,
  //     ),
  //   [selectedCategory],
  // )
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList
