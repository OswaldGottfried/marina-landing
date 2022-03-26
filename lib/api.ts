import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: (process.env.API_URL as string) || '',
  key: process.env.CONTENT_API as string,
  version: 'v4',
})
