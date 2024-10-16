import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl rounded-md p-2">Github followers: {data.followers} 
        <img src= {data.avatar_url} alt="Profile" width={100} height={100} className= "rounded-full cursor-pointer" />
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
 const res =  await fetch('https://api.github.com/users/Dinesh-Kuniyal')
  return res.json();
}