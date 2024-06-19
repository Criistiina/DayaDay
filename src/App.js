import { useEffect, useState, useRef } from "react";

import "./App.css";

import { places, actions, verbs, foods } from "./constants/constants";

import homeIcon from "./images/home.png";
import readIcon from "./images/reed.png";
import deleteIcon from "./images/delete.png";
import borrarIcon from "./images/borrar.png";
import backIcon from "./images/atras.png";
import pantallaIcon from "./images/pantalla completa.png";
import AnteriorIcon from "./images/anterior.png";
import SiguienteIcon from "./images/siguiente.png";
import imprimir from "./images/imprimir.png";
import añadir from "./images/anadir.png";
import cancelar from "./images/cancelar.png";

function App() {
	const [phrase, setPhrase] = useState([]);

	const [currentType, setCurrentType] = useState(["INITIAL"]);
	const [allWords, setAllwords] = useState([]);
	const [showPhrase, setShowPhrase] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsContainerRef = useRef(null);
	const [items, setItems] = useState([]);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
    const [photoURL, setPhotoURL] = useState("");


	const inputRef = useRef(null);

	const itemsPerPage = 6; // Número de elementos por página

	useEffect(() => {
		const allCurrentWords = [...places, ...actions, ...verbs, ...foods];
		setAllwords(allCurrentWords);
	
	}, []);
	
	
	// Lógica para obtener los elementos a mostrar en la página actual según el tipo actual y la paginación
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const filteredWords = allWords.filter((word) => word.type === currentType[currentType.length - 1]);
const currentItemsToShow = filteredWords.slice(indexOfFirstItem, indexOfLastItem);

// Calcula el número total de páginas para el tipo actual
const totalPages = Math.ceil(filteredWords.length / itemsPerPage);

	
	  // Función para cambiar de página
	  const paginate = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
		  setCurrentPage(pageNumber);
		}
	  };	
	  const resetPagination = () => {
        setCurrentPage(1);
    };
	const handleFileChange = (event) => {
		const files = event.target.files; // Obtener todos los archivos seleccionados
		const currentTypeValue = currentType[currentType.length - 1]; // Obtener el tipo actual
		if (files) {
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				const reader = new FileReader();
				reader.onloadend = () => {
					addItem(file.name.replace(/\.[^.]+$/, ''), reader.result, currentTypeValue); // Llama a addItem y pasa el nombre del archivo sin la extensión, la URL de la imagen, y el tipo actual
				};
				reader.readAsDataURL(file);
			}
		}
	};
	
	const addItem = (name, imageUrl, type) => {
    const newItem = {
        id: Date.now(),
        image: imageUrl,
        name: name,
        type: type,
    };
    setAllwords((prevWords) => [...prevWords, newItem]); // Agregar el nuevo ítem a la lista allWords
    resetPagination(); // Resetear la paginación al añadir un nuevo ítem
};

	const handleDeleteItem = (item) => {
		setShowConfirmation(true); // Mostrar el modal de confirmación
		setItemToDelete(item); // Establecer el item a eliminar en el estado
	};
	const confirmDeleteItem = () => {
		console.log("Confirmar eliminación:", itemToDelete);
	
		// Actualizar la lista allWords eliminando el ítem
		const updatedAllWords = allWords.filter((word) => word.id !== itemToDelete.id);
		setAllwords(updatedAllWords);
	
		// Si el ítem eliminado es un ítem dinámico, actualizamos la lista de items dinámicos
		const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
		setItems(updatedItems);
	
		if (itemToDelete.id === "photo") {
			// Si el elemento a eliminar es una foto recientemente seleccionada
			setPhotoURL(""); // Limpiar la URL de la foto
		}
	
		setShowConfirmation(false); // Ocultar el botón de confirmación
		setItemToDelete(null); // Limpiar itemToDelete
	};
	

		// Función para cancelar la eliminación del elemento
		const cancelDeleteItem = () => {
			setShowConfirmation(false);
			setItemToDelete(null); // Limpiar itemToDelete

		};
	
		
	function speakSentence() {
		window.speechSynthesis.cancel();

		if (!"speechSynthesis" in window) {
			console.log("El navegador no admite la síntesis de voz.");
		}

		let voice = new SpeechSynthesisUtterance();
		// Objeto de la API
		let jarvis = window.speechSynthesis;

		voice.text = phrase.toString();
		// Establecer la velocidad de la voz (0.5 es la mitad de la velocidad normal)
		voice.rate = 0.56;
		jarvis.speak(voice);
	}
	
	
	const handleTouchStart = (event) => {
        const touchStartX = event.touches[0].clientX;
        itemsContainerRef.current.dataset.touchStartX = touchStartX;
    };

    const handleTouchEnd = (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const touchStartX = parseInt(itemsContainerRef.current.dataset.touchStartX, 10);
        const deltaX = touchEndX - touchStartX;
        const threshold = 50; // Umbral de desplazamiento para cambiar de página

        if (deltaX > threshold) {
            // Deslizamiento hacia la izquierda, cambia a la página anterior
            paginate(currentPage - 1);
        } else if (deltaX < -threshold) {
            // Deslizamiento hacia la derecha, cambia a la página siguiente
            paginate(currentPage + 1);
        }
    };

	function putNewWord(word) {
		const copyOfPhare = [...phrase];
		copyOfPhare.push(word.name);
	
		if (word.subtype === "FINISH") {
			// No cambiamos el estado currentType para permitir más selecciones
		}
		else if (word.type === "GENERAL"){
			
		}
		 else {
			const copyOfCurrentType = [...currentType];
			copyOfCurrentType.push(word.subtype);
			setCurrentType(copyOfCurrentType);
		}
		if (word.subtype === "GENERAL") {
			return;
		}
	
		setPhrase(copyOfPhare);
		resetPagination(); // Resetear la paginación al añadir una nueva palabra
	
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
		resetPagination(); // Resetear la paginación al añadir una nueva palabra

	}

	function showLector() {
		 // Verifica si no hay ninguna palabra en 'phrase'
		 if (phrase.length === 0) {
			return; // Si 'phrase' está vacío, no hace nada
		  }
		
		setShowPhrase(true);

		speakSentence();
	}
	function deleteLastWord() {
		const copyOfPhrase = [...phrase];
		copyOfPhrase.pop(); // Elimina la última palabra de la frase
	
		setPhrase(copyOfPhrase);
	}
	
	function deleteWholePhrase() {
		setPhrase([]); // Elimina toda la frase
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
	function printPhrase() {
		window.print(); // Inicia el proceso de impresión
	  }
	
	if (showPhrase) {
		return (
			<div className='lector-container'>
            <div className='lector-big' onClick={() => setShowPhrase(false)}>
                <div className='word-items-container'>
                    {phrase.map((word) => {
                        const matchedItem = allWords.find((item) => item.name === word);
                        if (matchedItem) {
                            return (
                                <div className='word-item' key={matchedItem.id}>
                                    <img
                                        src={matchedItem.image || `images/${matchedItem.id}.png`}
                                        alt={matchedItem.name}
                                        className='image-word'
                                        style={{  objectFit: 'cover', width: '50%', height: 'auto' }}
                                    />
                                    <span className='word'>{word}</span>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
			
				<div className="Imprimir">
					<button onClick={printPhrase} title='Imprimir'>
						<img src={imprimir} alt="Imprimir"/>
					</button>
				</div>
				<div className="salir">
						<p>Pulse el lector para salir de la pantalla</p>
				</div>
			</div>		
		 
		);
	  }
	return (
		<div className='container'>
						
				<div class="button-container">
					<label htmlFor="fileInput" className="file-input-label">
							<img src={añadir}  alt='Agregar ítem' />
							<button
								className="pantalla-completa"
								type='button'
								onClick={putFullScreen}
								title='Activar pantalla completa'
								><img src={pantallaIcon} alt="Pantalla completa"/>
							</button>
								<img
									className='icon'
									src='logo1.jpeg'
									alt='logo'
									title='Logo de la aplicación'
								/> 
						
					
					</label>
				
					<input
						type='file'
						ref={inputRef}
						id="fileInput"
						style={{ display: 'none' }}
						onChange={handleFileChange}
						/>
						
				</div>
				
				<div className={`menu-options ${showPhrase ? 'menu-hidden' : ''}`}>
					<div className='menu-left' >
						<button onClick={goHome} title='Ir a la página de inicio'> <img src={homeIcon} alt="Inicio"/>
							</button>
						<button
							disabled={currentType.length === 1}
							onClick={goBack}
							title='Atrás'
						>
							<img src={backIcon} alt="Atrás"/>
						</button>
					</div>
				
					<div
						className={`lector ${showPhrase ? 'menu-hidden' : ''}`}
						onClick={showLector}
						title='Pulsa para agrandar y leer'
					>
					 {phrase.map((word, index) => {
						const matchedItem = allWords.find(item => item.name === word);
						if (matchedItem) {
							return (
								<div className='word-item' key={index}>
									<div className='word-with-image'>
										<img
											src={matchedItem.image || `images/${matchedItem.id}.png`}
											alt={matchedItem.name}
											className='image-word'
											style={{ objectFit: 'contain', width: '30%', height: '100%' }}
										/>
										<div className='word-below-image'>{word}</div>
									</div>
								</div>
							);
					}
							return null;
						})}
					</div>
				

        			<div className='menu-right' >
						<button
							disabled={currentType.length === 1}
							onClick={deleteLastWord}
							title='Borrar última palabra'
						>
							<img src={borrarIcon} alt="Borrar" />
						</button>
						<button
							disabled={currentType.length === 1}
							onClick={deleteWholePhrase}
							title='Eliminar frase completa'
						>
							<img src={deleteIcon} alt="Eliminar" />
						</button>
						<button
							onClick={speakSentence}
							title='Leer en alto'
						>
							<img src={readIcon} alt="Leer" />
						</button>
					</div>
				</div>
			

			<div className='items'
				ref={itemsContainerRef}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				>
					{currentType[currentType.length - 1] === "GENERAL" && (
						<div className="actions-and-verbs">
							<div className="actions-container">
								{actions.map((action) => (
									<div className="item" key={action.id} onClick={() => putNewWord(action)} title={`Seleccionar ${action.name}`} style={{ objectFit: "contain", width: "50%", height: "100%" }}>
										<img src={`images/${action.id}.png`} alt={action.name} className="image-word" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
										<span>{action.name}</span>
										<button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteItem(action); }} title={`Eliminar ${action.name}`}>
											<img src={cancelar} alt="Eliminar" />
										</button>
									</div>
								))}
							</div>
							<div className="verbs-container">
								{verbs.concat(items.filter(item => item.type === 'verbs')).slice(0, itemsPerPage).map((verb) => (
									<div className="item" key={verb.id} onClick={() => putNewWord(verb)} title={`Seleccionar ${verb.name}`}>
										<img src={verb.image || `images/${verb.id}.png`} alt={verb.name} className="image-word" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
										<span>{verb.name}</span>
										<button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteItem(verb); }} title={`Eliminar ${verb.name}`}>
											<img src={cancelar} alt="Eliminar" />
										</button>
									</div>
								))}
							</div>
						</div>
					)}
						
						{currentType[currentType.length - 1] !== "GENERAL" &&
							currentItemsToShow.map((item) => (
								<div className="item" key={item.id} onClick={() => putNewWord(item)} title={`Seleccionar ${item.name}`}>
									<img src={item.image || `images/${item.id}.png`} alt={item.name} className="image-word" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
									<span>{item.name}</span>
									<button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteItem(item); }} title={`Eliminar ${item.name}`}>
										<img src={cancelar} alt="Eliminar" />
									</button>
								</div>
							))
						}

												
				{photoURL && !allWords.some(word => word.image === photoURL) && (
					<div className='item' title={`Seleccionar ${inputRef.current.files[0].name.replace(/\.[^.]+$/, '')}`}>
						<img src={photoURL} alt='Imagen seleccionada' style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
						<span>{inputRef.current.files[0].name.replace(/\.[^.]+$/, '')}</span>
						<button className='delete-button' onClick={(e) => { e.stopPropagation(); handleDeleteItem({ id: "photo" })}} title={`Eliminar ${inputRef.current.files[0].name.replace('.png', '')}`}>
							<img src={cancelar} alt="Eliminar" />
						</button>
					</div>
				)}

				{(showConfirmation && itemToDelete && (
							<div className="confirmation-modal" >
								<p>¿Estás seguro que deseas eliminar {itemToDelete.name ? itemToDelete.name : ` ${inputRef.current.files[0].name.replace(/\.[^.]+$/, '')}`}??</p>
								<div className="confirmation-modal-buttons">
									<button onClick={confirmDeleteItem}>Sí</button>
									<button onClick={cancelDeleteItem}>Cancelar</button>
								</div>
							</div>
						))}
			</div>

			{currentType[currentType.length - 1] !== "FINISH" && (
				<div className='pagination'>
					<div className='pagination-info'>
						{`${currentPage}/${totalPages}`}
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
	
  );
}

export default App; 