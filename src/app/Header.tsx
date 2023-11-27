import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='py-5 px-10 border-b flex justify-between items-center'>
      <div>
        <h1>Next13 Blog</h1>
      </div>
      <div>
        <nav className='text-sm font-medium'>
          <Link href='/articles/new' className='bg-orange-300 py-3 px-3 rounded-md'>
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  )
}
