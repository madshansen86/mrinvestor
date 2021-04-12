import { Page, Text, Card, Grid, MockItem, Button } from '@geist-ui/react'
import Intro from '../components/Intro.js'
import Image from 'next/image'
import Hero from '../components/Hero.js'
import Blog from '../components/Blog.js'
import Newsletter from '../components/Newsletter.js'
import Link from 'next/link'

export default function Home() {
  return (
  <>

    <Intro/>
    <Hero/>
    <Blog/>
    <Newsletter/>

    </>
  )
}
