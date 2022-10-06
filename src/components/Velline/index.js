import "./index.css";
import Menu from "../Menu";

function Velline(){
    return(
        <div className="content">
            <Menu />
            <div className="velline-page">
                <h1 className="velline">Velline</h1>
                <p className="velline"> A B C D E F G H I J K L M </p>
                <p className="velline"> N O P K R S T U V X Y W Z </p>
                <p className="velline"> a b c d e f g h i j k l m </p>
                <p className="velline"> n o p k r s t u v x y w z </p>
                <p className="velline"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="velline"> Á á À à ç </p>
                <p className="velline"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Velline;