import { Card } from "react-bootstrap";

function ServiceCard({Title, Price, Desc}){
    return(
        <Card style={{height:"20rem", width:"20rem", margin:"2%"}}>
            <Card.Header style={{backgroundColor:"#d5901d"}}>{Title}</Card.Header>
            <Card.Body>
                <Card.Title>{Price}</Card.Title>
                <Card.Text>{Desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard