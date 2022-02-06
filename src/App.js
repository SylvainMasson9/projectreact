import React from "react";
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './composant/Header';

import CustomBlock1 from './composant/FirstBlock';
import FormBlock from './composant/Form';
import EvoBlock from './composant/SecondBlock';
import Platforme from './composant/ThirdBlock';
import Faq from './composant/FaqBlock';
import Contact from './composant/ConctacButton';
import Footer from './composant/FooterBlock';
import ContactEquipe from "./composant/ContacterEquipe";
import SponsorBlock from "./composant/Sponsor";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const routes = [
  {
    path: "/contact",
    component: Contacts
  },
  {
    path: "/entreprise",
    component: Entreprise,
    routes: [
     
    ]
  }
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>


        <ul>
          <li>
            <Link to="/entreprise">Entreprise</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Contacts() {
  return <div>
    <Header />
    <div>
      <ContactEquipe />
      <section class="o-section v--borderless section-contact-sales-form">
        <div class="o-content-container v--contact-sales-form-container" >
          <div class="o-two-columns v--even-large v--contact-sales-form-grid v--desktop-inverse">
            <SponsorBlock />
            <FormBlock />
          </div>
        </div>
      </section>
      

    </div>

    <Footer />

  </div>

    ;
}

function Entreprise({ routes }) {
  return (
    <div>



      <Header />
      <CustomBlock1 />
      <EvoBlock />
      <Platforme />
      <Faq />
      <Contact />
      <Footer />


      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

