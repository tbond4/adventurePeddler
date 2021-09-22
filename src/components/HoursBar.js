import { Card } from "react-bootstrap";


function HoursBar(){
    return(
        <Card style={{height:"2rem", margin:"0", backgroundColor:"#56823f",fontFamily:"monospace"}}>
            <Card.Text style={{textAlign:"center"}}>TUE-SAT: 10-5 </Card.Text>
        </Card>
    );
}

export default HoursBar
    