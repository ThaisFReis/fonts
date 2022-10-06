import { Link } from 'react-router-dom';

import "./index.css";

function RocletteProLine(){
    return(
        <>
            <div className="menu">
                <Link className="icon" to="/roclette"><ion-icon name="chevron-back-circle"></ion-icon></Link>
            </div>
            <div className="content">
                <div className="rocletteproline-page">
                    <h1 className="rocletteproline">RoclettePro</h1>
                    <p className="rocletteproline"> A B C D E F G H I J K L M </p>
                    <p className="rocletteproline"> N O P K R S T U V X Y W Z </p>
                    <p className="rocletteproline"> a b c d e f g h i j k l m </p>
                    <p className="rocletteproline"> n o p k r s t u v x y w z </p>
                    <p className="rocletteproline"> 0 1 2 3 4 5 6 7 8 9 </p>
                    <p className="rocletteproline"> Á á À à ç </p>
                    <p className="rocletteproline"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
                </div>
            </div>
        </>
    )
}

export default RocletteProLine;