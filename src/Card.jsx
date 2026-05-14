// import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

import { useState } from "react"

export default function Card({
    title = "hello",
    description = "description",
    price,
    image,
    inStock,
    setShowPopup
}) {
    const [isWishListed, setWishListed] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [stock, setStock] = useState(inStock)

    const totalPrice = price * quantity;

    const handlePlus = () => {
        setStock(prev => prev - 1)
        setQuantity(prev => prev + 1)


    }

    const handleMinus = () => {
        setStock(prev => prev + 1)
        setQuantity(prev => prev - 1)
    }

    return (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden w-full max-w-sm">

            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={title}
            />

            <div className="p-5 space-y-4">

                <div className="flex justify-between items-start">

                    <div>
                        <h2 className="font-bold text-lg">
                            {title}
                        </h2>

                        <p className="text-sm text-slate-400">
                            {description}
                        </p>
                    </div>

                    <button
                        onClick={() => setWishListed(prev => !prev)}
                        className="text-xl">
                        {isWishListed ? <FaHeart className="text-red-500" /> : <CiHeart />}
                    </button>

                </div>

                {/* <!-- Price --> */}
                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Price
                    </span>

                    <span className="font-bold text-cyan-400 price">
                        ${price}
                    </span>
                </div>

                {/* <!-- Stock --> */}
                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Remaining Stock
                    </span>

                    <span className="stock text-yellow-400 font-semibold">
                        {stock === 0 ? "Out Of Stock" : `${stock} Left`}
                    </span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="flex justify-between items-center">

                    <span className="text-slate-400">
                        Quantity
                    </span>

                    <div className="flex gap-3 items-center">

                        <button disabled={quantity === 1}
                            onClick={() => handleMinus()}
                            className="minusBtn bg-slate-800 w-8 h-8 rounded-lg disabled:opacity-40">
                            -
                        </button>

                        <span className="quantity font-bold">
                            {quantity}
                        </span>

                        <button
                            disabled={stock === 0}
                            onClick={() => handlePlus()}
                            className="plusBtn bg-slate-800 w-8 h-8 rounded-lg disabled:opacity-40">
                            +
                        </button>

                    </div>

                </div>

                {/* <!-- Total --> */}
                <div className="flex justify-between border-t border-slate-800 pt-4">

                    <span>
                        Total
                    </span>

                    <span className="total font-bold text-cyan-400">
                        $ {totalPrice}
                    </span>

                </div>

                {/* <!-- Cart --> */}
                <button
                    disabled={stock === 0}
                    onClick={() => {
                        (setShowPopup(true))
                        setTimeout(() => { setShowPopup(false) }, 2000)
                    }}
                    className="cartBtn disabled:opacity-50 w-full bg-cyan-600 rounded-xl py-3 font-semibold"
                >
                    Add To Cart
                </button>

            </div>

        </div>
    )
}
