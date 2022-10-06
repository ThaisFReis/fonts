import "./index.css";
import Menu from "../Menu";

function Cansu(){
    return(
        <div className="content">
            <Menu />
            <div className="cansu-page">
                <h1 className="cansu">Cansu</h1>
                <p className="cansu"> A B C D E F G H I J K L M </p>
                <p className="cansu"> N O P K R S T U V X Y W Z </p>
                <p className="cansu"> a b c d e f g h i j k l m </p>
                <p className="cansu"> n o p k r s t u v x y w z </p>
                <p className="cansu"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="cansu"> Á á À à ç </p>
                <p className="cansu"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Cansu;