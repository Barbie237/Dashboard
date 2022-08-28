import React from "react";
import Auth from "../contextss/Auth";
import {useContext} from "react";
import {Route, Navigate} from "react-router-dom";

const AuthentificatedRoute = ({ path, element}) => {
    const {isAuthenticated} = useContext(Auth);

    return isAuthenticated ? (
        <Route exact path={path} element={element}/>
    ) : (
        <Navigate to="/login"/>
    )
}

export default AuthentificatedRoute