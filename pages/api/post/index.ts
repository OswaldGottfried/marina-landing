import { Params, PostsOrPages } from '@tryghost/content-api'
import { api } from 'lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export const getPosts = async (options: Params): Promise<PostsOrPages> =>
  api.posts.browse(options)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsOrPages>,
) {
  getPosts({ limit: 'all' }).then((result) => res.status(200).json(result))
}
