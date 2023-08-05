import { useState } from 'react';
import emailIcon from './Email.png';
import './house.css'

function House({house}){
    const [inquiryShown, setInquiryShown] = useState(false);

    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    }
    return(
        <div className='house-container'>
            <div className="">
                <h5 className="">{house.country}</h5>
            </div>
            <div className="">
                <h3 className="">{house.address}</h3>
            </div>
            <div className="content">
                <div className="content-image">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" className='image'/>
                </div>
                <div className="content-details">
                    <p className="">${house.price}</p>
                    <p>{house.description}</p>
                    <img
                        src={emailIcon}
                        height="50"
                        alt="inquiry"
                        onClick={inquiryClick}
                    />
                    {/* {inquiryShown && <Inquiry house={house} />} */}
                </div>
            </div>
        </div>
    )
}

export default House;