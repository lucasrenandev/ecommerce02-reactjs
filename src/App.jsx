import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Banner from "./components/banner/Banner"
import Shop from "./components/shop/Shop"
import Banner2 from "./components/banner2/Banner2"
import Portfolio from "./components/portfolio/Portfolio"
import News from "./components/news/News"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollArrow from "./components/ScrollArrow/ScrollArrow"

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <Banner/>
      <Shop/>
      <Banner2/>
      <Portfolio/>
      <News/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </>
  )
}