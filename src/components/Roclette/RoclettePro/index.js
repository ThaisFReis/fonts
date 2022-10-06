import { Link } from 'react-router-dom';

import "./index.css";

function RoclettePro(){
    return(
        <div className="content">
            <div className="menu">
                <Link className="icon" to="/roclette"><ion-icon name="chevron-back-circle"></ion-icon></Link>
            </div>
            <div className="roclettepro-page">
                <h1 className="roclettepro">RoclettePro</h1>
                <p className="roclettepro"> A B C D E F G H I J K L M </p>
                <p className="roclettepro"> N O P K R S T U V X Y W Z </p>
                <p className="roclettepro"> a b c d e f g h i j k l m </p>
                <p className="roclettepro"> n o p k r s t u v x y w z </p>
                <p className="roclettepro"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="roclettepro"> Á á À à ç </p>
                <p className="roclettepro"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default RoclettePro;