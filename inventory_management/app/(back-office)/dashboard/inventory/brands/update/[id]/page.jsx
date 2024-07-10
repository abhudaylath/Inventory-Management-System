import React from 'react'
import NewBrands from '../../new/page'
import { getData } from '@/lib/getData'

export default async function update({params:{id}}) {
    const data =  await getData(`brands/${id}`)
  return (
    <NewBrands initialData={data} isUpdate={true}/>
  )
}
