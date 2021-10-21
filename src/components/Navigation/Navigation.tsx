import {Nav} from 'react-bootstrap';
import React, {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {useTranslation} from 'react-i18next';

const Navigation = (): JSX.Element => {
    const [key, setKey] = useState('/');
    const location = useLocation();
    const history = useHistory();
    const {t} = useTranslation();

    useEffect(() => {
        switch (location.pathname) {
            case '/todos':
                setKey('/todos');
                break;
            case '/table':
                setKey('/archive');
                break;
            default:
                setKey('/');
                break;
        }
    }, [history])

    useEffect(() => {
        history.push(key);
    }, [key])

    return (
        <Nav  variant="pills" activeKey={key} onSelect={(selectedKey) => {
            if (selectedKey) {
                setKey(selectedKey)
            }
        }}>
            <Nav.Item>
                <Nav.Link eventKey="/">{t('navigation.home')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/todos">{t('navigation.todos')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/archive">{t('navigation.archive')}</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;