import "./index.css";
import Menu from "../Menu";

function Galilei(){
    return(
        <div className="content">
            <Menu />
            <div className="galilei-page">
                <h1 className="galilei">Galilei</h1>
                <p className="galilei"> A B C D E F G H I J K L M </p>
                <p className="galilei"> N O P K R S T U V X Y W Z </p>
                <p className="galilei"> a b c d e f g h i j k l m </p>
                <p className="galilei"> n o p k r s t u v x y w z </p>
                <p className="galilei"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="galilei"> Á á À à ç </p>
                <p className="galilei"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Galilei;