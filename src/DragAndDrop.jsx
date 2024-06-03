import React, { useState, useCallback } from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './Column';

const Container = styled.div`
  display: flex;
`;

const InnerList = React.memo(({ column, taskMap, index }) => {
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
});

const DragAndDrop = () => {
    const [state, setState] = useState(initialData);

    const onDragStart = useCallback(() => { }, []);

    const onDragUpdate = useCallback(() => { }, []);

    const onDragEnd = useCallback((result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...state,
                columnOrder: newColumnOrder,
            };
            setState(newState);
            return;
        }

        const home = state.columns[source.droppableId];
        const foreign = state.columns[destination.droppableId];

        if (home === foreign) {
            const newTaskIds = Array.from(home.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newHome = {
                ...home,
                taskIds: newTaskIds,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newHome.id]: newHome,
                },
            };

            setState(newState);
            return;
        }

        const homeTaskIds = Array.from(home.taskIds);
        homeTaskIds.splice(source.index, 1);
        const newHome = {
            ...home,
            taskIds: homeTaskIds,
        };

        const foreignTaskIds = Array.from(foreign.taskIds);
        foreignTaskIds.splice(destination.index, 0, draggableId);
        const newForeign = {
            ...foreign,
            taskIds: foreignTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newHome.id]: newHome,
                [newForeign.id]: newForeign,
            },
        };

        setState(newState);
    }, [state]);

    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <Droppable
                droppableId="all-columns"
                direction="horizontal"
                type="column"
            >
                {provided => (
                    <Container
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {state.columnOrder.map((columnId, index) => {
                            const column = state.columns[columnId];
                            return (
                                <InnerList
                                    key={column.id}
                                    column={column}
                                    taskMap={state.tasks}
                                    index={index}
                                />
                            );
                        })}
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragAndDrop;
