import React from 'react'

// @ts-ignore
const DynamicSlugPage = async({params}) => {

    const {category , slug} = await params;
  return (
    <div>DynamicSlugPage {category} , {slug}</div>
  )
}

export default DynamicSlugPage