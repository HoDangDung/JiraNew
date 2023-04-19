import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import RootLayout from "../components/RootLayout/RootLayout";
import Home from "../modules/Home/Home";
import Login from "../modules/User/Login";
import Assign from "../modules/User/Assign";
import AddProject from "../modules/Project/AddProject";
import UpdateProject from "../modules/Project/UpdateProject";
import CreateTask from "../modules/Task/CreateTask";
import UpdateTask from "../modules/Task/UpdateTask";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            { index: true, element: <Home /> },
            { path: "user/Assign", element: <Assign /> },
            { path: "/createProject", element: <AddProject /> },
            { path: "/updateProject/:id", element: <UpdateProject /> },
            { path: "/createTask", element: <CreateTask /> },
            { path: "/updateTask/:id", element: <UpdateTask /> },
        ]
    },

    // Authentication
    {
        path: "",
        element: <Login />,
        children: [
            { path: "/signin", element: <Login /> },
        ]
    }
])

export default routes;