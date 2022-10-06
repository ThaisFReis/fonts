import "./index.css";
import Menu from "../Menu";

function Galileo(){
    return(
        <div className="content">
            <Menu />
            <div className="galileo-page">
                <h1 className="galileo">Galileo</h1>
                <p className="galileo"> A B C D E F G H I J K L M </p>
                <p className="galileo"> N O P K R S T U V X Y W Z </p>
                <p className="galileo"> a b c d e f g h i j k l m </p>
                <p className="galileo"> n o p k r s t u v x y w z </p>
                <p className="galileo"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="galileo"> Á á À à ç </p>
                <p className="galileo"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Galileo;