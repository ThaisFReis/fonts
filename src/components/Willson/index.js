import "./index.css";
import Menu from "../Menu";

function Willson(){
    return(
        <div className="content">
            <Menu />
            <div className="willson-page">
                <h1 className="willson">Willson</h1>
                <p className="willson"> A B C D E F G H I J K L M </p>
                <p className="willson"> N O P K R S T U V X Y W Z </p>
                <p className="willson"> a b c d e f g h i j k l m </p>
                <p className="willson"> n o p k r s t u v x y w z </p>
                <p className="willson"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="willson"> Á á À à ç </p>
                <p className="willson"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Willson;