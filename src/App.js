import { useEffect, useState } from "react";
import "./App.css";

import { places, actions, verbs, foods } from "./constants/constants";

import homeIcon from "./images/home.png";
import readIcon from "./images/reed.png";
import deleteIcon from "./images/delete.png";
import backIcon from "./images/back.png";
import pantallaIcon from "./images/pantalla completa.png";

function App() {
	const [phrase, setPhrase] = useState([]);

	const [currentType, setCurrentType] = useState(["INITIAL"]);
	const [allWords, setAllwords] = useState([]);
	const [showPhrase, setShowPhrase] = useState(false);

	useEffect(() => {
		const allCurrentWords = [...places, ...actions, ...verbs, ...foods];
		setAllwords(allCurrentWords);
	}, []);

	// useEffect(() => {
	// 	window.speechSynthesis.cancel();

	// 	if (!"speechSynthesis" in window) {
	// 		console.log("NO VA");
	// 	}
	// }, []);

	function speakSentence() {
		window.speechSynthesis.cancel();

		if (!"speechSynthesis" in window) {
			console.log("NO VA");
		}

		let voice = new SpeechSynthesisUtterance();
		// Objeto de la API
		let jarvis = window.speechSynthesis;

		voice.text = phrase.toString();

		jarvis.speak(voice);
	}

	function putNewWord(word) {
		const copyOfPhare = [...phrase];
		copyOfPhare.push(word.name);

		const copyOfCurrentType = [...currentType];
		copyOfCurrentType.push(word.subtype);
		setCurrentType(copyOfCurrentType);

		if (word.subtype === "GENERAL") {
			return;
		}

		setPhrase(copyOfPhare);
	}

	function goBack() {
		const copyOfPhare = [...phrase];
		copyOfPhare.pop();
		const copyOfCurrentType = [...currentType];
		copyOfCurrentType.pop();

		setCurrentType(copyOfCurrentType);
		setPhrase(copyOfPhare);
	}

	function goHome() {
		setCurrentType(["INITIAL"]);
		setPhrase([]);
	}

	function showLector() {
		setShowPhrase(true);

		speakSentence();
	}

	function putFullScreen() {
		const documentElement = document.documentElement;

		if (documentElement.requestFullScreen) {
			documentElement.requestFullScreen();
			return;
		}

		if (documentElement.mozRequestFullScreen) {
			documentElement.mozRequestFullScreen();
			return;
		}
		if (documentElement.webkitRequestFullScreen) {
			documentElement.webkitRequestFullScreen();
			return;
		}
	}

	if (showPhrase) {
		return (
			<div className='lector-container'>
				<div
					className='lector-big'
					onClick={() => setShowPhrase(false)}
				>
					{phrase.map((word) => {
						return (
							<div className='word'>
								<span>{word}</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	return (
		<div className='container'>
			<div className='menu'>
				<img
					className='icon'
					src='logo1.jpeg'
					alt='logo'
				/>
				<button
					type='button'
					onClick={putFullScreen}
				><img src={pantallaIcon} alt="Pantalla completa" style={{ width: '50px', height: '50px' }}/>
					
				</button>
			</div>
			<div className='top-level-menu'>
				<div className='menu-options'>
					<button onClick={goHome}> <img src={homeIcon} alt="Home" style={{ width: '24px', height: '24px' }}/>
						</button>
					<button
						disabled={currentType.length === 1}
						onClick={goBack}
					>
						<img src={backIcon} alt="Atrás" style={{ width: '24px', height: '24px' }}/>
					</button>
					<button
						disabled={currentType.length === 1}
						onClick={goBack}
					>
						<img src={deleteIcon} alt="Borrar" style={{ width: '24px', height: '24px' }}/>
					</button>
					<button
						// disabled={currentType.length === 1}
						onClick={speakSentence}
					>
						<img src={readIcon} alt="Leer"style={{ width: '24px', height: '24px' }} />
					</button>
				</div>
				<div
					className='lector'
					onClick={showLector}
				>
					{phrase.map((word) => {
						return (
							<div className='word'>
								<span>{word}</span>
							</div>
						);
					})}
				</div>
			</div>

			<div className='items'>
				{allWords
					.filter((word) => word.type === currentType[currentType.length - 1])
					.map((place) => {
						return (
							<div
								className='item'
								onClick={() => putNewWord(place)}
							>
								<img
									src={`images/${place.id}.png`}
									//src={`images/eat.png`}
									alt={place.name}
									className='image-word'
								/>
								<span>{place.name}</span>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;
