import { FC } from "react";
import { useState } from 'react';
import { styled } from '@stitches/react';
import players from "../players";
import { Player } from "../types/Player";
import React from 'react';

import Icon from "../components/Icon";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
  transform: 'skew(-25deg)',
  borderRadius: '5px',
  borderColor: 'rgb(61 45 126)',
  borderStyle: 'solid',
  borderWidth: '1px',  
});

const PlayerRowChild = styled('td', {
  transform: 'skew(25deg)',
});

const HeaderData = [
  {
    name: "Ranking"
  },
  {
    name: "Player Name",
  },
  {
    name: "Country"
  },
  {
    name: "Money"
  },
]


const TableRow = styled('tr', {

});

const TableHeaderCell = styled('th', {

});






const Board: FC<{}> = ({}) => {
  const [playersList, setPlayersList] = useState(players)

  return (
<>
<Table>
      <thead>
        <TableRow>
          {HeaderData.map((item, index) => (
            <TableHeaderCell key={index}>
              {item.name}
              <Grabbable><Icon name="drag" size="32" viewBox="0 0 24 24" /></Grabbable>
            </TableHeaderCell>
          ))}
        </TableRow>
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
