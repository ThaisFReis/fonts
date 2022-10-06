import "./index.css";
import Menu from "../Menu"

function Abstract() {
  return (
    <div className="content">
      <Menu />
      <div className="abstract-page">
        <h1 className="abstract">Abstract</h1>
        <p className="abstract"> A B C D E F G H I J K L M </p>
        <p className="abstract"> N O P K R S T U V X Y W Z </p>
        <p className="abstract"> a b c d e f g h i j k l m </p>
        <p className="abstract"> n o p k r s t u v x y w z </p>
        <p className="abstract"> 0 1 2 3 4 5 6 7 8 9 </p>
        <p className="abstract"> Á á À à ç </p>
        <p className="abstract"> ! @ $ % {"&"} * {"( ) { } [ ] , . ; : < > ¹ ² ³ £ ¢ ¬ { [ - = + _ § ª º * "} </p>
      </div>
    </div>
    );
}

export default Abstract;