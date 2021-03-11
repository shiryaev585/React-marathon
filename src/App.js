import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import img from "./assests/images/bg2.jpg";

function App() {


  return (
    <>
      <Header title descr />
      <Layout title="Lyaout title" descr="Layout description" UrlBg={img}  colorBg />
      <Layout title="Lyaout title" descr="Layout description" UrlBg colorBg="lightblue" />
      <Layout title="Lyaout title" descr="Layout description" UrlBg={img}  colorBg />
      <Footer />
    </>
  );
}

export default App;
