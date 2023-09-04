const AddFriends = () => {
    return (
        <div class="wrapper">        
            <div class="sidebar" id="mySidenav">
                <div class="iconBar">
                <ul class="icons">
                    <a href="map/addfriends">👥</a>
                    <a href="map/findfriends">🔍</a>
                    <a href="map/inbox">📩</a>
                    <a href="settings">🔧</a>
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
export default AddFriends;
