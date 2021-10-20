import { useState, useRef } from 'react'
import Asset from './components/Asset'

import axios from 'axios'
import {CommonLoading} from 'react-loadingg'

function App() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const inputEl = useRef(null)

  const getData = async () => {
    try {
      setLoading(true)
      if(inputEl != null) {
        const res = await axios(`https://api.opensea.io/api/v1/assets?owner=${inputEl.current.value}&order_direction=asc&offset=0&limit=20`)
        const data = await res.data
        const temp_arr = []
        const asset_arr = data.assets
        asset_arr.forEach(asset => {
          temp_arr.push({
            name: asset.name,
            description: asset.description,
            tokenID: asset.token_id,
            image: asset.image_url
          })
        })
        setAssets(temp_arr)
        setLoading(false)
        console.log(temp_arr)
      }
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen">
      <div className="py-4">
        <h1 className="text-6xl font-extrabold">Get your Assets</h1>
      </div>
      <div className="py-4">
        <input ref={inputEl} className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter wallet address" />
        <button className="py-2 px-3 bg-green-300 rounded shadow ml-4" type="button" onClick={getData}>
          retrieve assets
        </button>
      </div>
      
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {loading ? <CommonLoading /> : assets.map(asset => {
            return <Asset asset={asset} key={asset.tokenID} />
        })}
      </div> 
      
    </div>
  )
}

export default App
