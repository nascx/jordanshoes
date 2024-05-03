import React from 'react'

import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="flex flex-col pl-10 pr-10 bg-cover bg-[url('/mobile.png')] w-full h-96" style={{ backgroundImage: '/mobile.png' }}>
            <div className="flex w-full h-6 mt-24">
                <Image src="/jordan.png" alt="jordan" width={20} height={20} />
                <p className="text-white text-lg font-medium ml-3">JordanShoes</p>
            </div>
            <p className="text-white font-medium text-2xl mt-10">A melhor loja de Jordan</p>
            <p className="text-white text-sm mt-6">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
        </section>
    )
}

export default HeroSection