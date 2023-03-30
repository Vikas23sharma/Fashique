import React from 'react'

const ProductHeading = ({heading,para}) => {
  return (
    <div style={{width:"500px",margin:"auto",textAlign:"center"}}>
        <h1>{heading}</h1>
        <p style={{margin:"20px"}}>{para}</p>
    </div>
  )
}

export default ProductHeading