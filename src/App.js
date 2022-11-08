import "./App.css";
import { Testimonio } from "./components/Testinomio";

function App() {
  return (
    <div className="App">
      <Testimonio
        nombre="Joel Canul Alonzo"
        pais="México"
        imagen="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        cargo="FrontEnd Developer"
        empresa="Google"
        tesimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni"
      />
      <Testimonio
        nombre="Joel Canul Alonzo"
        pais="México"
        imagen="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        cargo="FrontEnd Developer"
        empresa="Google"
        tesimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni"
      />
    </div>
  );
}

export default App;
