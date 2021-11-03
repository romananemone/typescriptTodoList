import Todo from "../../interfaces/Todo";
import {memo} from "react";
import {ListGroup, Form, Button} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const TodoItemView = (props: Todo): JSX.Element => {
    const {title, completed, id, startDate, endDate, timeSpent, removeTodoWrapper, toggleTodoWrapper} = props;
    const {t} = useTranslation();

    return (<ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
    >
        <Form className="ms-2 me-auto" onClick={() => toggleTodoWrapper(id)}>
            <Form.Check
                readOnly
                checked={completed}
                type='checkbox'
                label={title}
            />
            <div>{startDate ? `${t('todos.startDate')}: ${startDate}` : null }</div>
            <div>{endDate ? `${t('todos.endDate')}: ${endDate}` : null }</div>
            <div>{timeSpent ? `${t('todos.timeSpent')}: ${timeSpent}` : null}</div>
        </Form>
        <Button onClick={() => removeTodoWrapper(id)} variant="outline-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash"
                 viewBox="0 0 16 16">
                <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </Button>
    </ListGroup.Item>)
}

export default memo(TodoItemView);