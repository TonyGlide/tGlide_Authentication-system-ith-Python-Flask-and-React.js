const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
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
			]
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			syncTokenFromSessionStore: () => {
				const sessionToken = sessionStorage.getItem('token');
				console.log("Application just loade. Syncing the sessionStorage token.")
				if (sessionToken && sessionToken !== "" && sessionToken !== undefined) {
					setStore({token: sessionToken})
				}
			},

		
			login: async (email, password) => {
					const options = {
						method: 'POST',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							email: email, 
							password: password
						}),
					}
			
					const response = await fetch('https://cautious-spork-4jqg59qr6xxph9j5-3001.app.github.dev/api/token', options)

					if(!response.ok) {
						console.log("error:", response.status, response.statusText)
						return false;
					}

					const data = await response.json();
					sessionStorage.setItem("token", data.access_token)
					setStore({token: data.access_token})
					return true;
			},
		
			logout: () => {
				sessionStorage.removeItem("token")
				setStore({token: null})
				console.log("You've logged out.")
			},

			getMessage: async () => {
				try{
				
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
				
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				
				const store = getStore();

				
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

			
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;