import { FC } from "react";
import { useState, useRef, useMemo } from 'react';
import { styled } from '@stitches/react';
import players from "../players";
import { Player } from "../types/Player";
import React from 'react';

import Icon from "../components/Icon";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTable, useAbsoluteLayout, useColumnOrder } from "react-table";

import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


import {
  Column, 
  ColumnDef,
  ColumnOrderState,
  Header,
  Table,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Person = {
  ranking: number
  playerName: string
  country: string
  money: number
}

const defaultData: Person[] = [
  {
    ranking: 1,
    playerName: 'linsley',
    country: 'spain',
    money: 100,
  },
  {
    ranking: 2,
    playerName: 'professor',
    country: 'mexico',
    money: 250,
  },
  {
    ranking: 3,
    playerName: 'monika',
    country: 'czech',
    money: 220,
  },
  {
    ranking: 4,
    playerName: 'micha',
    country: 'ukraine',
    money: 1000,
  },
]



const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'rank',
    id: 'rank',
    header: 'Ranking',
    cell: info => info.getValue(),
  },
  {
    accessorFn: row => row.playerName,
    id: 'playerName',
    cell: info => info.getValue(),
    header: () => <span>Player Name</span>,
  },
  {
    accessorKey: 'country',
    id: 'country',
    header: 'Country',
  },

  {
    accessorKey: 'money',
    id: 'money',
    header: 'Money',
  },
]

const reorderColumn = (
  draggedColumnId: string,
  targetColumnId: string,
  columnOrder: string[]
): ColumnOrderState => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
  )
  return [...columnOrder]
}

const DraggableColumnHeader: FC<{
  header: Header<Person, unknown>
  table: Table<Person>
}> = ({ header, table }) => {
  const { getState, setColumnOrder } = table
  const { columnOrder } = getState()
  const { column } = header

  const [, dropRef] = useDrop({
    accept: 'column',
    drop: (draggedColumn: Column<Person>) => {
      const newColumnOrder = reorderColumn(
        draggedColumn.id,
        column.id,
        columnOrder
      )
      setColumnOrder(newColumnOrder)
    },
  })

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => column,
    type: 'column',
  })

  return (
    <th
      ref={dropRef}
      colSpan={header.colSpan}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div ref={previewRef} style={{ display: 'flex', alignItems: 'center' }}>
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        <button style={{ cursor: 'grab', backgroundColor:'transparent', border: 'none', color: 'rgb(111, 110, 119)' }} ref={dragRef}><Icon name="drag" size="32" viewBox="0 0 24 24"></Icon></button>
      </div>
    </th>
  )
}


const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('ranking', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.playerName, {
    id: 'playerName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Player Name</span>,
  }),
  columnHelper.accessor('country', {
    header: () => 'Country',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('money', {
    header: () => <span>Money</span>,
  }),
]




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



  const [data, setData] = useState(players)

  const [columns] = React.useState(() => [...defaultColumns])

  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>(
    columns.map(column => column.id as string) //must start out with populated columnOrder so we can splice
  )





  const resetOrder = () =>
    setColumnOrder(columns.map(column => column.id as string))



    const table = useReactTable({
      data,
      columns,
      state: {
        columnOrder,
      },
      onColumnOrderChange: setColumnOrder,
      getCoreRowModel: getCoreRowModel(),
      debugTable: true,
      debugHeaders: true,
      debugColumns: true,
    })
  






  return (
    <>



<Table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <DraggableColumnHeader
                  key={header.id}
                  header={header}
                  table={table}
                />
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <PlayerRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <PlayerRowChild key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </PlayerRowChild>
              ))}
            </PlayerRow>
          ))}
        </tbody>
      </Table>


    </>
  );
};

export default Board;
