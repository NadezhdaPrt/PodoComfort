import Header from "./components/Header/Header";
import ServiceList from "./components/ServiceList/ServiceList";
import { serviceItem } from "./data";
import AboutSection from "./components/AboutSection/AboutSection";
import FrontpageBanner from "./components/FrontpageBanner/FrontpageBanner";
import OnlineAppointment from "./components/OnlineAppointment/OnlineAppointment";

function App() {
  function makeAnAppointment() {
    console.log('click')
  }
  // function chooseService(modal) {
  //   console.log(modal)
  // }
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
      </main>      
    </>
  )
}

export default App
