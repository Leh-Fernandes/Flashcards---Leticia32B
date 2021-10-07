import './styles.scss';

function Home() {
  return (
    <div className="Home">
        <div className="content"  id="/home">
            <img src="brain.jpg"  alt="ilustração" />
            <div className="apresentacao">
              <h2>Esse é o site de flashcards dos mais variados cursos</h2>
              <p>Aqui você poderá exercitar seus conhecimentos em quaisquer 
                 áreas de conhecimento do seu curso</p>
            </div>
        </div>
    </div>
  );
}

export default Home;