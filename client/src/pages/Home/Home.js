import React from "react";
import Menu from "../../components/Menu";
import List from "../../components/List";

function Home() {
    return (
      <>
        <Menu/>
        <div className="container">
          <List/>
        </div>
      </>
    )
}

export default Home;