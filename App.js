import React from 'react'
import { useState } from 'react'


export const SomeComponent = () => {
  const [data, setData ] = useState(null)

  const retrieveData = async () => {
    let response = await fetch('/api');
    response = await response.json();
    if (response != undefined){
      const data = response['data']
      setData(data)
    }
  }
  retrieveData()
  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export const App = () => {

  
  return (
    <>
      <SomeComponent />  
    </>
  )
}

export default App;
