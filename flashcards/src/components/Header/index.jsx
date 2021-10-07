import './styles.scss';


function Header() {
  return (
    <div className="Header">
       <img id="logo" src="logo.png" alt="logo do site" title="FlashCursos"/>
       <h1>FlashCursos</h1>
       <nav>
          <a href="#/home"> <button>Início</button> </a>
          <a href="#/cursos"> <button>Cursos</button> </a>
       </nav>
    </div>
  );
}

export default Header;