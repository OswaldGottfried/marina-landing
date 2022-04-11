import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Template from 'components/Template/Template'
import { FirstScreen } from 'sections/FirstScreen/FirstScreen'
import { Cases } from 'sections/Cases/Cases'
import { getPosts } from './api/post'
import { PostOrPage } from '@tryghost/content-api'

type Props = {
  posts: PostOrPage[]
}

const Home: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Марина Молитвина</title>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#22232B" />
      <meta name="description" content="Марина Молитвина Маркетолог SMM" />
    </Head>

    <Template>
      <FirstScreen />
      <Cases cases={posts} />
    </Template>
  </>
)

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts = await getPosts({
    limit: 'all',
    // fields: ['id', 'title', 'slug', 'feature_image', 'excerpt'],
  })

  return {
    props: { posts },
  }
}

export default Home
