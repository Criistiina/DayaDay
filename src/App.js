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
	const currentItemsToShow = allWords
	  .filter((word) => word.type === currentType[currentType.length - 1])
	  .slice(indexOfFirstItem, indexOfLastItem);
	  // Calcula el número total de páginas para el tipo actual
	  const totalPages = Math.ceil(
		allWords.filter((word) => word.type === currentType[currentType.length - 1]).length / itemsPerPage
	  );
	
	
	  // Función para cambiar de página
	  const paginate = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
		  setCurrentPage(pageNumber);
		}
	  };	
	  const handleFileChange = (event) => {
		const files = event.target.files; // Obtener todos los archivos seleccionados
		if (files) {
		  for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const reader = new FileReader();
			reader.onloadend = () => {
			  console.log("File loaded:", file);
			  console.log("File loaded:", reader.result);
			  setPhotoURL(reader.result);
			  addItem(); // Llama a addItem para agregar cada imagen
			};
			reader.readAsDataURL(file);
		  }
		}
    };
	
	const addItem = () => {
		if (photoURL) {
			const newItem = {
				id: Date.now(),
				image: photoURL,
				name: "New Item",
				type: currentType[currentType.length - 1], // Asegura que el tipo actual se establezca correctamente

			};
			console.log("Nuevo item:", newItem); // Agregamos un console.log para verificar el nuevo item
			setItems((prevItems) => [...prevItems, newItem]); // Agregar el nuevo item a la lista items
		}
	};
	
	const handleDeleteItem = (item) => {
		setShowConfirmation(true); // Mostrar el modal de confirmación
		setItemToDelete(item); // Establecer el item a eliminar en el estado
	};

		// Función para confirmar la eliminación del elemento
			const confirmDeleteItem = () => {
				console.log("Confirmar eliminación:", itemToDelete);
				// Verificar si el elemento a eliminar es un elemento predeterminado
				const isDefaultItem = allWords.some((word) => word.id === itemToDelete.id);
				if (isDefaultItem) {
					// Si es un elemento predeterminado, solo elimínalo de la lista de palabras
					const updatedAllWords = allWords.filter((word) => word.id !== itemToDelete.id);
					setAllwords(updatedAllWords);
				} else {
					// Si no es un elemento predeterminado, procede con la eliminación del elemento
					const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
					setItems(updatedItems);
				}

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
		} else {
			const copyOfCurrentType = [...currentType];
			copyOfCurrentType.push(word.subtype);
			setCurrentType(copyOfCurrentType);
		}
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
							<div className='word-with-image' >
								<img
								src={`images/${matchedItem.id}.png`}
								alt={matchedItem.name}
								className='image-word'
								/>
							<span className='word'>{word}</span>
							</div>
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
					
					</label>
				
					<input
						type='file'
						ref={inputRef}
						id="fileInput"
						style={{ display: 'none' }}
						onChange={handleFileChange}
						/>
						<img
					className='icon'
					src='logo1.jpeg'
					alt='logo'
					title='Logo de la aplicación'
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
										<div className='word-with-image' >
											<img
												src={`images/${matchedItem.id}.png`}
												alt={matchedItem.name}
												className='image-word'
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
					{currentItemsToShow.map((place) => (
					<div className='item' key={place.id} onClick={() => putNewWord(place)}
					title={`Seleccionar ${place.name}`}>										
						<img src={`images/${place.id}.png`}
							alt={place.name}
							className='image-word'/>
						<span>{place.name}</span>
						<button  className="delete-button" onClick={(e) => {e.stopPropagation(); handleDeleteItem(place)}} title={`Eliminar ${place.name}`}>
								<img src={cancelar} alt="Eliminar" />
						</button>							
						
					</div>
					))}
								
				
					{photoURL && (
						<div className='item' title={`Seleccionar ${inputRef.current.files[0].name.replace(/\.[^.]+$/, '')}`}>
							<img src={photoURL} alt='Imagen seleccionada' />
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
						{`${currentPage}/${Math.ceil(
						allWords.filter((word) => word.type === currentType[currentType.length - 1]).length / itemsPerPage
						)}`}
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