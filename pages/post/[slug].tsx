import { PostOrPage } from '@tryghost/content-api'
import { DesktopContentWrapper } from 'components/DesktopContentWrapper'
import Template from 'components/Template/Template'
import { GetStaticProps, NextPage } from 'next'
import { getPosts } from 'pages/api/post'
import { getPost } from 'pages/api/post/[slug]'
import style from './[slug].module.css'
import { useRouter } from 'next/router'

import Arrow from 'public/icons/arrow.svg'

type Props = {
  post?: PostOrPage
}

const PostPage: NextPage<Props> = ({ post }) => {
  const { pathname, back } = useRouter()
  if (!post) return null

  return (
    <DesktopContentWrapper as="article">
      <button
        type="button"
        aria-label="Назад"
        className={style.backButton}
        onClick={() => back()}
      >
        <Arrow className={style.icon} /> Назад
      </button>
      <h1>{post.title}</h1>
      {post.html && <div dangerouslySetInnerHTML={{ __html: post.html }} />}
    </DesktopContentWrapper>
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
