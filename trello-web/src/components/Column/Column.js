import Card from 'components/Card/Card'
import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'

function Column(props) {
    const { column } = props
    const cards = column.cards.sort((a, b) => column.cardOrder.indexOf(a.id) - column.cardOrder.indexOf(b.id)) || []

    const onCardDrop = () => {
        console.log('CARD DROP')
    }

    return (
        <div className="column">
            <header className="column-drag-handle">{column.title}</header>
            <div className="card-list">

                <Container
                    {...column.props}
                    dragHandleSelector=".card-item"
                    groupName="col"
                    onDragStart={e => console.log('drag started', e)}
                    onDragEnd={e => console.log('drag end', e)}
                    onDrop={onCardDrop}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    onDragEnter={() => {
                        console.log('drag enter:', column.id)
                    }}
                    onDragLeave={() => {
                        console.log('drag leave:', column.id)
                    }}
                    onDropReady={p => console.log('Drop ready: ', p)}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {
                        cards.map((card, index) => (
                            <Draggable key={index}>
                                <Card card={card} />
                            </Draggable>
                        ))
                    }

                </Container>
            </div>
            <footer>Add another card</footer>
        </div>
    )
}

export default Column
