import Header from "./components/Header";
import Button from "./components/Button";
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';

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
        <section className="service-list">
          <div>
            <span><Person3OutlinedIcon/></span>
            <p>Консультация (очная)</p>
          </div>
        </section>       
      </main>      
    </div>
  )
}

export default App
