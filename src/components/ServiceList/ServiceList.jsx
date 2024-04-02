import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import { serviceItem } from '../../data';
import './ServiceList.css';

const ServiceList = ({icon, title}) => {
    
    return (
        <div className='service-list-item'>
            {/* <span><Person3OutlinedIcon fontSize="large" sx={{ color: '#75a7c0' }}/></span> */}
            <span>{icon}</span>
            <p>{title}</p>
        </div>        
    )      
}

export default ServiceList;