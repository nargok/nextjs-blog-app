'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

function CreateNewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>新規作成</h2>
      <form className='bg-slate-200 p-6 rounded shadow' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='' className='text-gray-700 text-sm font-bold mb-2'>
            URL
          </label>
          <input
            type='text'
            id='url'
            className='shadow border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none'
            {...register('url')}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='' className='text-gray-700 text-sm font-bold mb-2'>
            タイトル
          </label>
          <input
            type='text'
            id='title'
            className='shadow border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none'
            {...register('title', { required: true })}
          />
          {errors.title && <div className='text-red-600'>タイトルの入力が必要です</div>}
        </div>
        <div className='mb-4'>
          <label htmlFor='' className='text-gray-700 text-sm font-bold mb-2'>
            本文
          </label>
          <textarea
            id='content'
            className='shadow border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none'
            {...register('content')}
          />
        </div>
        <button type='submit' className='py-2 px-4 border rounded-md bg-orange-300'>
          投稿
        </button>
      </form>
    </div>
  )
}

export default CreateNewPage
