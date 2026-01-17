import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PersonPost({props}) {
    const [person, setPersonPost] = useState([])

  useEffect(() => {

    const fetchPersonPost = async () => {
 try {
const res = await axios.get(
 'https://jsonplaceholder.typicode.com/posts/1'
        )
        setPersonPost(res.data)
        console.log(res.data)

        console.log(person)
      } catch (error) {
        console.log("Error during fetching data", error)
      }
    }

    fetchPersonPost()

  }, [])

  return (
    <>

    </>
  )
}

export default PersonPost





  