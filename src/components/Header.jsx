import logoLong from '/Logolong.png';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <header>
            <img src={logoLong} alt={'PodoComfort logo'} height={'80px'}/>
            <MenuIcon fontSize="large" />
        </header>
    )
}

export default Header;