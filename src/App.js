import React, { useState, useEffect } from 'react'
import Filters from './components/Filters'
import Launch from './components/Launch'
import axios from 'axios'
import './index.css'

function App() {
  const [data, setData] = useState([])

  const getData = async (launchSuccess, landSuccess, launchYear) => {
    await axios
      .get(
        `https://api.spacexdata.com/v3/launches?limit=20&launch_success=${
          launchSuccess || ''
        }&land_success=${landSuccess || ''}&launch_year=${launchYear || ''}`
      )
      .then(data => setData(data.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1 className="main-heading">SpaceX Launch Programs</h1>

      <div className="sidebar">
        <Filters
          cb={val =>
            getData(val.launchSuccess, val.landSuccess, val.launchYear)
          }
        />
      </div>

      <div className="container">
        {data.map(launch => (
          <Launch data={launch} />
        ))}
      </div>

      <footer>
        <p>Developed By: Dipanshu Chaubey</p>
      </footer>
    </div>
  )
}

export default App
