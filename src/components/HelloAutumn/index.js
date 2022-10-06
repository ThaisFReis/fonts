import "./index.css";
import Menu from "../Menu";

function HelloAutumn(){
    return(
        <div className="content">
            <Menu />
            <div className="helloautumn-page">
                <h1 className="helloautumn">Hello Autumn</h1>
                <p className="helloautumn"> A B C D E F G H I J K L M </p>
                <p className="helloautumn"> N O P K R S T U V X Y W Z </p>
                <p className="helloautumn"> a b c d e f g h i j k l m </p>
                <p className="helloautumn"> n o p k r s t u v x y w z </p>
                <p className="helloautumn"> 0 1 2 3 4 5 6 7 8 9 </p>
                <p className="helloautumn"> Á á À à ç </p>
                <p className="helloautumn"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
            </div>
        </div>
    )
}

export default HelloAutumn;