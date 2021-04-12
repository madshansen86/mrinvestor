import { Page, Text, Card, Grid, MockItem, Button, Spacer } from '@geist-ui/react'



const Hero = () => {
  return (

    <main style={{marginTop: "100px", paddingLeft:"65px", paddingRight:"50px", height: "800px" }}>
      <container style={{display: "flex", gridColumnGap: "50px", marginTop: "30px", marginBottom: "30px"}}>
      <div  style={{width:"50%"}}>
        <Text h1 style= {{color: "#333", marginBottom:"50px"}}>Hvad investerer jeg i?</Text>
          <Text p style={{lineHeight:"1.9rem"}}>Peer-to-peer investering opstod tilbage i 2005, da <b style={{color:"darkblue"}}>Zopa</b>, en London-baseret P2P-platform og nu bank, blev stiftet og for første gang gjorde det muligt for menigmand at investere direkte i lån til forbrug, udenom banken.
          <br/><Spacer y={1}/>Der findes efterhånden mange hundrede peer-to-peer platforme, som lader dig <b style={{color:"darkblue"}}>investere</b> direkte i ejendom, lån (med eller uden pant eller garantistillelse), solpaneler og mange andre aktiver.
          <br/><Spacer y={1}/>Vi har arbejdet en årrække i <b style={{color:"darkblue"}}>London</b>, hos nogle af verdens ledende P2P-platforme, og vi har samlet information om de mest velrenommerede platforme i Europa, på dansk.
          <br/><Spacer y={1}/>Vi håber du kan bruge det.
          <br/><Spacer y={1}/>Du er meget velkommen til at kontakte os med <b style={{color:"darkblue"}}>spørgsmål</b> eller tilmelde dig vores nyhedsbrev.
          <br/><Spacer y={1}/>Du behøver ikke held og lykke på din <b style={{color:"darkblue"}}>investeringsrejse</b>, når du nu har fundet os!
          </Text>
          <Button style={{backgroundColor:"#ff007d", color:"white", fontWeight: "900",height:"50px", marginLeft: "25%", marginTop: "20px", borderRadius: "16px"}}>Kom igang idag</Button>
      </div>
      <div className="heroimage" style={{marginRight:"30 px"}}>
        <div>
          <img src="/terrace.jpg" style={{ borderRadius: "14px", width: "450px", height: "" }} />
        </div>
      </div>
      </container>
    </main>







  );
};

export default Hero;
