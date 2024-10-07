import { footer } from '../../data';
import footerPhoto from '/footerPhoto.jpg';
import logoQuattro from '/logoquattro.png';
import whatsapp from '../../../public/icons8-whatsapp-32.png';
import telegram from '../../../public/icons8-telegram-32.png';
import vkontakte from '../../../public/icons8-vk-circled-32.png';
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
                <div id='contacts' className='footerInfoOfficial'>
                    {footer.requisites.map( (item, i) => { 
                                return <p className='footerInfpOfficialItem' key={i}>{item}</p>
                            })}
                    <div className='footerSocialMedia'>
                        <a href='https://wa.me/79114042707' target="_blank">
                            <span><img className='socialIcon' src={whatsapp} alt='whatsapp icon'/></span>
                        </a>
                        <a href='https://t.me/podocomfort'>
                            <span><img className='socialIcon' src={telegram} alt='telegram icon'/></span>
                        </a>
                        <a href='https://vk.com/podocomfort_ptz'>
                            <span><img className='socialIcon' src={vkontakte} alt='vkontakte icon'/></span>
                        </a>
                </div>
                </div>
               
            </div>
            <div className='footerCopyright'>
                <p>{footer.footerDeveloper}</p>
                <p>{footer.footerIconsCopyright}<a href='https://icons8.ru/'> Icons8</a></p>
            </div>
        </footer>
    )
}