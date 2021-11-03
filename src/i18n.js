import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navigation: {home: 'Home', todos: 'Todos', archive: 'Archive'},
                    home: {
                        title: 'Todo list with typescript, storybook, i18next, redux-toolkit',
                    },
                    todos: {
                        title: 'Todo List',
                        button: 'Add new todo',
                        startDate: 'Start date',
                        endDate: 'End date',
                        timeSpent: 'Time spent',
                        placeholder: 'Enter todo text',
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    archive: {
                        title: 'Title',
                        completed: 'Completed',
                        startDate: 'Start date',
                        endDate: 'End date',
                        timeSpent: 'Time spent',
                        restore: 'Restore from archive',
                        restoreButton: 'Restore'
                    }
                }
            },
            ru: {
                translation: {
                    navigation: {home: 'Главная', todos: 'Тодо', archive: 'Архив'},
                    home: {
                        title: 'Тодо лист с использованием технологий typescript, storybook, i18next, redux-toolkit',
                    },
                    todos: {
                        title: 'Список тодо',
                        button: 'Добавить тодо',
                        placeholder: 'Введите тело тодо',
                        startDate: 'Дата начала',
                        endDate: 'Дата завершения',
                        timeSpent: 'Затраченное время',
                        ok: 'Ок',
                        cancel: 'Отмена'
                    },
                    archive: {
                        title: 'Название',
                        completed: 'Завершен',
                        startDate: 'Дата начала',
                        endDate: 'Дата завершения',
                        timeSpent: 'Затраченное время',
                        restore: 'Восстановить из архива',
                        restoreButton: 'Восстановить'
                    }
                }
            }
        }
    });

export default i18n;