import { Link } from 'react-router-dom';

import "./index.css"

function Menu(){
    return (
        <div className="menu">
            <Link className="icon" to="/"><ion-icon name="chevron-back-circle"></ion-icon></Link>
        </div>
    );
}

export default Menu;