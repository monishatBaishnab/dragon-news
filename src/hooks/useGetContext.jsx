import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";

const useGetContext = () => {
    const contextInfo = useContext(authContext);
    return contextInfo;
};


export default useGetContext;