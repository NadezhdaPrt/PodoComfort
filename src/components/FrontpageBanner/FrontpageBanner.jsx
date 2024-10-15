import Button from "../Button/Button";
import './FrontpageBanner.css';

export default function FrontpageBanner({makeAnAppointment}) {
    return (
        <section className="frontpage-banner">    
          <div className="frontpage-banner__info">
            <h1>Медицинский педикюр</h1>
            <h3>c комфортом</h3>
            <Button makeAnAppointment={makeAnAppointment}>ЗАПИСАТЬСЯ</Button>
          </div>          
        </section>
    )
}