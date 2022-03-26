import { Nullable, Params, PostOrPage } from '@tryghost/content-api'
import { api } from 'lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export const getPost = async (
  slug: Nullable<string>,
  options?: Params,
): Promise<PostOrPage> => api.posts.read({ slug }, options)

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<PostOrPage>,
) {
  getPost(request.query.slug.toString()).then((result) =>
    response.status(200).json(result),
  )
}
