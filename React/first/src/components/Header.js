import logo from './GloboLogo.png';
import '../main-page/index.css'
const Header = ({subtitle}) => (
    <div className="row">
        <div>
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
            <h4 className="subtitle">{subtitle}</h4>
        </div>
    </div>
)

export default Header;