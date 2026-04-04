import React, { useEffect } from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    console.log('count', count)
  }, [count])
  return (
    <div>App</div>
  )
}