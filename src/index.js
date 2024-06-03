import React from 'react';
import { createRoot } from 'react-dom/client';
import DragAndDrop from './DragAndDrop';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DragAndDrop />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





// import React, { useState, useCallback } from 'react';
// import ReactDOM from 'react-dom';
// import '@atlaskit/css-reset';
// import styled from 'styled-components';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import initialData from './initial-data';
// import Column from './Column';

// const Container = styled.div`
//   display: flex;
// `;

// const InnerList = React.memo(({ column, taskMap, index }) => {
//   const tasks = column.taskIds.map(taskId => taskMap[taskId]);
//   return <Column column={column} tasks={tasks} index={index} />;
// });

// const App = () => {
//   const [state, setState] = useState(initialData);

//   const onDragStart = useCallback((start, provided) => {
//     provided.announce(`You have lifted the task in position ${start.source.index + 1}`);
//   }, []);

//   const onDragUpdate = useCallback((update, provided) => {
//     const message = update.destination
//       ? `You have moved the task to position ${update.destination.index + 1}`
//       : `You are currently not over a droppable area`;
//     provided.announce(message);
//   }, []);

//   const onDragEnd = useCallback((result, provided) => {
//     const message = result.destination
//       ? `You have moved the task from position
//         ${result.source.index + 1} to ${result.destination.index + 1}`
//       : `The task has been returned to its starting position of
//         ${result.source.index + 1}`;
//     provided.announce(message);

//     const { destination, source, draggableId, type } = result;

//     if (!destination) {
//       return;
//     }

//     if (destination.droppableId === source.droppableId && destination.index === source.index) {
//       return;
//     }

//     if (type === 'column') {
//       const newColumnOrder = Array.from(state.columnOrder);
//       newColumnOrder.splice(source.index, 1);
//       newColumnOrder.splice(destination.index, 0, draggableId);

//       const newState = {
//         ...state,
//         columnOrder: newColumnOrder,
//       };
//       setState(newState);
//       return;
//     }

//     const home = state.columns[source.droppableId];
//     const foreign = state.columns[destination.droppableId];

//     if (home === foreign) {
//       const newTaskIds = Array.from(home.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       const newHome = {
//         ...home,
//         taskIds: newTaskIds,
//       };

//       const newState = {
//         ...state,
//         columns: {
//           ...state.columns,
//           [newHome.id]: newHome,
//         },
//       };

//       setState(newState);
//       return;
//     }

//     const homeTaskIds = Array.from(home.taskIds);
//     homeTaskIds.splice(source.index, 1);
//     const newHome = {
//       ...home,
//       taskIds: homeTaskIds,
//     };

//     const foreignTaskIds = Array.from(foreign.taskIds);
//     foreignTaskIds.splice(destination.index, 0, draggableId);
//     const newForeign = {
//       ...foreign,
//       taskIds: foreignTaskIds,
//     };

//     const newState = {
//       ...state,
//       columns: {
//         ...state.columns,
//         [newHome.id]: newHome,
//         [newForeign.id]: newForeign,
//       },
//     };

//     setState(newState);
//   }, [state]);

//   return (
//     <DragDropContext
//       onDragStart={onDragStart}
//       onDragUpdate={onDragUpdate}
//       onDragEnd={onDragEnd}
//     >
//       <Droppable
//         droppableId="all-columns"
//         direction="horizontal"
//         type="column"
//       >
//         {provided => (
//           <Container
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {state.columnOrder.map((columnId, index) => {
//               const column = state.columns[columnId];
//               return (
//                 <InnerList
//                   key={column.id}
//                   column={column}
//                   taskMap={state.tasks}
//                   index={index}
//                 />
//               );
//             })}
//             {provided.placeholder}
//           </Container>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));


