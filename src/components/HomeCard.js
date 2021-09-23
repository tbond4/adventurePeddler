import { Card, Container,Row } from "react-bootstrap";
import homePic from "../assets/APBikesPic.jpg";
import toolsPic from "../assets/APToolsPic.jpg";

function HomeCard(){
    return(
    <Container fluid>
    <Row>
        <Card className="text-black" style={{height:"300px", }}>
           <Card.Body style={{margin:"0",padding:"0",}}>
               <Card.Img src={homePic} style={{opacity:".9",margin:"0",objectFit:"cover", height:"100%"}}/>
               <Card.ImgOverlay >
                <Card.Text style={{textAlign:"center", fontSize:"xx-large", color:"white",marginTop:"10%"}}>
                    Your Source for all things bike in the Greater Inland PNW.
                </Card.Text> 
                {/* <Card.Text style={{width:"",textAlign:"center", color:"white"}}>
                Adventure Peddler is a one stop location for all things bicycle.
                Service, parts, accessories, fittings are all part of the experience at Adventure Peddler.
                We will be your destination of the Inland North West. 
                We will help guide you on your next adventure whether that is a new bike purchase, 
                getting the best equipment to make your ride better or just remembering what the phrase 
                “it’s like riding a bike you never forget.” 
                Come by the shop and we can help you continue your cycling dreams
                </Card.Text> */}
                </Card.ImgOverlay>
           </Card.Body>
        </Card>
    </Row>
    <Row>
        <Card className="text-black" style={{height:"200px",width:"100%" }}>
           <Card.Body style={{margin:"0",padding:"0",}}>
               <Card.Img src={toolsPic} style={{opacity:".9",margin:"0",objectFit:"cover", height:"100%"}}/>
              <a href="/service">  <Card.ImgOverlay >
                <Card.Text style={{textAlign:"center", fontSize:"xx-large", color:"white",margin:"auto"}}>
                    Service
                </Card.Text> 
                </Card.ImgOverlay>
                </a>
           </Card.Body>
        </Card>
    </Row>
    </Container>
    );
}

export default HomeCard;