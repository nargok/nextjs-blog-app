import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function ArticleList() {
  return (
    <div>
      <article className='shaddow my-4'>
        <Link href='#' className='hover:opacity-75'>
          <Image src='https://source.unsplash.com/random' alt='' width={1280} height={300} />
        </Link>
        <div className='bg-white flex flex-col justify-start p-5'>
          <Link href='#' className='text-blue-700 pb-4 font-bold'>
            Technology
          </Link>
          <Link href='#' className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
            Next.jsの勉強中
          </Link>
          <p className='text-sm pb-3 text-slate-900'>Published on 2023/12/9</p>
          <Link href='#' className='text-slate-900 pb-6'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae in voluptate dolores
            ullam! Ipsum alias sequi quas, nulla, incidunt sit tempora obcaecati quod expedita
            suscipit temporibus ipsa aspernatur, dolorum quasi!
          </Link>
          <Link href='#' className='text-pink-800 hover:text-slate-900'>
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
