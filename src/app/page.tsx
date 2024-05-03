import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full  h-full">
      <div className="flex justify-center items-center bg-[#F3F7FF] w-full text-center sm:h-10">
        <p className="text-base font-medium">Frete grátis para todo o Brasil</p>
      </div>
      <section className="flex flex-col pl-10 pr-10 bg-cover bg-[url('/mobile.png')] w-full h-96" style={{ backgroundImage: '/mobile.png' }}>
        <div className="flex w-full h-6 mt-24">
          <Image src="/jordan.png" alt="jordan" width={20} height={20} />
          <p className="text-white text-lg font-medium ml-3">JordanShoes</p>
        </div>
        <p className="text-white font-medium text-2xl mt-10">A melhor loja de Jordan</p>
        <p className="text-white text-sm mt-6">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
      </section>
      <div className="flex flex-col justify-center items-center w-full pl-4 pr-4 mt-10 mb-8">
        <p className="font-bold text-xl">Os melhores em um só lugar</p>
        <p className="text-center text-sm mt-2">A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center items-center bg-[#F3F7FF] h-56 w-10/12">
          <Image src={'/mobile.png'} alt="tenis" width={50} height={50}/>
        </div>
      </div>
    </div>
  );
}
