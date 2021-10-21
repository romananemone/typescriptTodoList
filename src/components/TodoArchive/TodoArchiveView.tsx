import {useTable} from 'react-table'
import React, {useMemo} from 'react';
import ITodosArchive from '../../interfaces/TodoArchive';
import {TodoType, ArchivedTodo} from "../../types/Todo";
import {useTranslation} from "react-i18next";
import {Button, Table} from "react-bootstrap";

const TodoArchiveView = ({todosArchive, restoreTodoWrapper}: ITodosArchive) => {
    const {t, i18n} = useTranslation();
    const data: Array<ArchivedTodo> = useMemo(() => {
        return todosArchive.map((todo: TodoType) => ({
            ...todo,
            completed: todo.completed.toString(),
            restore: todo.id
        }))
    }, [todosArchive]);

    const columns: any = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: t('archive.title'),
                accessor: 'title',
            },
            {
                Header: t('archive.completed'),
                accessor: 'completed',
            },
            {
                Header: t('archive.restore'),
                accessor: 'restore',
                Cell: ({value}: any) => (
                    <Button onClick={() => restoreTodoWrapper(value)}>
                        {t('archive.restoreButton')}
                    </Button>
                ),
            }
        ],
        [i18n.language]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data});

    return (
        <div className='p-4'>
            <Table striped bordered hover size="sm" {...getTableProps()}>
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
                                            background: 'papayawhip',
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
            </Table>
        </div>
    )
}

export default TodoArchiveView;