// import Image from "next/image";
import Header from './header';
import AboutUs from './aboutus';

export default function Home() {
  return (
    <div className='p-2 sm:p-6 md:p-12 lg:p-16 xl:p-20'>
    <Header />   <AboutUs/>
      <main>

    
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
