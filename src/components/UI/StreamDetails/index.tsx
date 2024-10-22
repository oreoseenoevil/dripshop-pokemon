import React from 'react'
import { Stream } from '../../../schema/index.z'

const StreamDetails: React.FC<Stream> = props => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative h-[450px] flex flex-col">
      {props.is_live && (
        <span className="absolute top-2 right-2 bg-red-500 px-2 rounded-sm text-white font-semibold">
          Live · {props.viewer_count}
        </span>
      )}
      {props.preview_image && (
        <img
          className="w-full h-56 object-cover"
          src={props.preview_image}
          alt={props.title}
        />
      )}
      <div className="p-2">
        <h2 className="text-xl font-bold">{props.title}</h2>
      </div>
      <div className="bg-gray-100 p-4 border-t border-gray-200 mt-auto">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={props.host_info.picture_thumbnail}
            alt={props.host_info.name}
          />
          <div>
            <p className="text-gray-900 font-semibold">
              {props.host_info.name}
            </p>
            <p className="text-gray-500 text-sm">@{props.host_info.nickname}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {props.host_is_live_at &&
              new Date(props.host_is_live_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StreamDetails

