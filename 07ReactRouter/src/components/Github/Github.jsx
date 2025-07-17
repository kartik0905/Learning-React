import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch("https://github.com/kartik0905")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-amber-600 text-3xl text-white p-4'>Github Followers: {data.followers}</div>
  )
}

export default Github