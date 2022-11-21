// import logo from './logo.svg';
import './App.css';
import ProfileTab from './tabs/profileTab';
import HomeTab from './tabs/homeTab';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div class="container-sm bg-light p-3">
        <div class="nav flex-column my-auto mx-auto p-3">
          <div class="d-flex align-items-start">
            <div class="nav flex-column nav-tabs me-3" id="nav-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active" id="tabs-home-tab" data-bs-toggle="tab" data-bs-target="#tabs-home" type="button" role="tab" aria-controls="v-tabs-home" aria-selected="true">Home</button>
              <button class="nav-link" id="tabs-profile-tab" data-bs-toggle="tab" data-bs-target="#tabs-profile" type="button" role="tab" aria-controls="v-tabs-profile" aria-selected="false">Profile</button>
              <button class="nav-link" id="tabs-messages-tab" data-bs-toggle="tab" data-bs-target="#tabs-messages" type="button" role="tab" aria-controls="v-tabs-messages" aria-selected="false">Messages</button>
              <button class="nav-link" id="tabs-settings-tab" data-bs-toggle="tab" data-bs-target="#tabs-settings" type="button" role="tab" aria-controls="v-tabs-settings" aria-selected="false">Settings</button>
            </div>
            <div class="tab-content" id="tabs-tabContent">
              <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="v-tabs-home-tab" tabindex="0"><HomeTab /></div>
              <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="v-tabs-profile-tab" tabindex="0"><ProfileTab /></div>
              <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="v-tabs-messages-tab" tabindex="0">This is messages page.</div>
              <div class="tab-pane fade" id="tabs-settings" role="tabpanel" aria-labelledby="v-tabs-settings-tab" tabindex="0">This is settings page.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
