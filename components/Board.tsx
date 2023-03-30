import { FC } from "react";
import { useState } from 'react';
import { styled } from '@stitches/react';
import players from "../players";
import { Player } from "../types/Player";

import Icon from "../components/Icon";

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


const Board: FC<{}> = ({}) => {
  const [playersList, setPlayersList] = useState(players)

  return (
    <Table>
      <thead>
        <tr>
          {HeaderData.map((item, index) => (
            <th key={index}>
              {item.name}
              <Grabbable><Icon name="drag" size="32" viewBox="0 0 24 24" /></Grabbable>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {playersList.map((player: Player, index: number) => (
          <PlayerRow key={index}>
            <td>
              1
            </td>
            <td>
              {player.name}
            </td>
            <td>
              {player.country}
            </td>
            <td>
              {player.money}
            </td>
          </PlayerRow>
        ))}
      </tbody>
    </Table>
  );
};

export default Board;
