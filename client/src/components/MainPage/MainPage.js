import "./MainPage.css";

const MainPage = () => {
  return (
    <div class="wrapper">
      <div class="sidebar">
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
        <ul class="listPeople">
          <li class="person">
            {/* temporary */}
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
