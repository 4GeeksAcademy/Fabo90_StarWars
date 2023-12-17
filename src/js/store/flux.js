const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			character: {},
			planet: {},
			favorite: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people");
					const data = await response.json();
					console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ characters: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets");
					const data = await response.json();
					console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ planets: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			getCharacter: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/" + id);
					const data = await response.json();
					console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ character: data })
				} catch (error) {
					console.log(error);
				}
			},
			getPlanet: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/" + id);
					const data = await response.json();
					console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ planet: data })
				} catch (error) {
					console.log(error);
				}
			},
			getFavoriteCharacter: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/" + (id + 1));
					const data = await response.json();
					console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					const store = getStore();
					store.favorite.push(data.name);
					setStore({ favorite: store.favorite })
				} catch (error) {
					console.log(error);
				}
			},
			getFavoritePlanet: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/" + (id + 1));
					const data = await response.json();
					console.log(data);
					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					const store = getStore();
					store.favorite.push(data.name);
					setStore({ favorite: store.favorite })
				} catch (error) {
					console.log(error);
				}
			},
			deleteFavorite: (id) => {
				const store = getStore();
				const aux = store.favorite.filter((item, ind) => id != ind);
				setStore({ favorite: aux });
			},
		},
	};
};

export default getState;
