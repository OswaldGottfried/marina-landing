import { PostOrPage } from '@tryghost/content-api'

import { GetStaticProps, NextPage } from 'next'
import { getPosts } from 'pages/api/post'
import { getPost } from 'pages/api/post/[slug]'

import { Post } from 'components/Post/Post'
import { Footer } from 'components/Footer/Footer'

type Props = {
  post?: PostOrPage
}

const PostPage: NextPage<Props> = ({ post }) => {
  if (!post || !post.html) return null

  return (
    <>
      <Post __html={post.html} title={post.title}></Post>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts({ limit: 'all' })

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const notFound = { notFound: true, props: {} }

  if (typeof context.params?.slug !== 'string') {
    return notFound
  }

  const post = await getPost(context.params.slug)

  return { props: { post } }
}

export default PostPage
