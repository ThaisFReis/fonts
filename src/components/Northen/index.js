import "./index.css";
import Menu from "../Menu";

function Northen(){
    return(
        <div className="content">
            <Menu />
            <div className="northen-page">
                <h1 className="northen"> Northen </h1>
                <p className="northen"> A B C D E F G H I J K L M </p>
                <p className="northen"> N O P K R S T U V X Y W Z </p>
                <p className="northen"> a b c d e f g h i j k l m </p>
                <p className="northen"> n o p k r s t u v x y w z </p>
                <p className="northen"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="northen"> Á á À à ç </p>
                <p className="northen"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Northen;