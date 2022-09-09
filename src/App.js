import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ResourceMeasure from './Components/Commons/ResourceMeasure'
import logo from './logo.svg';
import './App.css';

const Home = () => (
	<>
		<p>
			Click on link below to check the load size with differet import statements in the code.
		</p>			
		<a
			className="App-link"
			href="/all-countries"
			target="_blank"
			rel="noopener noreferrer"
		>
			All Countries
		</a>
		<a
			className="App-link"
			href="/states-of-india"
			target="_blank"
			rel="noopener noreferrer"
		>
			States Of a Country (India)
		</a>

		<a
			className="App-link"
			href="/cities-of-telangana"
			target="_blank"
			rel="noopener noreferrer"
		>
			Cities Of a State (Telangana)
		</a>
		<a
			className="App-link"
			href="/countries-and-city"
			target="_blank"
			rel="noopener noreferrer"
		>
			Countries and Cities Of a State (Telangana)
		</a>
		<a
			className="App-link"
			href="/countries-and-states"
			target="_blank"
			rel="noopener noreferrer"
		>
			All Countries and States of India only
		</a>
		<a
			className="App-link"
			href="/states-and-cities"
			target="_blank"
			rel="noopener noreferrer"
		>
			All States and Cities of India only
		</a>
	</>
);

function App() {
	useEffect(() => {
		document.title = 'Tree Shaking Demo | Country-State-City(npm)';
	});
	const Country = lazy(() => import(/* webpackChunkName: "Country" */ './routes/Country'));
	const State = lazy(() => import(/* webpackChunkName: "State" */ './routes/State'));
	const City = lazy(() => import(/* webpackChunkName: "City" */ './routes/City'));
	const CountryAndCity = lazy(() => import(/* webpackChunkName: "CountryAndCity" */ './routes/CountryAndCity'));
	const CountriesAndStates = lazy(() => import(/* webpackChunkName: "CountryAndState" */ './routes/CountryAndState'));
	const StatesAndCities = lazy(() => import(/* webpackChunkName: "StatesAndCities" */ './routes/StatesAndCities'));

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />		
			 <Router>
				<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/all-countries" element={<Country />} />
					<Route path="/states-of-india" element={<State />} />
					<Route path="/cities-of-telangana" element={<City />} />
					<Route path="/countries-and-city" element={<CountryAndCity />} />
					<Route path="/countries-and-states" element={<CountriesAndStates />} />
					<Route path="/states-and-cities" element={<StatesAndCities />} />
				</Routes>
				</Suspense>
			</Router>
			</header>
		</div>
	);
}

export default App;
