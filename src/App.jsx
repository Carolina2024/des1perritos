import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega este import */
import Header from "./components/Header"; /* se agrega este import */
import MyCard from "./components/MyCard"; /* se agrega este import */
import Footer from "./components/Footer"; /* se agrega este import */

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="container mt-4">
        <section className="MyCards row">
          <div className="col-md-3 mb-4">
            <MyCard
              imagen="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Bartolo"
              descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
              color="success"
              tag="Husky"
            />
          </div>

          <div className="col-md-3 mb-4">
            <MyCard
              imagen="https://nfnatcane.es/blog/wp-content/uploads/2019/06/bobtail-en-el-jard%C3%ADn.jpg"
              nombre="Messi"
              descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
              color="primary"
              tag="Bobtail"
            />
          </div>

          <div className="col-md-3 mb-4">
            <MyCard
              imagen="https://images.pexels.com/photos/16024346/pexels-photo-16024346/free-photo-of-bosque-perro-otono-lealtad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Gohan"
              descripcion="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
              color="danger"
              tag="Shar Pei"
            />
          </div>

          <div className="col-md-3 mb-4">
            <MyCard
              imagen="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              nombre="Princesa"
              descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
              color="warning"
              tag="Beagle"
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
