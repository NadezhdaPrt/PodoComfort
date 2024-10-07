import Header from "./components/Header/Header";
import ServiceList from "./components/ServiceList/ServiceList";
import { serviceItem } from "./data";
import AboutSection from "./components/AboutSection/AboutSection";
import FrontpageBanner from "./components/FrontpageBanner/FrontpageBanner";
import OnlineAppointment from "./components/OnlineAppointment/OnlineAppointment";
import CertificatesSection from "./components/CertificatesSection/CertificatesSection";
import ProblemsSection from "./components/ProblemsSection/ProblemsSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import Footer from "./components/Footer/Footer";
import { ScrollTop } from 'primereact/scrolltop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
    
  return (
    <>
      <Header/>
      <main>
        <FrontpageBanner/>
        <section className="service">          
          <div className="service-list">
            {serviceItem.map((serviceItem) => (
              <ServiceList key={serviceItem.modal} {...serviceItem} />
            ))
            }            
          </div>
          <OnlineAppointment/>
        </section>  
        <AboutSection/>
        <CertificatesSection/>
        <ProblemsSection/> 
        <FeedbackSection/>       
      </main>
      <Footer/>
      <ScrollTop threshold={100} className="w-5rem h-5rem border-round"><KeyboardArrowUpIcon sx={{ fontSize: 100 }}/></ScrollTop>     
    </>
  )
}

export default App
