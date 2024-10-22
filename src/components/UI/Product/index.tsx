import React from 'react'
import { Product as ProductProps } from '../../../schema/index.z'

const Product: React.FC<ProductProps> = props => {
  return (
    <div className="w-full h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
      <img
        className="w-full h-[200px] object-cover"
        src={props.image}
        alt={props.name}
      />
      <div className="p-2 h-[120px] flex">
        <div className="flex flex-col items-start h-full">
          <h2 className="text-md font-bold">{props.name}</h2>
          <div className="flex space-x-2 items-center">
            <span className="capitalize text-sm text-gray-400">
              {props.tags}
            </span>
            <span className="text-sm">· Qty: {props.items_in_stock}</span>
          </div>
          <span className="text-xl font-bold text-black mt-auto">
            ${props.price}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product

