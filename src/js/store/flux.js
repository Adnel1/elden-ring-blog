const base = "https://eldenring.fanapis.com/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ammos: [],
			armors: [],
			ashes: [],
			bosses: [],
			classes: [],
			creatures: [],
			incantations: [],
			items: [],
			locations: [],
			npcs: [],
			shields: [],
			sorceries: [],
			spirits: [],
			talismans: [],
			weapons: [],
			favorites: JSON.parse(localStorage.getItem('favorites')) || []
		},
		actions: {
			loadAmmos: async () => {
				try {
					const response = await fetch(base + "ammos");
					const data = await response.json();
					setStore({ ammos: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadArmors: async () => {
				try {
					const response = await fetch(base + "armors");
					const data = await response.json();
					setStore({ armors: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadAshes: async () => {
				try {
					const response = await fetch(base + "ashes");
					const data = await response.json();
					setStore({ ashes: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadBosses: async () => {
				try {
					const response = await fetch(base + "bosses");
					const data = await response.json();
					setStore({ bosses: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadClasses: async () => {
				try {
					const response = await fetch(base + "classes");
					const data = await response.json();
					setStore({ classes: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadCreatures: async () => {
				try {
					const response = await fetch(base + "creatures");
					const data = await response.json();
					setStore({ creatures: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadIncantations: async () => {
				try {
					const response = await fetch(base + "incantations");
					const data = await response.json();
					setStore({ incantations: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadItems: async () => {
				try {
					const response = await fetch(base + "items");
					const data = await response.json();
					setStore({ items: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadLocations: async () => {
				try {
					const response = await fetch(base + "locations");
					const data = await response.json();
					setStore({ locations: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadNPCS: async () => {
				try {
					const response = await fetch(base + "npcs");
					const data = await response.json();
					setStore({ npcs: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadShields: async () => {
				try {
					const response = await fetch(base + "shields");
					const data = await response.json();
					setStore({ shields: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadSorceries: async () => {
				try {
					const response = await fetch(base + "sorceries");
					const data = await response.json();
					setStore({ sorceries: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadSpirits: async () => {
				try {
					const response = await fetch(base + "spirits");
					const data = await response.json();
					setStore({ spirits: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadTalismans: async () => {
				try {
					const response = await fetch(base + "talismans");
					const data = await response.json();
					setStore({ talismans: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			loadWeapons: async () => {
				try {
					const response = await fetch(base + "weapons");
					const data = await response.json();
					setStore({ weapons: data.data });
				} catch (e) {
					console.error(e);
				}
			},
			toggleFavorites: (id, isAdding) => {
				const store = getStore();
				const favoritesArray = store.favorites;

				let updatedFavorites;
				if (isAdding) {
					updatedFavorites = [...favoritesArray, id];
				} else {
					updatedFavorites = favoritesArray.filter((item) => item !== id);
				}

				// Save the updated favorites to local storage
				localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

				setStore({ favorites: updatedFavorites });
			},
			deleteItem: (id) => {
				const store = getStore();
				const favoritesArray = store.favorites;

				const filteredArray = favoritesArray.filter((item) => item !== id);
				setStore(
					{
						favorites: filteredArray
					}
				);

				// Save the updated favorites to local storage
				localStorage.setItem('favorites', JSON.stringify(filteredArray));
			}
		}
	};
};

export default getState;
