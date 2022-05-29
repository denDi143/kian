import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";


function App() {
  return (

    <div className="App" >
  <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="https://genshin.hoyoverse.com/en/home">Genshin Impact</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="https://genshin-impact.fandom.com/wiki/Genshin_Impact">About</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="https://gamingonphone.com/guides/how-to-contact-the-genshin-impact-customer-support-to-fix-an-issue/">Contacts</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="https://www.youtube.com/watch?v=AgC2JLuG62U">Gameplay</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="https://genshin.hoyoverse.com/en/news/detail/8630">
        Pictures
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
<h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh', color: 'white' }}>React JS Landing Page Done!!</h1>
<h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh', color: 'white' }}>Thank you lord!!</h1>
<home />
    </div>
  );
}


export default App;
