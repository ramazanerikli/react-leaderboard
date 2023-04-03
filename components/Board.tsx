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






 






  return (
    <>







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
