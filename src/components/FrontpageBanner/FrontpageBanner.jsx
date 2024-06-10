import Button from "../Button/Button"

export default function FrontpageBanner({makeAnAppointment}) {
    return (
        <section className="frontpage-banner">    
          <h3>Медицинский педикюр</h3>
          <h1>c комфортом</h1>
          <Button makeAnAppointment={makeAnAppointment}>ЗАПИСАТЬСЯ</Button>
        </section>
    )
}