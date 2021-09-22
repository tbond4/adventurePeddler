import { Card } from "react-bootstrap";
import wolfLogo from "../assets/AP Wolf White Solo.jpg"

function Footer(){
    return(
        <Card style={{backgroundColor:"white",color:"black",fontFamily:"monospace", marginBottom:"0", marginTop:"2", }}>
            <Card.Body style={{display:"flex", marginBottom:"0", justifyContent:"space-around", alignItems:"center",width:"100%",flexWrap:"wrap" }}>
                <Card.Text>
                485 S Main St
               <p>Colville, Wa 99114</p>
               <p> 1-509-685-7277</p>
               <p>info@adventurepeddler.com</p>
                </Card.Text>
                <img src={wolfLogo} 
                    width="auto"
                    height="200"
                    alt="wolf on a bikle logo" 
                    style={{flexShrink:"2"}}
                />
                <Card.Text>
                Open Tue. - Sat 10am - 5pm
                <p> Closed Sunday, Monday</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Footer;