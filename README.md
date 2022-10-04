Luxe-Events is a web application used to look for spots to host any kind of event(weddings, company trips)

### Live Link:

[Luxe-Events](https://luxe-events.herokuapp.com)<br></br>
Start finding spots by click Search on the home page search bar,  no inputs needed.

 Clicking search with no inputs will yield results for all spots listed.

 Currently, only state that has spots is California and cities included are:
 - San Francisco
 - Pacifica
 - Oceanside
 - Carmel
 - Big Sur
 - Monterey
 - San Diego
 - Santa Cruz
 - Santa Barbara
 - Coronado
 - Laguna Beach
 - Hollywood


### Locally:

User must create your own .env file<br></br>

Backend .env must include:

- PORT
- DB_FILE
- JWT_SECRET
- JWT_EXPIRES_IN

Frontend .env.local must include:
- REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY


##Home View:
![home-page](https://airbnb-files.s3.us-west-1.amazonaws.com/Welcome.png)

## Technical Details:

- Built using React/Redux
- Sequelize
- Node.js
- Express.js
- Csurf.js
- BCrypt
- @react-google-maps-api
- FontAwesome
- Reactjs-popup
- React-spring
- React-datepicker
- Validator

## Features:

- Demo user Login
- CRUD functionality for Spots
- CRUD functionality for Bookings
- CRUD functionality for Reviews
- CRUD functionality for Bookmarks
- Search feature for Spots
- Google maps for search & home details.

## TO-DO:

- [ ] Add CRUD features for messages so a user can message the owner of the spot if they have questions.


[Original Design Docs](https://github.com/HTran106/Soundcloud-Project/wiki/Soundcloud-Clone-Original-Design-Docs)
