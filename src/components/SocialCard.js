
import { Card } from "react-bootstrap";

function SocialCard(){
    return(
        <Card className="text-black" style={{height:"15rem", backgroundColor:"white"}}>
           <Card.Body style={{}}>
                <Card.Title style={{textAlign:"center"}}>Come see us!</Card.Title>
                <Card.Text style={{width:"65%",marginLeft:"3%"}}>
                Instagram : @
                </Card.Text>
                <Card.Text style={{width:"65%",marginLeft:"3%"}}>
               Facebook: Adventure Peddler
                </Card.Text>
                <Card.Text style={{width:"65%",marginLeft:"3%"}}>
                Twitter: @peddleadventure
                </Card.Text>
               
           </Card.Body>
        </Card>
    );
}

export default SocialCard;