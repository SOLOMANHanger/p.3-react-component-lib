import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';
import Main from '../about/Main';

export default function Home() {
  return (
    <>
      <NavBar />
      <h2>{<Main />}+ {<Hero />} </h2>

      <Pricing />
      <Footer />
    </>
  );
}
