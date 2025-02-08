import Header from './header';
import AboutUs from './aboutus';
import TerhalSuitcase from './terhalsuitcase';

export default function Home() {
  return (
    <div >
      <Header />  
      <main>
        <section id="about-us "  className="min-h-[700px]" >
          <AboutUs />
        </section>
        <section id="terhal-suitcase"  className="min-h-[500px]">
          <TerhalSuitcase />
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
