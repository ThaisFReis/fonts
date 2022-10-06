import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';

import "./index.css";

function Roclette(){
    return(
        <>
            <Menu />
            <div className="Roclette">
                <Link to="/roclettepro"><p className="roclettepro"> RoclettePro </p></Link>
                <Link to="/rocletteproitalic"><p className="rocletteproitalic"> RocletteProItalic </p></Link>
                <Link to="/rocletteproline"><p className="rocletteproline"> RocletteProLine </p></Link>
                <Link to="/rocletteprolineitalic"><p className="rocletteprolineitalic"> RocletteProLineItalic </p></Link>
            </div>
        </>
    )
}

export default Roclette;