import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
const Language = (props) => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <>
            <NavDropdown title={i18n.language === 'en' ? 'English' : 'Vietnamese'} id="basic-nav-dropdown2" className='languages'>
                <NavDropdown.Item onClick={() => handleChangeLanguage('en')}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleChangeLanguage('vi')}>Vietnamese</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
        </>
    )
}
export default Language;