/* para las cards */
import Tags from "./Tags"; /* se agrega este import */
import Card from "react-bootstrap/Card"; /* se agrega este import */

/* para las cards */
const MyCard = ({ imagen, nombre, descripcion, color, tag }) => {
  return (
    <>
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        <Tags color={color} tag={tag} />
      </Card>
    </>
  );
};

export default MyCard;
