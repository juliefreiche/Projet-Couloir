import React, { Component } from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import Menu from '../menu/menu.js';
import Contacts from '../contacts/contacts.js';
import Parties from '../parties/parties.js';
import Parametres from '../parametres/parametres.js';
import Jeu from '../jeu/jeu.js';
import Profil from '../profil/profil.js';
import Top from '../top/top.js';
import Content from '../content/content.js';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";



class Main extends Component {

render(){
	return(
<HashRouter>
		<div>
			<Top/>
			<Menu/>
			<Content/>
			<Contacts/>

</div>
</HashRouter>
		);
	}	
}

export default Main;