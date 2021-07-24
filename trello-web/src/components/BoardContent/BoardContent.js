import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import Column from 'components/Column/Column'
import './BoardContent.scss'
import { isEmpty } from 'lodash'

import { initialData } from 'actions/initialData'

const log = (...data) => console.log(...data)

function BoardContent() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

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

    const onColumnDrop = (dropResult) => {
        // if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        //     const scene = Object.assign({}, this.state.scene);
        //     const column = scene.children.filter(p => p.id === columnId)[0];
        //     const columnIndex = scene.children.indexOf(column);

        //     const newColumn = Object.assign({}, column);
        //     newColumn.children = applyDrag(newColumn.children, dropResult);
        //     scene.children.splice(columnIndex, 1, newColumn);

        //     this.setState({
        //         scene
        //     });
        // }
        console.log('droping column')
    }

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
                            <Column column={column} />
                        </Draggable>
                    ))
                }
            </Container>

        </div>
    )
}

export default BoardContent
