const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:"",
			planets:"",
			starships:"",
			favorites:""
		},
		actions: {
		getCharacter:()=>{
			fetch ('https://www.swapi.tech/')
			.then(res=>{
				if (res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(respponse=>{
				setStore({characters:response.results});
			})
			.catch(error=>console.error(error));
		},
		getCharactersById: (id, setCharacter) => {
			fetch(`https://www.swapi.tech/api/people/${id}`)
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response=>{
				setCharacter(response.result);
			})
			.catch(error=>console.error(error));
		},
		getPlanets: () => {
			fetch(`https://www.swapi.tech/api/planets`)
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => {
				setStore({ planets: response.results });
			})
			.catch(error => console.error(error));
		},
		getPlanetsById: (id, setPlanet) => {
			fetch(`https://www.swapi.tech/api/planets/${id}`)
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => {
				setPlanet(response.result);
			})
			.catch(error => console.error(error));
		},
		getStarships: () => {
			fetch('https://www.swapi.tech/api/starships')
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => {
				setStore({ starships: response.results });
			})
			.catch(error => console.error(error));
		},
		getStarshipsById: (id, setStarship) => {
			fetch(`https://www.swapi.tech/api/starships/${id}/`)
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => {
				setStarship(response.result);
			})
			.catch(error => console.error(error));
		},
		addFavorites: (newFavorite) => {
			const store = getStore();
			const favorite = store.favorites.concat(newFavorite);
			setStore({ favorites: favorite });
		},
		removeFavorites: (index) => {
			const store = getStore();
			const favorite = store.favorites.filter((c, i) => {
				return index !== i
			});
			setStore({ favorites: favorite });
		},
		
		
		
		// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
