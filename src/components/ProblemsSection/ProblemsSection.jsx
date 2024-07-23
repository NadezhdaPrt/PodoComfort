import { problems } from '../../data';
import problemListImage from '/problemList.jpg';
import './ProblemsSection.css';

export default function ProblemsSection() {

    return (
        <section>
            <div className='problemsSection'>
                <div className='problemsSectionInfo'>
                    <h2>{problems.title}</h2>
                    <br/>
                    <ul>
                        {problems.problemsContent.map( (item, i) => { 
                            return <li key={i}>{item}</li>
                        })}                        
                    </ul>
                    <br/>
                    <p className='paragrath'>{problems.paragrath}</p>
                    <p className='contacts'>{problems.phoneNumber}</p>                
                </div>
                <img className='problemsSectionImage' src={problemListImage}/>
            </div>            
        </section>
    )
}