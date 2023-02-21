import './collapse.scss'
import arrow from '../../assets/fleche.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [Colla, Set] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => Set(!Colla)} >
                    {title}
                    <img 
                        className={Colla ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={Colla ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}