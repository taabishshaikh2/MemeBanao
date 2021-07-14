import { useState, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Meme = () => {
    
    const [memes, setMemes] = useState([]);
    const [current, setCurrent] = useState(0);

    const [captions, setCaptions] = useState([])
    const length = memes.length;

    const history = useHistory();

    const updateCaption = (e, index) => {
        const text = e.target.value || '';
        setCaptions(
          captions.map((c, i) => {
            if(index === i) {
              return text;
            } else {
              return c;
            }
          })
        );
      };

      const generateMeme = () => {
        const currentMeme = memes[current];
        const formData = new FormData();
    
        formData.append('username', 'TaabishShaikh');
        formData.append('password', 'umair@2009');
        formData.append('template_id', currentMeme.id);
        captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));
    
        fetch('https://api.imgflip.com/caption_image', {
          method: 'POST',
          body: formData
        }).then(res => {
          res.json().then(res => {
              history.push(`/generate?url=${res.data.url}`);
              console.log(res);
          });
        });
      };
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);

    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes').then(data => data.json().then(response => {
            const _memes = response.data.memes;
            
            setMemes(_memes);
        }))
    },[]);

    useEffect(() => {
        if(memes.length){
            setCaptions(Array(memes[current].box_count).fill(''));
        }
    }, [current, memes])

    


    if(!Array.isArray(memes) || memes.length <= 0){
        return null;
    }

    return ( 
        <div className='container'> 
        <div className="d-grid gap-2 col-6 mx-auto">
                <button className='btn btn-success my-2 '
                 onClick={ generateMeme }>Generate</button>
                 {
                     captions.map((c, index) => (
                         <input onChange={(e) => updateCaption(e, index)} key={index} />
                     ))
                 }
            </div>
            <div className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                
                {memes.map((meme, index) => {
                    return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={meme.url} className='image ' alt='Memes' ></img>)}
                        
                    </div>
                    )
                })}
            </div>
            
        </div>
       
     
    );
}
 
export default Meme;