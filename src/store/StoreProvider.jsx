import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
	const [data, setData] = useState({});
	const [user, setUser] = useState(null);

	// const [user, setUser] = useState({
	// 	created: "2022-02-08 11:57:56",
	// 	email: "nowekonto25@wp.pl",
	// 	id: "13",
	// 	password: "",
	// 	username: "nowekonto25"
	// });

	const setStateByDataProperty = (property, setState) => {
		if (data.hasOwnProperty(property)) {
			setState(data[property]);
			delete data[property];
		}
	}

	return (
		<StoreContext.Provider value={{
			user, setUser,
			data, setStateByDataProperty, setData
		}}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreProvider;