import { Card } from "react-bootstrap";


function AboutUsPage(){
    return(
        <Card style={{fontFamily:"monospace"}}>
        <Card.Header style={{}}>About Us</Card.Header>
        <Card.Body>
            <Card.Text>
                The Adventure Peddler opened spring of 2018 by Elizabeth and Matthew Monbouquette. 
                They are proud to bring to the Inland Northwest their love of the outdoors and all the adventures that come with it.
            </Card.Text>
            <Card.Text>
                Matt and Elizabeth are proud to share their experiences of riding bikes all over the country and at bike shops around the Northwest. 
                They are excited to be returning back to their roots and helping continue the adventures in their return to Elizabeth’s home town.
                </Card.Text>
        </Card.Body>
    </Card>
    );
}

export default AboutUsPage;