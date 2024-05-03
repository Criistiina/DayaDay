import { useEffect, useState } from "react";
import "./App.css";

import { places, actions, verbs, foods } from "./constants/constants";

import homeIcon from "./images/home.png";
import readIcon from "./images/reed.png";
import deleteIcon from "./images/delete.png";
import backIcon from "./images/back.png";
import pantallaIcon from "./images/pantalla completa.png";
import AnteriorIcon from "./images/anterior.png";
import SiguienteIcon from "./images/siguiente.png";

function App() {
	const [phrase, setPhrase] = useState([]);

	const [currentType, setCurrentType] = useState(["INITIAL"]);
	const [allWords, setAllwords] = useState([]);
	const [showPhrase, setShowPhrase] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6; // Número de elementos por página

	useEffect(() => {
		const allCurrentWords = [...places, ...actions, ...verbs, ...foods];
		setAllwords(allCurrentWords);
	
	}, []);
	
	
	// Lógica para obtener los elementos a mostrar en la página actual según el tipo actual y la paginación
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItemsToShow = allWords
	  .filter((word) => word.type === currentType[currentType.length - 1])
	  .slice(indexOfFirstItem, indexOfLastItem);
	  // Calcula el número total de páginas para el tipo actual
	  const totalPages = Math.ceil(
		allWords.filter((word) => word.type === currentType[currentType.length - 1]).length / itemsPerPage
	  );
	
	
	  // Función para cambiar de página
	  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	

	function speakSentence() {
		window.speechSynthesis.cancel();

		if (!"speechSynthesis" in window) {
			console.log("El navegador no admite la síntesis de voz.");
		}

		let voice = new SpeechSynthesisUtterance();
		// Objeto de la API
		let jarvis = window.speechSynthesis;

		voice.text = phrase.toString();

		jarvis.speak(voice);
	}
	function showDeleteConfirmation() {
		setShowDeleteModal(true);
	 }
	 // Función para confirmar el borrado
	function confirmDelete() {
			goBack(); // Llamada a la función goBack() para ir atrás después de la confirmación
		  setShowDeleteModal(false);
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
		 // Verifica si no hay ninguna palabra en 'phrase'
		 if (phrase.length === 0) {
			return; // Si 'phrase' está vacío, no hace nada
		  }
		
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
			<div className='lector-big' onClick={() => setShowPhrase(false)}>
			  {phrase.map((word) => {
				const matchedItem = allWords.find((item) => item.name === word);
				if (matchedItem) {
				  return (
					<div className='word-item' key={matchedItem.id}>
						<div className='word-with-image' >
						<span className='word'>{word}</span>
						<img
						src={`images/${matchedItem.id}.png`}
						alt={matchedItem.name}
						className='image-word'
						/>
						</div>
					</div>
				  );
				}
				return null;
			  })}			
			</div>
		  </div>
		);
	  }
	return (
		<div className='container'>
			{showDeleteModal && (
        		<div className="delete-modal">
          			<p>¿Estás seguro de que deseas borrar?</p>
          			<button onClick={confirmDelete}>Confirmar</button>
          			<button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
        		</div>
      		)}
			<div className='menu'>
				<img
					className='icon'
					src='logo1.jpeg'
					alt='logo'
					title='Logo de la aplicación'
				/>
				<button
					type='button'
					onClick={putFullScreen}
					title='Activar pantalla completa'
				><img src={pantallaIcon} alt="Pantalla completa"/>
					
				</button>
			</div>
			<div className='top-level-menu'>
				<div className='menu-options'>
					<button onClick={goHome} title='Ir a la página de inicio'> <img src={homeIcon} alt="Inicio" style={{ width: '45px', height: '45px' }}/>
						</button>
					<button
						disabled={currentType.length === 1}
						onClick={goBack}
						title='Atrás'
					>
						<img src={backIcon} alt="Atrás" style={{width: '45px', height: '45px' }}/>
					</button>
					<button
						disabled={currentType.length === 1}
						onClick={showDeleteConfirmation}
						title='Borrar'
					>
						<img src={deleteIcon} alt="Borrar" style={{ width: '45px', height: '45px' }}/>
					</button>
					<button
						onClick={speakSentence}
						title='Leer en alto'
					>
						<img src={readIcon} alt="Leer"style={{width: '45px', height: '45px'}} />
					</button>
				</div>
				
				<div
					className='lector'
					onClick={showLector}
					title='Pulsa para agrandar y leer'
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
				{currentItemsToShow.map((place) => (
				<div
					className='item'
					key={place.id}
					onClick={() => putNewWord(place)}
					title={`Seleccionar ${place.name}`}
				>
					<img
					src={`images/${place.id}.png`}
					alt={place.name}
					className='image-word'
					/>
					<span>{place.name}</span>
				</div>
				))}

		{currentType[currentType.length - 1] == "FINISH" && (			
			<img
			src={`images/indicar.png`}
			alt={'Indicar'}
			style={{ width: '100px', height: '100px' }}
			title='Pulsa en la frase'
			onClick={showLector}
			/>
		)}

		{currentType[currentType.length - 1] !== "FINISH" && (
			<div className='pagination'>
			<div className='pagination-info'>
				{totalPages > 1 && (
				<span>{`${currentPage}/${totalPages}`}</span>
				)}
			</div>
			<div className='pagination-buttons'>
				<button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} title='Página anterior'>
				<img src={AnteriorIcon} alt="Anterior" style={{ width: '24px', height: '24px' }}></img>
				</button>
				
				<button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} title='Página siguiente'>
				<img src={SiguienteIcon} alt="Siguiente" style={{ width: '24px', height: '24px' }}></img>
				</button>
			</div>
			</div>
		)}
      </div>
    </div>
	
  );
}

export default App;