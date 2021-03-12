import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import img from "./assests/images/bg2.jpg";

function App() {

  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout title="Lyaout title" descr="Layout description" UrlBg={img} />
      <Layout title="Lyaout title" descr="Layout description" colorBg="lightblue" />
      <Layout title="Lyaout title" descr="Layout description" UrlBg={img} />
      <Footer />
    </>
  );
}

export default App;
