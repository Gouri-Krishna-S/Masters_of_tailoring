import React, { useState } from 'react'
import MyContext from './myContext';
const myState = ({children}) => {
    const [loading, setLoading] = useState(false);

  return (
    <MyContext value = {{loading,
        setLoading
    }}>
        {children}
    </MyContext>
  )
}

export default myState