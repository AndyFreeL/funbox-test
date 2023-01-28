import React, {useState} from 'react';
import './card.scss'
import cat from './../../assets/images/cat.png'

const Card = ({title, name, type, portion, weight, present, description, available}) => {
    const [selected, setSelected] = useState(false)
    const [hover, setHover] = useState(false)

    const hoverWhenLeave = () => {
        if (selected && !hover) {
            setHover(true)
        }
        if (!selected && hover) {
            setHover(false)
        }
    }

    return (
        <div className={`card ${selected && available ? 'selected' : ''}`} onMouseLeave={hoverWhenLeave}>
            <div
                className={`card_body ${!available ? 'ended' : ''} ${hover ? 'selected-hover' : ''}`}
                onClick={() => setSelected(!selected)
                }
            >
                <div className="tblock">
                    <div className='tblock_title'>
                        <div className='default-title'>{title}</div>
                        <div className='selected-title'>Котэ не одобряет?</div>
                    </div>
                    <div className='tblock_name'>{name}</div>
                    <div className='tblock_type'>{type}</div>
                    <div className='tblock_portion'>{portion} <span>порций</span>
                        {
                            present < 2
                                ? <p>мышь в подарок</p>
                                : present > 4
                                    ? <p>{present} мышей в подарок заказчик доволен</p>
                                    : <p>{present} мыши в подарок</p>
                        }
                    </div>
                </div>
                <div className="iblock">
                    <div className='iblock_image'>
                        <img src={cat} alt=""/>
                    </div>
                    <div className="iblock_weight">
                        <span>{weight}</span>
                        <span>кг</span>
                    </div>
                </div>
            </div>
            {!available ? <div className="card_text" style={{color: '#FFFF66'}}>Печалька, {type} закончился.</div> :
                <div className="card_text">
                    {!selected ?
                        <div>Чего сидишь? Порадуй котэ, <span onClick={() => setSelected(!selected)}>купи.</span>
                        </div> : description}
                </div>
            }
        </div>
    );
};

export default Card;