import React from 'react'
import PropTypes from 'prop-types'
import { Article } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

type ArticleCardProps = {
  article: Article
}
ArticleCard.propTypes = {}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div>
      <article className='shaddow my-4' key={article.id}>
        <Link href={`articles/${article.id}`} className='hover:opacity-75'>
          <Image src='https://source.unsplash.com/random' alt='' width={1280} height={300} />
        </Link>
        <div className='bg-white flex flex-col justify-start p-5'>
          <Link href='#' className='text-blue-700 pb-4 font-bold'>
            Technology
          </Link>
          <Link
            href={`articles/${article.id}`}
            className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'
          >
            {article.title}
          </Link>
          <p className='text-sm pb-3 text-slate-900'>Published on {article.createdAt}</p>
          <Link href={`articles/${article.id}`} className='text-slate-900 pb-6'>
            {article.content.length > 70 ? article.content.substring(9, 70) : article.content}
          </Link>
          <Link href={`articles/${article.id}`} className='text-pink-800 hover:text-slate-900'>
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleCard
