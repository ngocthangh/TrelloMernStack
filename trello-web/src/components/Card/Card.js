import React from 'react'
import './Card.scss'

function Card(props) {
    const { card } = props

    return (
        <>
            {
                card.cover ? (
                    <div className="card-item">
                        <img src={card.cover} alt="logo" />
                        {card.title}
                    </div>
                ) : (
                    <div className="card-item">{card.title}</div>
                )
            }
        </>
    )
}

export default Card
