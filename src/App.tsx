import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Favorite from './screens/favorite/Favorite';
import Home from './screens/home/Home';
import History from './screens/history/History';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkAuth} from "./store/actions/authActions";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {useState} from "react";


function App() {

    const dispatch = useDispatch()
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(checkAuth())
        setLoading(false)
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(isAuth)

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                <Route element={<PrivateRoute />}>
                    <Route path="/history" element={<History />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
