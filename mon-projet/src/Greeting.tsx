import React from 'react'; 
//type de props avec un nom de type string
type GreetingProps = { 
    name:string;
}
// Ce composant affiche "Hello" suivi du nom reçu en paramètre
const Greeting : React.FC<GreetingProps> = ({ name }) => {
return <div>Hello, {name} !</div>;
 };
 export default Greeting;

 