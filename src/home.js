import './App.scss';

function Home() {
  return (
    <div className="container flex center perfect">
      <div className="pro-pic-container">
          <img className="pro-pic" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt=""/>
      </div>
      <div className="buttons">
        <div className="search-button-container flex center perfect" >
          <img className="button search" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt=""/>
        </div>
        <div className="flex perfect">
          <div className="button-container flex center perfect">
            <img className="button" src="http://cdn.onlinewebfonts.com/svg/img_381628.png" alt=""/>
          </div>
          <div className="aim-button-container flex center perfect">
            <img className="button aim" src="https://icon-library.com/images/aim-icon/aim-icon-27.jpg" alt=""/>
          </div>
          <div className="button-container flex center perfect">
            <img className="button" src="https://freesvg.org/img/abstract-user-flat-4.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;