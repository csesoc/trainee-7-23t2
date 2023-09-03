import "./MainPage.css";
import "./SideBar.js";

const MainPage = () => {
  return (
    <div class="wrapper">        
      <div class="sidebar" id="mySidenav">
        <div class="iconBar">
          <ul class="icons">
            <a href="#Friends">👥</a>
            <a href="#findFriends">🔍</a>
            <a href="#inbox">📩</a>
            <a href="#settingsPage">🔧</a>
          </ul>
        </div>
        <div class="pageType">
          <h3>Add Friends</h3>
        </div>
        <div class="search">
          <form action="#">
            <input type="text"
              placeholder=" Search..."
              name="search"/>
            <button>
              🔍
            </button>
          </form>
        </div>
        {/* temporary: just checking visuals rn */}
        <ul class="listPeople">
          <li class="person">
            <span class="dot"></span>
            <h3>Name</h3>
            <p>Status</p>
          </li>
        </ul>
      </div>
      <div class="map">
        <p>this is the map</p>
      </div>
    </div>
  );
};
export default MainPage;
