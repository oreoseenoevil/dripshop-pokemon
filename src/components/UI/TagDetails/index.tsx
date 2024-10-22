import React from 'react'
import { PiUsers, PiVideoCamera, PiShoppingCart } from 'react-icons/pi'
import { Tag } from '../../../schema/index.z'

interface TagDetailsProps extends Tag {
  isFollowing: boolean
  followerCount: number
  streamsCount: number
  productsCount: number
}

const TagDetails: React.FC<TagDetailsProps> = props => {
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden h-40 w-full flex text-white">
      <div className="relative w-full">
        <img
          className="w-full h-40 object-cover"
          src={props.banner}
          alt={`${props.label} banner`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full px-10">
          <div className="w-full flex justify-between border-b pb-3 mt-10">
            <div className="flex gap-5 items-center">
              <img
                className="w-14 h-14 rounded-full border-2 border-blue-500"
                src={props.image}
                alt={`${props.label}`}
              />
              <h1 className="text-white text-4xl font-bold">{props.label}</h1>
              <button className="px-4 py-2 rounded-md bg-transparent border  border-white">
                {props.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="px-2 py-2 border rounded-md">
                  <PiUsers fontSize={25} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Followers</span>
                  <span className="font-normal">{props.followerCount}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-2 border rounded-md">
                  <PiVideoCamera fontSize={25} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Streams</span>
                  <span className="font-normal">{props.streamsCount}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-2 border rounded-md">
                  <PiShoppingCart fontSize={25} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Products</span>
                  <span className="font-normal">{props.productsCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagDetails

