import React, { useState, useEffect, useRef } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import Column from 'components/Column/Column'
import './BoardContent.scss'
import { isEmpty } from 'lodash'
import { applyDrag } from 'utilities/dragDrop'

import { initialData } from 'actions/initialData'

const log = (...data) => console.log(...data)

function BoardContent() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])
    const [dropCard, setDropCard] = useState({})

    useEffect(() => {
        const boardFromDb = initialData.boards.find(board => board.id === 'board-1')
        log('BOARD FROM DB', boardFromDb)
        if (boardFromDb) {
            setBoard(boardFromDb)

            boardFromDb.columns.sort((a, b) => boardFromDb.columnOrder.indexOf(a.id) - boardFromDb.columnOrder.indexOf(b.id))
            setColumns(boardFromDb.columns)
            log('COLUMNS', columns)
        }
    }, [])

    // useEffect(() => {
    //     console.log('--- DROP CURRENT', dropCard)
    //     if (dropCard.remove && dropCard.add) {
    //         processCardDrop()
    //     }
    // }, [dropCard])

    const onColumnDrop = (dropResult) => {
        console.log('droping column')
        let newColumns = applyDrag(columns, dropResult)

        const newBoard = { ...board }

        newBoard.columnOrder = newColumns.map(item => item.id)

        setColumns(newColumns)
        setBoard(newBoard)
        console.log('NEW BOARD', newBoard)
    }

    const onCardDrop = (columnId, dropResult) => {
        // const newColumns = columns.map(item => ({ ...item }))
        const newColumns = [...columns]
        const actionColumn = newColumns.find(item => item.id === columnId)

        actionColumn.cards = applyDrag(actionColumn.cards, dropResult)
        actionColumn.cardOrder = actionColumn.cards.map(item => item.id)

        setColumns(newColumns)
    }

    // const onCardDrop = (columnId, dropResult) => {
    //     if (dropResult.addedIndex === null && dropResult.removedIndex === null) {
    //         return
    //     }

    //     const { removedIndex, addedIndex } = dropResult

    //     if (addedIndex !== null) {
    //         setDropCard(prev => ({ ...prev, add: { columnId, dropResult } }))
    //     }
    //     if (removedIndex !== null) {
    //         setDropCard(prev => ({ ...prev, remove: { columnId, dropResult } }))
    //     }
    // }

    // const processCardDrop = () => {
    //     if (!dropCard.add || !dropCard.remove) {
    //         return
    //     }
    //     const { add, remove } = dropCard
    //     const { columnId: columnIdAdd, dropResult: dropResultAdd } = add
    //     const { columnId: columnIdRemove, dropResult: dropResultRemove } = remove

    //     const { removedIndex, payload } = dropResultRemove
    //     const { addedIndex } = dropResultAdd
    //     const newColumns = columns.map(item => ({ ...item }))

    //     const removeColumn = newColumns.find(item => item.id === columnIdRemove)

    //     removeColumn.cards.splice(removedIndex, 1)

    //     if (columnIdAdd === columnIdRemove) {
    //         // const realAddIndex = addedIndex > removedIndex ? addedIndex - 1 : addedIndex
    //         console.log('REAL ADD INDEX', addedIndex, addedIndex)
    //         removeColumn.cards.splice(addedIndex, 0, payload)
    //         removeColumn.cardOrder = removeColumn.cards.map(item => item.id)
    //     } else {
    //         const addColumn = newColumns.find(item => item.id === columnIdAdd)
    //         addColumn.cards.splice(addedIndex, 0, payload)
    //         addColumn.cardOrder = addColumn.cards.map(item => item.id)
    //     }
    //     setColumns(newColumns)
    //     setDropCard({})
    // }

    if (isEmpty(board)) {
        return <div className="not-found">Board not found!</div>
    }
    return (
        <div className="board-content">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                getChildPayload={index => columns[index]}
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'columns-drop-preview'
                }}
            >
                {
                    columns.map((column, index) => (
                        <Draggable key={index}>
                            <Column column={column} onCardDrop={onCardDrop} />
                        </Draggable>
                    ))
                }
            </Container>
            <div className="add-another-column">
                <i className="fa fa-plus icon" />
                Add another column
            </div>
        </div>
    )
}

export default BoardContent
