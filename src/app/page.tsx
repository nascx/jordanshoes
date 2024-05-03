import ProductCard from "./components/ProductCard";
import HeroSection from "./components/HeroSection";

const data = [{
  description: 'Air Jordan 1 Mid Dutch Green',
  category: 'Tênis Air Jordan',
  price: 'R$ 1.199,99'
}]

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full  h-full">
      <div className="flex justify-center items-center bg-[#F3F7FF] w-full text-center sm:h-10">
        <p className="text-base font-medium">Frete grátis para todo o Brasil</p>
      </div>
      <HeroSection />
      <div className="flex flex-col justify-center items-center w-full pl-4 pr-4 mt-10 mb-8">
        <p className="font-bold text-xl">Os melhores em um só lugar</p>
        <p className="text-center text-sm mt-2">A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
      </div>
      {
        data.map((product, i) => (
          <ProductCard key={i}/>
        ))
      }
    </div>
  );
}
