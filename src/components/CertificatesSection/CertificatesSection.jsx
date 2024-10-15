import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, ImageWithZoom } from 'pure-react-carousel';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIconArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import './CertificatesSection.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CertificatesSection() {
    return (
        <section id='certificates'>
            <h2 className='sertificateHeading'>Моя квалификация</h2>
            <CarouselProvider
                naturalSlideWidth={75}
                naturalSlideHeight={100}
                totalSlides={11}
                visibleSlides={3}
                dragStep={2}
                step={2}
                infinite             
            >
                <div className='sliderContainer'>
                    <Slider>                                          
                        <Slide index={0}>                            
                            <Image className='sliderImage' src='/0421.jpeg'/>                           
                        </Slide>                    
                        <Slide index={1}>                            
                            <Image className='sliderImage' src='/0422.jpg'/>                            
                        </Slide>                    
                        <Slide index={2}>                            
                            <Image className='sliderImage' src='/0521.jpeg'/>                            
                        </Slide>                   
                        <Slide index={3}>                            
                            <Image className='sliderImage' src='/0619.jpeg'/>                            
                        </Slide>                    
                        <Slide index={4}>                            
                            <Image className='sliderImage' style={{height: 'auto'}} src='/0620.png'/>                            
                        </Slide>                    
                        <Slide index={5}>                            
                            <Image className='sliderImage' src='/0622.jpeg'/>                            
                        </Slide>                    
                        <Slide index={6}>                           
                            <Image className='sliderImage' src='/0819.jpeg'/>
                        </Slide>                    
                        <Slide index={7}>                            
                            <Image className='sliderImage' src='/1119.jpeg'/>                            
                        </Slide>                    
                        <Slide index={8}>                            
                            <Image className='sliderImage' src='/1219.png'/>                            
                        </Slide>                    
                        <Slide index={9}>                            
                            <Image className='sliderImage' src='/83640.jpg'/>                            
                        </Slide>
                        <Slide index={10}>                            
                            <Image className='sliderImage' src='/1111.jpg'/>                            
                        </Slide>                                        
                    </Slider>
                    <ButtonBack className='buttonBack'><ArrowBackIosTwoToneIconArrowBackIosTwoToneIcon fontSize="small"/></ButtonBack>
                    <ButtonNext className='buttonNext'><ArrowForwardIosTwoToneIcon fontSize="small"/></ButtonNext>
                </div>
            </CarouselProvider>
        </section>        

    )
}