import { Page, Text, Card, Grid, MockItem, Button } from '@geist-ui/react'
import Image from 'next/image'
import Hero from '../components/Hero.js'
import Blog from '../components/Blog.js'
import Newsletter from '../components/Newsletter.js'
import Link from 'next/link'

export default function Intro() {
  return (
  <>

    <main className="intro" style={{paddingTop: '15px', paddingBottom: '100px', height: '650px', width: '100%', backgroundColor: "#0f52ba"}}>
      <div>
        <Text className="headline" style={{ marginTop: '40px', size: '45px', textAlign: 'center', color: "white"}}>
          <h1>Dit P2P-overblik, <b style={{color: "lightblue"}}>nemt</b> og <b style={{color: "lightblue"}}>simpelt</b></h1>
            <p style={{ marginTop:'35px', marginBottom: '35px'}}>Vi har samlet information om de førende Europæiske platforme, så du nemt kan sammenligne indkomstgenerende P2P-investeringer</p>
        </Text>
      </div>


    <Grid.Container gap={1} justify="center">
      <Grid style={{marginTop: "30px", width: '30%'}}>
        <Card style={{ textAlign: 'center', padding:"10px", width:"100%", height:"300px" }}>
          <div style={{height:"60px"}}>
            <Image src="/weightlogo.svg" height={50} width={50}/>
          </div>
          <div style={{marginBottom:"35px"}}>
            <Text h3>Europæiske P2P platforme</Text>
              <Text p2>Sammenlign mere end 20 platforme</Text>
          </div>
          <div className="button">
            <Button style={{backgroundColor:"#ff007d", color:"white", fontWeight: "900", height:"50px", borderRadius: "16px"}}>Find din platform</Button>
          </div>
        </Card>
      </Grid>

      <Grid style={{marginTop: "30px", width: '30%'}}>
        <Card style={{ textAlign: 'center', padding:"10px", width:"100%", height:"300px" }}>
          <div style={{height:"60px"}}>
            <Image src="/walleticon.svg" height={50} width={50}/>
         </div>
          <div style={{marginBottom:"35px"}}>
            <Text h3>Oprettelsesbonusser</Text>
              <Text p2>Find de bedste tilbud ifm. oprettelsen</Text>
          </div>
          <div className="button">
            <Button style={{backgroundColor:"#ff007d", color:"white", fontWeight: "900",height:"50px", borderRadius: "16px"}}>Udnyt din bonus</Button>
          </div>
        </Card>
      </Grid>

      <Grid style={{marginTop: "30px", width: '30%'}}>
        <Card style={{ textAlign: 'center', padding:"10px", width:"100%", height:"300px" }}>
          <div style={{height:"60px"}}>
            <Image src="/locationicon.svg" height={50} width={50}/>
          </div>
          <div style={{marginBottom:"35px"}}>
            <Text h3>Danske platforme</Text>
              <Text p2>Sammenlign danske P2P muligheder</Text>
          </div>
          <div className="button">
            <Button style={{backgroundColor:"#ff007d", color:"white", fontWeight: "900", height:"50px", borderRadius: "16px"}}>Se danske sider</Button>
          </div>
        </Card>
      </Grid>
    </Grid.Container>

    </main>

  </>
  )
}
