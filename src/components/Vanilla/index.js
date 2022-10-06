import "./index.css";
import Menu from "../Menu";

function Vanilla(){
    return(
        <div className="content">
            <Menu />
            <div className="vanilla-page">
                <h1 className="vanilla">Vanilla</h1>
                <p className="vanilla"> A B C D E F G H I J K L M </p>
                <p className="vanilla"> N O P K R S T U V X Y W Z </p>
                <p className="vanilla"> a b c d e f g h i j k l m </p>
                <p className="vanilla"> n o p k r s t u v x y w z </p>
                <p className="vanilla"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="vanilla"> Á á À à ç </p>
                <p className="vanilla"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default Vanilla;