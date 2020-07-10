import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import First from "./components/First";
import Layout from "./layout/Layout";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Final from "./components/Final";

function App() {
  return (
    <div className="App">
      <Layout>
        <AnimatePresence>
          <Switch>
            <Route path="/" component={First} exact/>
            <Route path="/second" component={Second} exact />
            <Route path="/third" component={Third} exact />
            <Route path="/fourth" component={Fourth} exact />
            <Route path="/final" component={Final} exact />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
