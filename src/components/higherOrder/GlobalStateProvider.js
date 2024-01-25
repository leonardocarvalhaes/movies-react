import React, { useState } from 'react';
import globalStateContext from './../../contexts/globalStateContext';

const GlobalStateProvider = ({ children }) => {
	const [jwt, setJWT] = useState(null);

	return (
		<globalStateContext.Provider value={{ jwt, setJWT }}>
			{children}
		</globalStateContext.Provider>
	);
};

export default GlobalStateProvider;
