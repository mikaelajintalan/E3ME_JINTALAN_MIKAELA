import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavScroller from './components/NavScroller';
import Main from './components/Main';
import Main2 from './components/Main2';
import Article from './components/Article';
import About from './components/About';
import Archives from './components/Archives';
import Elsewhere from './components/Elsewhere';
import Footer from './components/Footer';


function App() {
  return (
    <div class="container">
      <Header />
      <NavScroller />
      <main class="container">
        <Main />
        <Main2 />
        <div className="row">
          <Article />
          <div className="col-md-4">
            <About />
            <Archives />
            <Elsewhere />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );     
}

export default App;