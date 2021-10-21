import {Nav} from 'react-bootstrap';
import React, {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';

const LangSwitch = (): JSX.Element => {
    const [key, setKey] = useState('EN');
    const {i18n} = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        setKey('en')
    }, [])

    useEffect(() => {
        changeLanguage(key)
    }, [key])

    return (
        <Nav variant="pills" activeKey={key} onSelect={(selectedKey) => {
            if (selectedKey) {
                setKey(selectedKey)
            }
        }}>
            <Nav.Item>
                <Nav.Link eventKey="en">EN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="ru">RU</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default LangSwitch;