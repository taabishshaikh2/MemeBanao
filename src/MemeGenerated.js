import { useState } from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useClipboard } from 'use-clipboard-copy';

const MemeGenerated = () => {
    const [copied, setCopied] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const url =  new URLSearchParams(location.search).get('url');
     
    const clipboard = useClipboard();

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
      };

    return ( 
        <div className='container'>
            <button onClick={() => history.push('/')} className='btn btn-primary d-grid gap-2 col-6 mx-auto my-2'>Make More Memes</button>
            
            { url && <img src={url} className='img-thumbnail custom_img'  alt='custom meme' />}
            <button onClick={copyLink} className='btn btn-secondary d-grid gap-2 col-6 mx-auto my-2'>
                {copied ? 'Link copied!' : 'Copy link'}</button>

        </div>
     );
}
 
export default MemeGenerated;