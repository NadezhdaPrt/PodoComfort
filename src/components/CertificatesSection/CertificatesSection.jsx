import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIconArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import './CertificatesSection.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CertificatesSection() {
    return (
        <section>
            <h2 className='sertificateHeading'>Моя квалификация</h2>
            <CarouselProvider
                naturalSlideWidth={8}
                naturalSlideHeight={10}
                totalSlides={10}
                visibleSlides={4}
                dragStep={2}
                infinite
                isIntrinsicHeight
                
            >
                <div className='sliderContainer'>
                    <Slider>                    
                        <Slide index={0}>
                            <div className='sliderImage'>
                                <Image src='../../../public/0421.jpeg'/>
                            </div>
                        </Slide>                    
                        <Slide index={1}>
                            <div className='sliderImage'>
                                <Image src='../../../public/0422.jpg'/>
                            </div>
                        </Slide>                    
                        <Slide index={2}>
                            <div className='sliderImage'>
                                <Image src='../../../public/0521.jpeg'/>
                            </div>
                        </Slide>                   
                        <Slide index={3}>
                            <div className='sliderImage'>
                                <Image src='../../../public/0619.jpeg'/>
                            </div>
                        </Slide>                    
                        <Slide index={4}>
                            <div className='sliderImage'>
                                <Image style={{height: 'auto'}} src='../../../public/0620.png'/>
                            </div>
                        </Slide>                    
                        <Slide index={5}>
                            <div className='sliderImage'>
                                <Image src='../../../public/0622.jpeg'/>
                            </div>
                        </Slide>                    
                        <Slide index={6}>
                            <div className='sliderImage'>
                                <Image src='../../../public/0819.jpeg'/>
                            </div>
                        </Slide>                    
                        <Slide index={7}>
                            <div className='sliderImage'>
                                <Image src='../../../public/1119.jpeg'/>
                            </div>
                        </Slide>                    
                        <Slide index={8}>
                            <div className='sliderImage'>
                                <Image src='../../../public/1219.png'/>
                            </div>
                        </Slide>                    
                        <Slide index={9}>
                            <div className='sliderImage'>
                                <Image src='../../../public/83640.jpg'/>
                            </div>
                        </Slide>                                      
                    </Slider>
                    <ButtonBack className='buttonBack'><ArrowBackIosTwoToneIconArrowBackIosTwoToneIcon fontSize="small"/></ButtonBack>
                    <ButtonNext className='buttonNext'><ArrowForwardIosTwoToneIcon fontSize="small"/></ButtonNext>
                </div>
            </CarouselProvider>
        </section>        

    )
}