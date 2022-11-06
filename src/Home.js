import React from 'react'

const Home = (props) => {
  return (
    <div>
        
        <div className="home_arap">
        <h1>FROM Home</h1>
        <p>Name:{props.data.name}</p>
        <p>Name:{props.data.age}</p>
        <button onClick={()=>props.changeAge()}>increse Agne</button>
      </div>
    </div>
  )
}

export default Home