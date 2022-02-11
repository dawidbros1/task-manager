import React, { createContext, useState } from 'react';

import Request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
	const [data, setData] = useState({});

	const request = new Request();
	// const [user, setUser] = useState(null);

	const [user, setUser] = useState({
		created: "2022-02-08 11:57:56",
		email: "konto@wp.pl",
		id: "1",
		password: "",
		username: "konto"
	});

	const setStateByDataProperty = (property, setState) => {
		if (data.hasOwnProperty(property)) {
			setState(data[property]);
			delete data[property];
		}
	}

	return (
		<StoreContext.Provider value={{
			user, setUser,
			data, setStateByDataProperty, setData,
			request,
		}}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreProvider;