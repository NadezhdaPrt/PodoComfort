import Button from "../Button/Button";
import './OnlineAppointment.css';

export default function OnlineAppointment({makeAnAppointment}) {
    return (
        <div className="service-online-appointment">
            <h2>Онлайн-запись</h2>
            <p>Выберите удобное для Вас время</p>
            <Button makeAnAppointment={makeAnAppointment}>ЗАПИСАТЬСЯ</Button>
          </div>
    )
}