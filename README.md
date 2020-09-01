# Chore Hack


![Web Screenshot](./client/public/img/WireFrame1.gif)


## Table of Content
- Objective
- Deployed Link
- Getting Started
- Code Highlights
- Technologies
- Authors

## Objective

Our goal was to create an application that allows users to easily track chores within a multi-person household. The application allows users to link their accounts by sharing an invite code. Users can then create one-time or repeating chores, assign them to a member of their household, view chores on a to-do list and a calendar, mark chores as complete on the to-do list, and view completion statistics for themselves and other members of their household.

## Deployed Link

* [chore-hack.herokuapp.com](https://chore-hack.herokuapp.com/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
$ git clone git@github.com:liza-p/project-3.git
liza-p/project-3.git
$ cd liza-p/project-3.git
```

Then open in your preferred text editor:
- [vim](https://www.vim.org/) 
- [emmacs](https://www.gnu.org/software/emacs/)
- [visual studio code](https://code.visualstudio.com/) 

To install dependencies, run this command.

```
npm install
```

You will need to create the development database by running the following command in MySQL Workbench or the MySQL command line interface.

```SQL
CREATE DATABASE chore_db;
```

To start the development server, execute this command in the terminal.

```
npm start
```

## Code Highlights

We keep store data on the frontend in a global state created with `useReducer`. The part of the reducer function that updates the current user's name and ID is shown below.

![Screenshot](./client/public/img/reducer.png)

The information stored in the global state is used throughout the React application. One such place is in `App.js` where we handle routing using `react-router-dom`. The existance of `state.username` indicates that the user is logged in, which determines which set of routes are available.

```jsx
// check if the user is logged in
state.username ?
  // in the case where the user is logged in, reroute away fron login or signup
  <Switch>
    <Redirect exact path={["/", "/login"]} to="/dashboard" />
    <Redirect exact path="/signup" to="/household" />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/household" component={Household} />
    <Route exact path="/chores" component={Chores} />
  </Switch> :
  // in the case where the user is not logged in, reroute to login
  <Switch>
    <Redirect exact path={["/", "/dashboard", "/household", "/chores"]} to="/login" />
    <Redirect exact path="/" to="/login" />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
  </Switch>
```

## Technologies
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScrip)
* [Heroku](https://www.heroku.com/)
* [MySQL](https://www.mysql.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org/)
* [Passport.js](http://www.passportjs.org/)
* [Axios](https://www.npmjs.com/package/axios)

## Authors
### [Liza Poliachenko](https://github.com/liza-p)
- [LinkedIn](https://www.linkedin.com/in/liza/)
- [Portfolio](https://lizas-portfolio.herokuapp.com/)
- [Highlighted-Work]()
- email: liyourlp@gmail.com

### [Sierra Chapman](https://github.com/SierraChapman)
- [LinkedIn](https://www.linkedin.com/in/sierra-chapman/)
- [Portfolio](https://react-portfolio-sc.herokuapp.com)
- [Highlighted-Work]()
- email: siechap@gmail.com

### [Hannah Smith](https://github.com/hannahpsmith1)
- [LinkedIn](linkedin.com/in/hannah-patience-smith)
- [Portfolio](https://hannahpsmith1.github.io/redesign-portfolio/)
- [Highlighted-Work]()
- email: hannahpsmith1@gmail.com

### [Ayla Dillis](https://github.com/ayladillis)
- [LinkedIn](https://www.linkedin.com/in/ayladillis/)
- [Portfolio](https://react-portfolio-ad.herokuapp.com/)
- [Highlighted-Work](https://ayladillis.github.io/Coding-Bootcamp-Project-1-Zillow-Maps-API-AD/)
- email: aayladillis@gmail.com