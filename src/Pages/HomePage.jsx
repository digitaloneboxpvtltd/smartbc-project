import   { useEffect} from 'react'
import S1Hero from '../Components/HomeSections/S1Hero'
import { useLocation } from 'react-router-dom';
import S2Services from '../Components/HomeSections/S2Services';
import S3WorkingProcess from '../Components/HomeSections/S3WorkingProcess';


const HomePage = () => {
    // Function to scroll to the Card element
    const location1 = useLocation(); 
    useEffect(() => {
        const scrollToElement = () => {
            const { search } = location1;
            const params = new URLSearchParams(search);
            const scrollToId = params.get('');

            if (scrollToId) {
                const element = document.getElementById(scrollToId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        scrollToElement();
    }, [location1]);

  return (
      <>
          <S1Hero />
          <S2Services />
          <S3WorkingProcess/>
      </>
  )
}

export default HomePage