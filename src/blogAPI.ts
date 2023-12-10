import { Article } from './types'

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: 'no-store' }) // SSR since Article will be post 2 or 3 times per a day

  if (!res.ok) {
    throw new Error('Error')
  }

  await new Promise((resolve) => setTimeout(resolve, 1500))

  const articles = await res.json()
  return articles
}
