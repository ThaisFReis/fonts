import "./index.css";
import Menu from "../Menu";

function Canaro(){
    return(
        <div className="content">
            <Menu />
            <div className="canaro-page">
                <h1 className="canaro">Canaro</h1>
                <p className="canaro"> A B C D E F G H I J K L M </p>   
                <p className="canaro"> N O P K R S T U V X Y W Z </p>
                <p className="canaro"> a b c d e f g h i j k l m </p>
                <p className="canaro"> n o p k r s t u v x y w z </p>
                <p className="canaro"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="canaro"> Á á À à ç </p>
                <p className="canaro"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Canaro;