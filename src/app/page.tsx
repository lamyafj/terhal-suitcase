// import Image from "next/image";
import Header from './header';
import AboutUs from './aboutus';

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-us");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='p-2 sm:p-6 md:p-12 lg:p-16 xl:p-20'>
    <Header />   <AboutUs/>
      <main>

    
      </main>

      {/* Dots Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-4 h-4 rounded-full ${
              activeSection === section.id ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => scrollToSection(section.id)}
          ></button>
        ))}
      </div>
    </div>
  );
}
