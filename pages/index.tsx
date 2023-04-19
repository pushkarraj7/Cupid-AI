import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import Main from "../components/main";

const Home = () => {
  return ( 
    <div>
      <Head>
        <title>Cupid AI</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>
      <Main />
      <Footer/>
    </div>
   );
}
 
export default Home;