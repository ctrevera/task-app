const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbagesdasdsadas' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
        'task-5': { id: 'task-5', content: 'Cook breakfast' },
        'task-6': { id: 'task-6', content: 'Cook meals' },
        'task-7': { id: 'task-7', content: 'Cook meals1' },
        'task-8': { id: 'task-8', content: 'Cook meals2' },
        'task-9': { id: 'task-9', content: 'Cook meals3' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do2',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: ['task-5'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Finish ',
            taskIds: ['task-6'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Finish ',
            taskIds: ['task-7'],
        },
        'column-5': {
            id: 'column-5',
            title: 'Finish ',
            taskIds: ['task-8'],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};

export default initialData;
