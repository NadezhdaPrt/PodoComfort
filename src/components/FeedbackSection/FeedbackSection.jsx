import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import { comments } from '../../data';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIconArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './FeedbackSection.css';

export default function FeedbackSection() {
    return (
        <section>           
            <h2 className='feebbackHeading'>{comments.title}</h2>
            <CarouselProvider
                naturalSlideWidth={8}
                naturalSlideHeight={10}
                totalSlides={4}
                visibleSlides={1}                
                infinite
                isIntrinsicHeight                
            >
                <div className='feedbackContainer'>                    
                    <Slider className='feedbackSlider'> 
                        {comments.comment.map((item, i) => {
                            return (
                                <Slide key={i} index={i}>                                    
                                    <p className='feedbackImage'>{item}</p>                                   
                                </Slide>  
                            )})
                        }                     
                    </Slider>  
                    <ButtonBack className='buttonBackBig'><ArrowBackIosTwoToneIconArrowBackIosTwoToneIcon sx={{ fontSize: 60 }}/></ButtonBack>                  
                    <ButtonNext className='buttonNextBig'><ArrowForwardIosTwoToneIcon sx={{ fontSize: 60, fontWeight: 'light' }}/></ButtonNext>
                    <DotGroup className='dotGroup'/>        
                </div>                
            </CarouselProvider>
        </section>
    )
}