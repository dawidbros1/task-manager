import React, { createContext, useState } from 'react';

import Request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
	const [data, setData] = useState({ areProjectsLoaded: false });
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const request = new Request();

	const taskStatuses = [
		{ status: 0, name: "Nowe zadania" },
		{ status: 1, name: "W trakcie wykonywania" },
		{ status: 2, name: "W trakcie testowania" },
		{ status: 3, name: "Zakończone" }
	]

	const [user, setUser] = useState(null);
	// const [user, setUser] = useState({
	// 	id: "1",
	// 	username: "dawidbros1",
	// 	email: "dawidbros1@wp.pl",
	// 	sideKey: "cda4f72f0e5d2fe0b15112fbb1f1ff0fd539828468325ea1a3ded477b966e00e",
	// 	secretKey: "fc687939c01e324fab0d2e6867e912a07bfa7dc835005a2893fabba0407e7a48",
	// 	created: "2022-02-08 11:57:56"
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
			projects, setProjects,
			tasks, setTasks,
			data, setStateByDataProperty, setData,
			request, taskStatuses,
		}}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreProvider;