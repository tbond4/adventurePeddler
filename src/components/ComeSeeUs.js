
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function ComeSeeUs(){
    return(
        <Card className="text-black" style={{height:"auto", backgroundColor:"#56823f",width:"100%"}}>
           <Card.Body style={{}}>
                <Card.Title style={{textAlign:"center"}}>Connect With US!</Card.Title>
                <Card.Text style={{textAlign:"center",marginLeft:"3%"}}>
                485 S Main St, Colville, WA
                </Card.Text>
                <Card.Text style={{width:"",marginLeft:"",textAlign:"center"}}>
               (509) 685-7277
                </Card.Text>
                <Card.Text style={{textAlign:"center"}}>
                    <a 
                    style={{textDecoration:"none", color:"black"}}
                    href="mailto:info@adventurepeddler.com"
                    >
                    info@adventurepeddler.com
                    </a>
                
                </Card.Text>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <a 
                        style={{textDecoration:"none", color:"black"}} 
                        href="https://www.facebook.com/adventurepeddler/">
                        <FontAwesomeIcon icon={ faFacebookF } size="lg"/> 
                    </a>
                    <a 
                        style={{textDecoration:"none", color:"black"}} 
                        href="https://www.instagram.com/adventurepeddler/?hl=en"> 
                        <FontAwesomeIcon icon={ faInstagram } size="lg"/> 
                    </a>
                    <a 
                    style={{textDecoration:"none", color:"black"}} 
                    href="https://twitter.com/peddleadventure"> 
                    <FontAwesomeIcon icon={ faTwitter } size="lg"/> 
                    </a>
                </div>
           </Card.Body>
        </Card>
    );
}

export default ComeSeeUs;