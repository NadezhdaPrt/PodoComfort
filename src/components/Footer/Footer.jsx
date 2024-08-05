import { footer } from '../../data';
import footerPhoto from '/footerPhoto.jpg';
import logoQuattro from '/logoquattro.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <img className='footerPhoto' src={footerPhoto} alt='photo of Natalia'/>
            <div className='footerInfo'>
                <div className='footerInfoContainer'>
                    <img className='footerInfoLogo' src={logoQuattro} alt='logo'/>
                    <div className='footerInfoSocial'>
                        <h3>{footer.logoName}</h3>
                        <h4>{footer.logoDescription}</h4>
                        <span></span>
                    </div>
                </div>
                <div className='footerInfoOfficial'>
                    {footer.requisites.map( (item, i) => { 
                                return <p className='footerInfpOfficialItem' key={i}>{item}</p>
                            })}
                </div>
            </div>
            <div className='footerCopyright'>
                <p>{footer.footerDeveloper}</p>
                <p>{footer.footerIconsCopyright}<a href='https://icons8.ru/'> Icons8</a></p>
            </div>
        </footer>
    )
}