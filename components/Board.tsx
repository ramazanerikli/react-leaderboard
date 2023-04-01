import { FC } from "react";
import { useState, useRef, useMemo } from 'react';
import { styled } from '@stitches/react';
import players from "../players";
import { Player } from "../types/Player";
import React from 'react';

import Icon from "../components/Icon";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTable, useAbsoluteLayout, useColumnOrder } from "react-table";


const Table = styled('table', {
  width: '100%',
  thead: {
    backgroundColor: '#1c172b',
    height: '55px',
    color: '#6f6e77',
  },
  tr: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    height: '55px',
  },
  th: {
    display: 'flex',
    alignItems: 'center'
  },
  
});

const Grabbable = styled('div', {
  cursor: 'grab',
});

const PlayerRow = styled('tr', {
  backgroundColor: '#251e40',
  marginTop: '10px',
  height: '50px',
  borderRadius: '5px',
  borderColor: 'rgb(61 45 126)',
  borderStyle: 'solid',
  borderWidth: '1px',  
});

const PlayerRowChild = styled('td', {
});

const HeaderData = [
  {
    id: "0",
    name: "Ranking"
  },
  {
    id: "1",
    name: "Player Name",
  },
  {
    id: "2",
    name: "Country"
  },
  {
    id: "3",
    name: "Money"
  },
]


const TableRow = styled('tr', {

});

const TableHeaderCell = styled('th', {

});


const Board: FC<{}> = ({}) => {
  const [playersList, setPlayersList] = useState(players)

  const [headerDataa, updateHeaderDataa] = useState(HeaderData);



  

  
  function onDragEnd(result: any, index: any) {

    if(!result.destination) return;


    const items = Array.from(headerDataa);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateHeaderDataa(items)

  }


    /* New way 
  const data = React.useMemo(
    () => [
      {
        col1: '1',
        col2: 'John Doe',
        col3: 'Czech',
        col4: '500',
      },
      {
        col1: '2',
        col2: 'Magda',
        col3: 'Poland',
        col4: '750',
      },
      {
        col1: '3',
        col2: 'Micha',
        col3: 'Ukraine',
        col4: '1000',
      },
      {
        col1: '4',
        col2: 'Professor',
        col3: 'Spain',
        col4: '10',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Ranking',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Player Name',
        accessor: 'col2',
      },
      {
        Header: 'Country',
        accessor: 'col3',
      },
      {
        Header: 'Money',
        accessor: 'col4',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  
 */

  





  return (
    <>

{/* 
<table {...getTableProps()} style={{ border: 'solid 1px blue', marginBottom: '20px' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'lightblue',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
        */}
 




      <Table>
        <thead>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list" direction="horizontal">
            {(provided) => (
            <TableRow ref={provided.innerRef} {...provided.droppableProps}>
                {headerDataa.map((item, index) => (
                  <Draggable draggableId={item.id} index={index} key={item.id} >
                    {(provided) => (
                        <TableHeaderCell           
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                        {item.name}
                        <Grabbable><Icon name="drag" size="32" viewBox="0 0 24 24" /></Grabbable>
                      </TableHeaderCell>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </TableRow>
          )}
            </Droppable>
          </DragDropContext>
        </thead>


 
        <tbody>
          {playersList.map((player: Player, index: number) => (
            <PlayerRow key={index}>
              <PlayerRowChild>
                1
              </PlayerRowChild>
              <PlayerRowChild>
                {player.name}
              </PlayerRowChild>
              <PlayerRowChild>
                {player.country}
              </PlayerRowChild>
              <PlayerRowChild>
                {player.money}
              </PlayerRowChild>
            </PlayerRow>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Board;
