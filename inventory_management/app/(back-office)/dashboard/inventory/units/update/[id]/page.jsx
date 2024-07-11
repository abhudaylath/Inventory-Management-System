import React from 'react'
import { getData } from '@/lib/getData'
import NewUnits from '../../new/page'

export default async function update({params:{id}}) {
    const data =  await getData(`units/${id}`)
  return (
    <NewUnits initialData={data} isUpdate={true}/>
  )
}
