import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePageComponent from "./components/HomePageComponent";
import HomeDetailsComponent from "./components/HomeDetailsComponent";
import SearchPageComponent from "./components/SearchPageComponent";
import ProfileComponent from "./components/ProfileComponent";
import BookmarkComponent from "./components/ProfileComponent/BookmarkComponent";
import ErrorPage from "./components/404Component";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navBar, setNavBar] = useState(true);
  const [location, setLocation] = useState(window.location.pathname)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
      {
        navBar && <Navigation location={location} isLoaded={isLoaded} />
      }
      {isLoaded && (
        <Switch>
          <Route path='/search/:location/:checkIn/:checkOut'>
            <SearchPageComponent setLocation={setLocation} />
          </Route>
          <Route path='/search/:checkIn/:checkOut'>
            <SearchPageComponent setLocation={setLocation} />
          </Route>
          <Route path='/search/:location'>
            <SearchPageComponent setLocation={setLocation} />
          </Route>
          <Route path='/search'>
            <SearchPageComponent setLocation={setLocation} />
          </Route>
          <Route path="/spots/:spotId">
            <HomeDetailsComponent setLocation={setLocation} setNavBar={setNavBar} />
          </Route>
          <Route exact path='/a'>
            <BookmarkComponent setLocation={setLocation} />
          </Route>
          <Route exact path='/my/account'>
            <ProfileComponent setLocation={setLocation} />
          </Route>
          <Route path="/signup">
            <SignupFormPage setLocation={setLocation} />
          </Route>
          <Route exact path='/'>
            <HomePageComponent setLocation={setLocation} />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
