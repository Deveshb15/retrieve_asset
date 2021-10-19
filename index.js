import fetch from "node-fetch";

const assets = []

const options = {method: 'GET'};

async function ret() {
    await fetch('https://api.opensea.io/api/v1/assets?owner=0x3689df917b622d8c35e01577bde8198b7e79b83d&order_direction=desc&offset=0&limit=20', options)
    .then(res => {
        const data = res.json()
        data.forEach(asset => {
            assets.push({token_id: asset.token_id, image: asset.image_url})
        })
        console.log(assets)
    })
    .catch(err => console.error(err));
} 

ret()