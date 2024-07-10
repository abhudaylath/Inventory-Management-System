import React from 'react'
import { getData } from '@/lib/getData'
import NewSupplier from '../../new/page'

export default async function update({params:{id}}) {
    const data =  await getData(`supplier/${id}`)
  return (
    <NewSupplier initialData={data} isUpdate={true}/>
  )
}