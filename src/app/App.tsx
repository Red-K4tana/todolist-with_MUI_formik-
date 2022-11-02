import React, {useEffect} from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import {useDispatch, useSelector} from 'react-redux'
import { AppRootStateType } from './store'
import {RequestStatusType, } from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { Menu } from '@mui/icons-material';
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import {Login} from "../features/Login/Login";
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import Error404 from "./Error404";
import {InitialAuthStateType, initializeAppTC, loginTC, logoutTC} from "../features/Login/auth-reducer";
import {CircularProgress} from "@mui/material";
import {fetchTodolistsTC} from "../features/TodolistsList/todolists-reducer";

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {

    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isInit = useSelector<AppRootStateType, boolean>((state) => state.app.isInit)
    const isLoggedIn = useSelector<AppRootStateType, InitialAuthStateType>(state => state.auth).isLoggedIn

    useEffect(()=> {
        /*dispatch(loginTC({email: 'ceptor.nill@gmail.com', password: '123456'}))*/
    },[])
    useEffect(()=>{

        /*dispatch(initializeAppTC())*/
    }, [])

    if (!isInit) {
        return <div style={{position: "fixed", top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    const logoutHandler = () => {
        /*dispatch(logoutTC())*/
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolist
                    </Typography>
                    {isLoggedIn && <Button variant={'contained'}
                                           color={'primary'}
                                           onClick={()=>logoutHandler()}>
                        logout
                    </Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path='/' element={<TodolistsList demo={demo}/>}/>
                    <Route path='login' element={<Login />}/>
                    {/*<Route path="*" element={<Navigate to='/404' />}/>*/} {/* " * " означает неправильный URL  */}
                    <Route path="*" element={<Error404 />}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App
