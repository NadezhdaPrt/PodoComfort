import infoNatalia from '/infoNatalia.jpg';
import Button from '../Button/Button';
import './AboutSection.css';

export default function AboutSection({makeAnAppointment}) {
    
    return (
        <section id='about' className="information">
            <img src={infoNatalia} alt={'Photo of Natalia'} className="information-photo"/>
            <div className="information-text-about">
            <h4>Добрый день!</h4>
            <h2>Меня зовут Наталья.</h2>
            <p>Я сертифицированный мастер-подолог.</p>
            <p>В своем кабинете оказываю услуги аппаратного подологического педикюра любой сложности и помогаю
                своим клиентам решить многие проблемы стоп и ногтей — стержневые мозоли,
                натоптыши, грибок ногтей и кожи, врастающий ноготь и многие другие. </p>
            <p>​Записывайтесь на приём! Буду очень рада видеть Вас у себя в кабинете!</p>
            <Button makeAnAppointment={makeAnAppointment}>ЗАПИСАТЬСЯ</Button>
            </div>
        </section>
    )
}