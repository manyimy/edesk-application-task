import React, { useState } from 'react';

function ProfileTab() {
  
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");

  function handleSubmit(e) {
    alert("UserID: " + userId + "\nPassword: " + pwd);
    e.preventDefault();
  };

  return(
    <form className="row g-3 text-start">
        <div className="mb-3 row">
          <label for="staticUID" className="col-sm-2 col-form-label">User ID</label>
          <div className="col-sm-10">
            <input 
              type="text" 
              className="form-control" 
              id="inputUID" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </div>
        </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default ProfileTab;