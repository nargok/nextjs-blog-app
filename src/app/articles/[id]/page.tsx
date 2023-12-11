import React from 'react'
import Image from 'next/image'
import { getDetailArticle } from '@/blogAPI'

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getDetailArticle(params.id)
  console.log(article)

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image src='https://source.unsplash.com/random' alt='' width={1280} height={300} />
      <h1 className='text-4xl text-center mb-10 mt-10'>Next.js14の勉強中です</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>ここが本文です</p>
      </div>
    </div>
  )
}
