import Header from "./components/Header/Header";
import Button from "./components/Button/Button"
import ServiceList from "./components/ServiceList/ServiceList";
import { serviceItem } from "./data";
import infoNatalia from '../public/infoNatalia.jpg';

function App() {
  
  return (
    <div>
      <Header/>
      <main>
        <section className="frontpage-banner">    
          <h3>Медицинский педикюр</h3>
          <h1>c комфортом</h1>
          <Button/>
        </section>
        <section className="service">          
          <div className="service-list">
            <ServiceList 
              icon={serviceItem[0].icon}
              title={serviceItem[0].title}
            /> 
            <ServiceList {...serviceItem[1]} />
            <ServiceList {...serviceItem[2]} />
            <ServiceList {...serviceItem[3]} />
            <ServiceList {...serviceItem[4]} />
            <ServiceList {...serviceItem[5]} />
          </div>
          <div className="service-online-appointment">
            <h2>Онлайн-запись</h2>
            <p>Выберите удобное для Вас время</p>
            <Button/>
          </div>
        </section>  
        <section className="information">
        <img src={infoNatalia} alt={'Photo of Natalia'} className="information-photo"/>
        <div className="information-text-about">
          <h4>Добрый день!</h4>
          <h2>Меня зовут Наталья.</h2>
          <p>Я сертифицированный мастер-подолог.</p>
          <p>В своем кабинете оказываю услуги аппаратного подологического педикюра любой сложности и помогаю
            своим клиентам решить многие проблемы стоп и ногтей — стержневые мозоли,
            натоптыши, грибок ногтей и кожи, врастающий ноготь и многие другие. </p>
          <p>​Записывайтесь на приём! Буду очень рада видеть Вас у себя в кабинете!</p>
          <Button/>
        </div>
        </section>
          
        
      </main>      
    </div>
  )
}

export default App
