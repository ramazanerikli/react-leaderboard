import { FC, ReactNode } from "react";
import { useState, useRef, useMemo } from 'react';
import { styled } from '@stitches/react';
import players from "../players";
import { Player } from "../types/Player";
import React from 'react';

import Icon from "../components/Icon";

import { useDrag, useDrop } from 'react-dnd'

import ReactCountryFlag from "react-country-flag"

import { TableContainer, TableRow, PlayerRow } from "@/styles";

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

    // Country Code
    const lookup = require('country-code-lookup')
    const country = lookup.byCountry('Turkey').iso2;

const defaultColumns: ColumnDef<Player>[] = [
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
    cell: info => info.getValue(),
    header: () => 'Country',
  },

  {
    accessorKey: 'money',
    id: 'money',
    cell: info => info.getValue(),
    header: () => 'Money',
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
  header: Header<Player, unknown>
  table: Table<Player>
}> = ({ header, table }) => {
  const { getState, setColumnOrder } = table
  const { columnOrder } = getState()
  const { column } = header

  const [, dropRef] = useDrop({
    accept: 'column',
    drop: (draggedColumn: Column<Player>) => {
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

const columnHelper = createColumnHelper<Player>()


const columns = [
  columnHelper.accessor('rank', {
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





const Board: FC<{}> = ({}) => {
  const [playersList, setPlayersList] = useState(players)


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


    const getCountryCodeFromName = (name: any) => {
      return (
        lookup.byCountry(name)?.iso2
      )
    }

    
  return (
    <>

<TableContainer>
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
                <div key={cell.id}>
                    {cell.id.indexOf('country') > -1 ? (
                    <>
                    <ReactCountryFlag
                      countryCode={getCountryCodeFromName(cell.getValue())}
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                          marginRight: '10px' 
                      }}
                      title="US"
                    />
                      {cell.getValue()}
                    </>

                    ) : cell.id.indexOf('money') > -1 ? (
                      <div style={{ color: 'rgb(61, 45, 126)' }}>
                       {cell.getValue() as ReactNode}
                      </div>
                    ) :
                    (
                      <>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </>
                    )
                    }

                </div>
              ))}
            </PlayerRow>
          ))}
        </tbody>
      </TableContainer>


    </>
  );
};

export default Board;
