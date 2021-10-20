import React from 'react'

const Asset = (props) => {
    return (
        <div>
            <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.asset.image} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.asset.name}</div>
                <p className="text-gray-700 text-base">
                {props.asset.description}
                </p>
            </div>
            </div>
        </div>
    )
}

export default Asset
