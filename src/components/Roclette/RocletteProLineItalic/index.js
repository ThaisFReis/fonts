import { Link } from 'react-router-dom';

import "./index.css";

function RocletteProLineItalic(){
    return(
        <>
            <div className="menu">
                <Link className="icon" to="/roclette"><ion-icon name="chevron-back-circle"></ion-icon></Link>
            </div>
            <div className="content">
                <div className="rocletteprolineitalic-page">
                    <h1 className="rocletteprolineitalic">RocletteProLineItalic</h1>
                    <p className="rocletteprolineitalic"> A B C D E F G H I J K L M </p>
                    <p className="rocletteprolineitalic"> N O P K R S T U V X Y W Z </p>
                    <p className="rocletteprolineitalic"> a b c d e f g h i j k l m </p>
                    <p className="rocletteprolineitalic"> n o p k r s t u v x y w z </p>
                    <p className="rocletteprolineitalic"> 0 1 2 3 4 5 6 7 8 9 </p>
                    <p className="rocletteprolineitalic"> Á á À à ç </p>
                    <p className="rocletteprolineitalic"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
                </div>
            </div>
        </>
    )
}

export default RocletteProLineItalic;