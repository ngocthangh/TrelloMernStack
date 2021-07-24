export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-2', 'card-1', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 1',
                            cover: 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 2',
                            cover: null
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 3',
                            cover: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 4',
                            cover: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 5',
                            cover: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 6',
                            cover: null
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 7',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'In progress column',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 8',
                            cover: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 9',
                            cover: null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 10',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Resolve column',
                    cardOrder: ['card-11', 'card-12', 'card-13'],
                    cards: [
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 11',
                            cover: null
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 12',
                            cover: null
                        },
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 13',
                            cover: null
                        }
                    ]
                }
            ]
        },
        {
            id: 'board-2',
            columnOrder: [ 'column-2'],
            columns: [
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 8',
                            cover: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 9',
                            cover: null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title card 10',
                            cover: null
                        }
                    ]
                }
            ]
        }
    ]
}