import "./index.css";
import Menu from "../Menu";

function Thorin(){
    return(
        <div className="content">
            <Menu />
            <div className="thorin-page">
                <h1 className="thorin">Thorin</h1>
                <p className="thorin"> A B C D E F G H I J K L M </p>
                <p className="thorin"> N O P K R S T U V X Y W Z </p>
                <p className="thorin"> a b c d e f g h i j k l m </p>
                <p className="thorin"> n o p k r s t u v x y w z </p>
                <p className="thorin"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="thorin"> Á á À à ç </p>
                <p className="thorin"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Thorin;