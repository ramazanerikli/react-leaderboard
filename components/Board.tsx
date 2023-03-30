import { FC } from "react";
import { useState } from 'react';
import { styled } from '@stitches/react';
import players from "../players";
import { Player } from "../types/Player";


const Table = styled('table', {
  width: '100%',
  thead: {
    backgroundColor: 'red'
  }
});


const Board: FC<{}> = ({}) => {
  const [playersList, setPlayersList] = useState(players)

  return (
    <Table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Player Name</th>
          <th>Country</th>
          <th>Money</th>
        </tr>
      </thead>
      <tbody>
        {playersList.map((player: Player, index: number) => (
          <tr key={index}>
            <td>
              {player.name}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Board;
