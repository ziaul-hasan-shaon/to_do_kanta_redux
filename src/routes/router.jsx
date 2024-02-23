import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Task from "../pages/Task";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Task></Task>
            },
            {
                path: '/chat',
                element: <Chat></Chat>
            },
            {
                paht: '/settings',
                element: <Settings></Settings>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;