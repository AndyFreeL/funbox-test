import React from 'react';
import Card from "../Card/Card";
import './cards.scss'

const Cards = () => {

    const data = [
        {id:0, title:'Сказочное заморское яство',name:'Нямушка', type:'с фуа-гра', portion:'10',present:1,description:'Печень утки разварная с артишоками.', weight:'0,5',available:true},
        {id:1,title:'Сказочное заморское яство',name:'Нямушка', type:'с рыбой', portion:'40',present:2,description:'Головы щучьи с чесноком да свежайшая сёмгушка.', weight:'2',available:true},
        {id:2,title:'Сказочное заморское яство',name:'Нямушка', type:'с курой', portion:'100 ',present:5,description:'Филе из цыплят с трюфелями в бульоне.', weight:'5',available:false}
    ]

    return (
        <div className='cards'>
                <div className='cards_title'>Ты сегодня покормил кота?</div>
                <div className='cards_item'>
                    {data.map(el=><Card
                        key={el.id}
                        name={el.name}
                        title={el.title}
                        type={el.type}
                        portion={el.portion}
                        weight={el.weight}
                        available={el.available}
                        present={el.present}
                        description={el.description}
                    />)}
                </div>
        </div>
    );
};

export default Cards;