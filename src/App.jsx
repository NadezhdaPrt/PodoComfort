import Header from "./components/Header/Header";
import ServiceList from "./components/ServiceList/ServiceList";
import { serviceItem } from "./data";
import AboutSection from "./components/AboutSection/AboutSection";
import FrontpageBanner from "./components/FrontpageBanner/FrontpageBanner";
import OnlineAppointment from "./components/OnlineAppointment/OnlineAppointment";
import CertificatesSection from "./components/CertificatesSection/CertificatesSection";
import ProblemsSection from "./components/ProblemsSection/ProblemsSection";

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
      </main>      
    </>
  )
}

export default App
