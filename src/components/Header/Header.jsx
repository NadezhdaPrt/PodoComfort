import { useState } from 'react';
import logoLong from '/Logolong.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from 'primereact/sidebar';
import './Header.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <header>
            <img src={logoLong} alt={'PodoComfort logo'} height={'80px'}/>
            <div className="card flex justify-content-center" >
                <Sidebar style={{ backgroundColor: 'var(--gray-900)', color: 'var(--primary-color-text)', padding: '3rem' }} visible={visible} onHide={() => setVisible(false)}>
                    <h2>МЕНЮ</h2>
                    <a href='#about'>
                        <p onClick={() => setVisible(false)}>Обо мне</p>
                    </a>
                    <a href='#certificates'>
                        <p onClick={() => setVisible(false)}>Моя квалификация</p> 
                    </a>
                    <a href='#seviceList'>
                        <p onClick={() => setVisible(false)}>Мои услуги</p>  
                    </a>
                    <a href='#contacts'>
                        <p onClick={() => setVisible(false)}>Контакты</p>  
                    </a>                           
                </Sidebar>
                <div className='menuIconContainer'>
                    <MenuIcon sx={{ fontSize: 60 }} onClick={() => setVisible(true)}/>
                </div>
            </div>
            
        </header>
    )
}

export default Header;