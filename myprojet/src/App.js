import Description from './description';
import Nom from './nom';
import Prix from './prix';
import Qmage from './image';
import Card from 'react-bootstrap/Card';
import "./App.css";
const prenom="Amza"

export default function App() {
  return (
    <div className="App">
    <Nom/>
    <Prix/>
    <Description/>
    <Qmage/>
  
   <div id="AApp">
   <Card   style={{ width: '18rem', borderColor: 'green'  }}>
        <Card.Header style={{color:"orange"}}>{<Nom/>}</Card.Header>
        <Card.Body>
          <Card.Title>{<Prix/>}</Card.Title>
          <Card.Text style={{ color:"green",fontSize:"1.5em"}} >{<Description/>}</Card.Text>
          <Card>{<Qmage/>}</Card>
        </Card.Body>
      </Card>
      </div>
     { prenom ? <p style={{color:"green",fontSize:"1.5em"}}>Bonjour, {prenom} !</p> : <p>Bonjour là !</p>}
    </div>
  );
}

