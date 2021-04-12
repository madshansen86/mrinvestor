import { Page, Text, Card, Grid, MockItem, Button } from '@geist-ui/react'
import Image from 'next/image'
import handshake from '../public/bloghandshake.jpg'
import study from '../public/study.jpg'
import risk from '../public/risk.jpg'


const Blog = () => {
  return (

    <main className="Blogafsnit" style={{backgroundColor:'rgba(19, 174, 246, 0.18)', height:"750px"}}>
      <div>
        <h1 style={{textAlign:"center", paddingTop:"100px", color: "#333"}}>Værd at vide om P2P</h1>
      </div>

    <div style={{marginTop: "30px", marginRight: "30px", marginLeft:"30px"}}>
      <Grid.Container gap={1} justify="center">

        <Grid style={{ width: '30%'}}>
          <div className="card-1" style={{ height: "450px",textAlign: 'left', padding:"30px", borderRadius: "14px", backgroundImage: `url(${handshake})`, backgroundSize:"100%"  }}>
          <div className="color" style={{color: "rgba(0, 0, 0, 0.48)"}}>
            <div className="blogtitle" style={{height:"60px"}}>
              <h3 style={{color:"white", marginTop:"40px"}}>Kom godt igang</h3>
            </div>
            <div className="paragraph" style={{height:"100px", marginBottom:"70px"}}>
                <p2 style={{color:"white"}}>
                Hvis investering via P2P-platforme er nyt for dig bør du læse denne guide. Her klæder vi dig bedre på ved, at give et overblik over de forskellige aktiv klasser, risici og hyppigst brugte termer.
                </p2>
            </div>
            <div className="button">
              <Button style={{marginTop:"40px", backgroundColor:"#ff007d", color:"white", fontWeight: "900", height:"50px", borderRadius: "16px"}}>Find din platform</Button>
            </div>
          </div>
          </div>
        </Grid>

        <Grid style={{width: '30%'}}>
          <div className="card-2" style={{height: "450px", textAlign: 'left', padding:"30px", borderRadius: "14px", backgroundImage: `url(${study})`, backgroundSize:"100%" }}>
          <div className="color" style={{color: "rgba(0, 0, 0, 0.48)"}}>
          <div className="blogtitle" style={{height:"60px"}}>
            <h3 style={{color:"white", marginTop:"40px"}}>Tips og trick</h3>
          </div>
          <div className="paragraph" style={{height:"100px", marginBottom:"70px"}}>
              <p2 style={{color:"white"}}>
              Der findes flere metoder til at optimere afkast og minimere risici ved investering i P2P-platforme. Her har vi samlet 10 gode tips og tricks som du frit kan bruge til at optimere din portefølje.
              </p2>
          </div>
            <div className="button">
              <Button style={{marginTop:"40px", backgroundColor:"#ff007d", color:"white", fontWeight: "900",height:"50px", borderRadius: "16px"}}>Udnyt din bonus</Button>
            </div>
          </div>
          </div>
        </Grid>

        <Grid style={{width: '30%'}}>
          <div className="card-1" style={{ height: "450px", textAlign: 'left', padding:"30px", borderRadius: "14px", backgroundImage: `url(${risk})`, backgroundSize:"100%" }}>
          <div className="color" style={{color: "rgba(0, 0, 0, 0.48)"}}>
          <div className="blogtitle" style={{height:"60px"}}>
            <h3 style={{color:"white", marginTop:"40px"}}>Forstå dine risici</h3>
          </div>
          <div className="paragraph" style={{height:"100px", marginBottom:"70px"}}>
            <p2 style={{color:"white"}}>
            Som ved alle slags investeringer er der risici som du bør forstå for at undgå de mest hyppige faldgruber.Vi har samlet et overblik over de mest udbredte risici og tips til håndteringen.
            </p2>
          </div>
            <div className="button">
              <Button style={{marginTop:"40px", backgroundColor:"#ff007d", color:"white", fontWeight: "900", height:"50px", borderRadius: "16px"}}>Se danske sider</Button>
            </div>
          </div>
          </div>
        </Grid>
      </Grid.Container>
    </div>
    </main>

  );
  };

  export default Blog;
