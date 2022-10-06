import "./index.css";
import Menu from "../Menu"

function Aqua(){
    return(
        <div className="content">
            <Menu />
            <div className="aqua-page">
                <h1 className="aqua">Aqua</h1>
                <p className="aqua"> A B C D E F G H I J K L M </p>
                <p className="aqua"> N O P K R S T U V X Y W Z </p>
                <p className="aqua"> a b c d e f g h i j k l m </p>
                <p className="aqua"> n o p k r s t u v x y w z </p>
                <p className="aqua"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="aqua"> Á á À à ç </p>
                <p className="aqua"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Aqua;