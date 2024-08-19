import React from 'react'
import { getData } from '@/lib/getData'
import NewCategories from '../../new/page'

export default async function update({params:{id}}) {
    const data =  await getData(`categories/${id}`)
  return (
    <NewCategories initialData={data} isUpdate={true}/>
  )
} 