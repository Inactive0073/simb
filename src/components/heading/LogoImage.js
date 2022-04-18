import logo from './logo-image.png';

const LogoImage = () => {
    return (
        <picture className="logo-wrapper">
            <a href="competitions" className='logo' title="">
                <source src={logo} alt="" />
                <img src={logo} alt="" width="100%" height="100%" />
            </a>
        </picture>
    )
}
export default LogoImage;