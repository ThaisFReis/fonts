import { Link } from 'react-router-dom';

import "./index.css";

function RocletteProItalic(){
    return(
        <>
            <div className="menu">
                <Link className="icon" to="/roclette"><ion-icon name="chevron-back-circle"></ion-icon></Link>
            </div>
            <div className="content">
                <div className="rocletteproitalic-page">
                    <h1 className="rocletteproitalic">RoclettePro</h1>
                    <p className="rocletteproitalic"> A B C D E F G H I J K L M </p>
                    <p className="rocletteproitalic"> N O P K R S T U V X Y W Z </p>
                    <p className="rocletteproitalic"> a b c d e f g h i j k l m </p>
                    <p className="rocletteproitalic"> n o p k r s t u v x y w z </p>
                    <p className="rocletteproitalic"> 0 1 2 3 4 5 6 7 8 9 </p>
                    <p className="rocletteproitalic"> Á á À à ç </p>
                    <p className="rocletteproitalic"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
                </div>
            </div>
        </>
    )
}

export default RocletteProItalic;