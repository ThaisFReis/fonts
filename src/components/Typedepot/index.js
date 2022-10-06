import "./index.css";
import Menu from "../Menu";

function Typedepot(){
    return(
        <div className="content">
            <Menu />
            <div className="typedepot-page">
                <h1 className="typedepot">Typedepot</h1>
                <p className="typedepot"> A B C D E F G H I J K L M </p>
                <p className="typedepot"> N O P K R S T U V X Y W Z </p>
                <p className="typedepot"> a b c d e f g h i j k l m </p>
                <p className="typedepot"> n o p k r s t u v x y w z </p>
                <p className="typedepot"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="typedepot"> Á á À à ç </p>
                <p className="typedepot"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Typedepot;