import { createContext } from "react";

const DarkModeContext = createContext({mode: 'light', toggleMode: () => {} });

export default DarkModeContext;