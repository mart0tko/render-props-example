import React from "react";
import Profile from "./Profile";
import Resourse from "./Resourse";

function App() {
  return (
    <Resourse
      path="https://api.github.com/users/mart0tko"
      render={data => {
        return <Profile data={data.payload} />
      }} />
  );
}

export default App;
