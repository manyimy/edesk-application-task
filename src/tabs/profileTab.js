import React, { useState } from 'react';

function ProfileTab() {
  
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");

  function handleSubmit(e) {
    alert("UserID: " + userId + "\nPassword: " + pwd);
    e.preventDefault();
  };

  return(
    <form class="row g-3 text-start">
      {/* <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Email</label>
        <input type="text" class="form-control" id="inputEmail2" value="email@example.com" />
      </div>
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
      </div> */}
        <div class="mb-3 row">
          <label for="staticUID" class="col-sm-2 col-form-label">User ID</label>
          <div class="col-sm-10">
            <input 
              type="text" 
              class="form-control" 
              id="inputUID" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </div>
        </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default ProfileTab;