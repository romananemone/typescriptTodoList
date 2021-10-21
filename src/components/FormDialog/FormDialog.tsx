import React, {useRef, useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import FormDialogInterface from "../../interfaces/FormDialog";
import {useTranslation} from "react-i18next";

const FormDialog = ({buttonText, title, handler}: FormDialogInterface): JSX.Element => {
    const inputText = useRef<HTMLTextAreaElement>(null);
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);

    const handleClickOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleClickOpen}>
                {buttonText}
            </Button>
            <Modal
                show={open}
                onHide={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control ref={inputText} as="textarea" rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>{t('todos.cancel')}</Button>
                    <Button onClick={() => {
                        const data = inputText?.current?.value;
                        if (data) {
                            handler(data);
                        }
                        handleClose();
                    }}>{t('todos.ok')}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FormDialog;