import "./index.css";
import Menu from "../Menu";

function Orlande(){
    return(
        <div className="content">
            <Menu />
            <div className="orlande-page">
                <h1 className="orlande">Orlande</h1>
                <p className="orlande"> A B C D E F G H I J K L M </p>
                <p className="orlande"> N O P K R S T U V X Y W Z </p>
                <p className="orlande"> a b c d e f g h i j k l m </p>
                <p className="orlande"> n o p k r s t u v x y w z </p>
                <p className="orlande"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="orlande"> Á á À à ç </p>
                <p className="orlande"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Orlande;