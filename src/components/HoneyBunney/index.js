import "./index.css";
import Menu from "../Menu";

function HoneyBunney(){
    return(
        <div className="content">
            <Menu />
            <div className="honeybunney-page">
                <h1 className="honeybunney">Honey Bunney</h1>
                <p className="honeybunney"> A B C D E F G H I J K L M </p>
                <p className="honeybunney"> N O P K R S T U V X Y W Z </p>
                <p className="honeybunney"> a b c d e f g h i j k l m </p>
                <p className="honeybunney"> n o p k r s t u v x y w z </p>
                <p className="honeybunney"> 0 1 2 3 4 5 6 7 8 9</p>
                <p className="honeybunney"> Á á À à ç </p>
                <p className="honeybunney"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default HoneyBunney;