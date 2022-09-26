import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePageComponent from "./components/HomePageComponent";
import HomeDetailsComponent from "./components/HomeDetailsComponent";
import SearchPageComponent from "./components/SearchPageComponent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navBar, setNavBar] = useState(true);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      {
        // navBar && <Navigation isLoaded={isLoaded} />
      }
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          <Route path='/search'>
            <SearchPageComponent />
          </Route>
          <Route path="/spots/:spotId">
            <HomeDetailsComponent setNavBar={setNavBar} />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <HomePageComponent />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
