import "./index.css";
import Menu from "../Menu";

function Truelove(){
    return(
        <div className="content">
            <Menu />
            <div className="truelove-page">
                <h1 className="truelove">Truelove</h1>
                <p className="truelove"> A B C D E F G H I J K L M </p>
                <p className="truelove"> N O P K R S T U V X Y W Z </p>
                <p className="truelove"> a b c d e f g h i j k l m </p>
                <p className="truelove"> n o p k r s t u v x y w z </p>
                <p className="truelove"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="truelove"> Á á À à ç </p>
                <p className="truelove"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Truelove;