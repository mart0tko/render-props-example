import React from "react";
import ConditionalPropsRender from "./ConditionalPropsRender";
import Open from "./Open";
import Profile from "./Profile";
import Resourse from "./Resourse";

function App() {
  return (
    <>
      <Open>
        {openProps => (
          <button onClick={openProps.toggle} type="button">
            Is open example - {openProps.isOpen?.toString()}
          </button>
        )}
      </Open>
      <Resourse
        path="https://api.github.com/users/mart0tko"
        render={data => {
          return <Profile data={data.payload} />
        }} />
        <ConditionalPropsRender propsType="v1"/>
        <ConditionalPropsRender propsType="v2"/>
    </>
  );
}

export default App;
