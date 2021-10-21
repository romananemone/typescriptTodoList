import Todos from '../../interfaces/Todos';
import TodoItemView from "../TodoItem/TodoItemView";
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import React from "react";
import FormDialog from "../FormDialog/FormDialog";
import {TodoType} from "../../types/Todo";

const TodoListView = (props: Todos): JSX.Element => {
    const {t} = useTranslation();
    const {finishedTodos, inProgressTodos, addTodoWrapper, removeTodoWrapper, toggleTodoWrapper} = props;

    return (
        <Container>
            <Row className='m-3'>
                <Col className='d-flex justify-content-center'>
                    <h1>{t('todos.title')}</h1>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <FormDialog buttonText={t('todos.button')} title={t('todos.button')}
                                handler={(title) => addTodoWrapper(title)}/>
                </Col>
            </Row>
            <Row className='m-3'>
                <Col>
                    <ListGroup as='ul'>
                        {inProgressTodos.map((todo: TodoType) =>
                            <TodoItemView
                                key={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                id={todo.id}
                                removeTodoWrapper={removeTodoWrapper}
                                toggleTodoWrapper={toggleTodoWrapper}/>)}
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup as='ul'>
                        {finishedTodos.map((todo: TodoType) =>
                            <TodoItemView
                                key={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                id={todo.id}
                                removeTodoWrapper={removeTodoWrapper}
                                toggleTodoWrapper={toggleTodoWrapper}/>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoListView;