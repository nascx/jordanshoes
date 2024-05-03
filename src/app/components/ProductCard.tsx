import React from 'react'

import Image from 'next/image'

const ProductCard = () => {
    return (
        <div className="flex flex-col w-full pl-8">
            <div className="flex justify-center items-center bg-[#F3F7FF] h-56 w-11/12">
                <Image src={'/products/green.png'} alt="tenis" width={250} height={60} />
            </div>
            <div className="flex flex-col h-full justify-start items-start">
                <p className="font-semibold text-lg mt-4">Air Jordan Mid Ducth</p>
                <p className="text-[#7CA2F4] font-medium mt-2">Tênis Air Jordan</p>
                <p className="font-medium mt-4 text-[#121214] text-xl price">R$ 1.199,99</p>
            </div>
        </div>
    )
}

export default ProductCard