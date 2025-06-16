import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Import the image directly to let Vite handle the asset path
import futureImage from '../../public/images/future.png';

// Define the interface for the data structure
interface ServiceData {
  services: Array<{
    id: number;
    name: string;
  }>;
}

function Home() {
  const { t } = useTranslation();
  // Remove unused state if not needed
  // const [data, setData] = useState<ServiceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using mock data instead of calling a non-existent API
        // const result = await fetch('https://api.example.com/data');
        // if (!result.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await result.json();
        
        // Mock data
        const mockData: ServiceData = {
          services: [
            { id: 1, name: 'Web Development' },
            { id: 2, name: 'Mobile Development' },
            { id: 3, name: 'IT Support' }
          ]
        };
        
        // setData(mockData);
        console.log('Mock data loaded:', mockData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-start justify-center font-sans overflow-hidden pt-0 px-4 pb-4 md:pb-0">
      <div
        className="relative z-10 w-full md:max-w-6xl backdrop-blur-md bg-white/10 rounded-lg flex flex-col md:flex-row overflow-hidden px-4 md:px-8 pt-10 pb-4 space-y-8 md:space-y-0 md:space-x-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Signature Text */}
        <div 
          className="absolute top-4 left-4 md:top-4 md:right-4 md:left-auto z-20 max-w-[80%] md:max-w-none"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold italic font-['Playfair_Display'] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <span className="text-yellow-300">{t('Your Globally Trusted')}</span>
            <span className="text-yellow-100"> {t('Tech Solutions')}</span>
          </h2>
        </div>

        {/* Left Content */}
        <div 
          className="flex flex-col justify-start w-full md:w-1/2 space-y-4 md:space-y-2 mt-16 md:mt-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h2 className="mb-4 md:mb-8 text-xl sm:text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] max-w-full">
            <span className="text-yellow-400">Inno</span>
            <span className="text-yellow-500">Wave</span>
            <span className="text-black">620</span>
          </h2>

          <p 
            className="text-sm md:text-lg lg:text-xl font-bold leading-snug text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {t('Your premier')} <span className="text-yellow-300">{t('IT partner')}</span>, {t('crafting')}
            <span className="text-yellow-200"> {t('bespoke digital solutions')}</span> {t('with innovation and elegance')}.
          </p>

          <ul 
            className="text-xs md:text-base lg:text-lg font-medium leading-snug text-white space-y-1 list-disc pl-5 drop-shadow-sm grid grid-cols-2 md:grid-cols-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <li><span className="text-yellow-300">{t('Web Development')}</span></li>
            <li><span className="text-yellow-300">{t('Mobile Development')}</span></li>
            <li><span className="text-yellow-300">{t('IT Support')}</span></li>
            <li><span className="text-yellow-300">{t('API Management')}</span></li>
            <li><span className="text-yellow-300">{t('Troubleshooting')}</span></li>
            <li><span className="text-yellow-300">{t('Cybersecurity')}</span></li>
          </ul>

          <a
            href="#contact"
            className="mt-4 md:mt-8 px-4 py-2 md:py-3 text-base md:text-lg font-bold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out w-fit"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {t('Start Your Journey')}
          </a>
        </div>

        {/* Right Image */}
        <div 
          className="relative w-full md:w-1/2 h-48 md:h-auto flex items-end justify-center overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src={futureImage}
            alt={t('Future Illustration')}
            className="w-full md:w-[120%] h-auto object-contain absolute bottom-0 md:bottom-0 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;