import Footer from "./componet/Footer";
import Header from "./componet/Header";
import Menu from "./Menu";
import "./css/style.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Menu />
      </main>

      <Footer />
    </div>
  );
}

export default App;