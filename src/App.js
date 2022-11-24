import './App.css';
import ProfileTab from './tabs/profileTab';
import HomeTab from './tabs/homeTab';

function App() {
  return (
    <div className="App">
      <div className="container-sm p-3 mx-auto">
        <div className="nav flex-column p-3">
          <div className="d-flex align-items-start">
            <div className="nav flex-column nav-tabs me-3" id="nav-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="tabs-home-tab" data-bs-toggle="tab" data-bs-target="#tabs-home" type="button" role="tab" aria-controls="v-tabs-home" aria-selected="true">Home</button>
              <button className="nav-link" id="tabs-profile-tab" data-bs-toggle="tab" data-bs-target="#tabs-profile" type="button" role="tab" aria-controls="v-tabs-profile" aria-selected="false">Profile</button>
              <button className="nav-link" id="tabs-messages-tab" data-bs-toggle="tab" data-bs-target="#tabs-messages" type="button" role="tab" aria-controls="v-tabs-messages" aria-selected="false">Messages</button>
              <button className="nav-link" id="tabs-settings-tab" data-bs-toggle="tab" data-bs-target="#tabs-settings" type="button" role="tab" aria-controls="v-tabs-settings" aria-selected="false">Settings</button>
            </div>
            <div className="tab-content w-100" id="tabs-tabContent">
              <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="v-tabs-home-tab" tabindex="0"><HomeTab /></div>
              <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="v-tabs-profile-tab" tabindex="0"><ProfileTab /></div>
              <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="v-tabs-messages-tab" tabindex="0">This is messages page.</div>
              <div className="tab-pane fade" id="tabs-settings" role="tabpanel" aria-labelledby="v-tabs-settings-tab" tabindex="0">This is settings page.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
