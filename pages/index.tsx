import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import Main from "../components/main";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Cupid AI</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <div className="flex-1">
        <Main />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
