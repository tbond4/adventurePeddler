import ServiceCard from "./ServiceCard";

function BikeService(){
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        <ServiceCard 
            Title="Basic Tune"
            Price="$60"
            Desc="Adjust brakes, shifting, full clean, lubricate drivetrain, headset and bottom bracket torque check"
             />
            <ServiceCard 
            Title="Advanced Tune"
            Price="$100"
            Desc="Baic Tune plus, wheel truing, %50 off new part install labor"
            />
            <ServiceCard 
            Title="Overhaul Tune"
            Price="Road $275,  Mountain $350"
            Desc="Standard Tune plus, full breakdown and rebuild, brake bleed"
            />
            <ServiceCard 
            Title="Fork Install"
            Price="$45"
            Desc="Basic service, new seals and oil bath"
            />
            <ServiceCard 
            Title="Fork Rebuild"
            Price="$75"
            Desc="Seals, oil bath and damper service"
            />
            <ServiceCard 
            Title="Dropper Post Service"
            Price="$150"
            Desc="Full rebuild"
            />
             </div>
    );
}

export default BikeService