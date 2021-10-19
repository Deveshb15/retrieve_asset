import { useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {
  const [assets, setAssets] = useState([])

  const getData = () => {
    axios(`https://api.opensea.io/api/v1/assets?owner=0x3689df917b622d8c35e01577bde8198b7e79b83d&order_direction=desc&offset=0&limit=20`)
    .then(res => {
        const temp_arr = [] 
        const data = res.data
        const asset_arr = data.assets
        asset_arr.forEach(asset => {
          temp_arr.push({
                name: asset.name,
                description: asset.description,
                tokenID: asset.token_id,
                image: asset.image_url
            })
        })
        console.log(temp_arr)
        setAssets(temp_arr)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={getData}>
            count is
          </button>
        </p>
        {assets.map(asset => {
            return <p>{asset.name}</p>
          })}
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
