import React, { useState } from "react";
import ConditionalPropsRender from "./ConditionalPropsRender";
import EventExample from "./EventExample";
import LifeCycleExample from "./LifecycleExample";
import Open from "./Open";
import Profile from "./Profile";
import Resourse from "./Resourse";

function App() {
  const [someState, setSomeState] = useState(true);

  const updateState = () => setSomeState(!someState);

  return (
    <>
      <EventExample />
      <br />
      <br />
      <Open>
        {openProps => (
          <button onClick={openProps.toggle} type="button">
            Is open example - {openProps.isOpen?.toString()}
          </button>
        )}
      </Open>
      <Resourse
        path={"https://api.github.com/users/mart0tko"}
        render={data => {
          return <Profile data={data.payload} />
        }} />
      <ConditionalPropsRender propsType="v1" />
      <ConditionalPropsRender propsType="v2" />
      <button onClick={updateState}>Update Parent State</button>
      {someState && <LifeCycleExample updateParent={updateState} />}
    </>
  );
}

export default App;
