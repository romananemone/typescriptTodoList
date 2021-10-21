import {useTranslation} from "react-i18next";

const Home = (): JSX.Element => {
    const {t} = useTranslation();
    return <h1 className='text-center'>{t('home.title')}</h1>
}

export default Home;