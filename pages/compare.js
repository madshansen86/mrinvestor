import { Page, Text, Card, Grid, MockItem, Button } from '@geist-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Cardcontainer from '../lenderCard/cardcontainer.js'



export default function Compare() {
  return (
  <>
    <main style={{backgroundColor: "#0f52ba", height:"1200px", marginTop:"-150px"}}>
      <div style={{marginBottom:"100px", marginTop:"100px", paddingTop:"100px", textAlign:"center", paddingLeft:"10%", paddingRight:"10%", color:'white' }}>
        <h1 style={{marginBottom:"50px"}}>Sammenlign de 10 bedste Europæiske sider</h1>
          <p>Nedenfor har vi nøje udvalgt de 10 mest populære Europæiske P2P=platforme som leverer kvalitetsprodukter til investorer. <br/>Afkast kan variere afhængig af hvordan dit portfolio klarer sig.</p>
      </div>

      <Cardcontainer/>
      <Cardcontainer/>
      <Cardcontainer/>
      <Cardcontainer/>
      <Cardcontainer/>
      <Cardcontainer/>


    </main>

  </>
  )
}
