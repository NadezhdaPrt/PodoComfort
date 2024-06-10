import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import { serviceItem } from '../../data';
import './ServiceList.css';


const ServiceList = ({icon, title, modal, chooseService}) => {
    const icons = {
        Person3OutlinedIcon,
        DriveEtaOutlinedIcon,
    }
    return (
        <div className='service-list-item' onClick={chooseService}>
            {/* <span><Person3OutlinedIcon fontSize="large" sx={{ color: '#75a7c0' }}/></span> */}
            <span>{icon}</span>
            <p>{title}</p>
        </div>        
    )      
}

export default ServiceList;