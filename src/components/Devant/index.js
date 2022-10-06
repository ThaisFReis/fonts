import "./index.css";
import Menu from "../Menu";

function Devant(){
    return(
        <div className="content">
            <Menu />
            <div className="devant-page">
                <h1 className="devant">Devant</h1>
                <p className="devant"> A B C D E F G H I J K L M </p>
                <p className="devant"> N O P K R S T U V X Y W Z </p>
                <p className="devant"> a b c d e f g h i j k l m </p>
                <p className="devant"> n o p k r s t u v x y w z </p>
                <p className="devant"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="devant"> Á á À à ç </p>
                <p className="devant"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Devant;