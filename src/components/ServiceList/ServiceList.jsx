import ModalServiceItem from '../ModalServiceItem/ModalServiceItem';
import Button from '../Button/Button';
import { serviceItem } from '../../data';
import { useState } from 'react';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import './ServiceList.css';

const ServiceList = ({icon, image, title, paragraphOne, serviceContent}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);   
    function openModal() {
        setIsModalOpen(true);
        console.log(serviceContent);
        console.log(typeof serviceContent);
    }
        
    return (
        <>
            <div className='service-list-item' onClick={openModal}>
                {/* <span><Person3OutlinedIcon fontSize="large" sx={{ color: '#75a7c0' }}/></span> */}
                <span>{icon}</span>
                <h3>{title}</h3>                
            </div> 
            <ModalServiceItem open={isModalOpen}>
                <div className='modalServiceBlock'>
                    <img src={image} alt={'personal consulting'} height={'50px'}/>
                    <div className='modalServiceBlockInfo'>
                        <h2>{title}</h2>
                        <p>{paragraphOne}</p>
                        <ul>
                        {serviceContent.map( (item, i) => { 
                            return <li key={i}>{item}</li>
                                })}                        
                        </ul>
                        <br/>
                        <Button>ПОДРОБНЕЕ</Button>
                    </div>
                    <button className='closeButton' onClick={() => setIsModalOpen(false)}><CloseTwoToneIcon/></button>
                </div>                
            </ModalServiceItem>       
        </>        
    )      
}

export default ServiceList;