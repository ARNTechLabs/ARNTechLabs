import App from "../App";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Review from "../pages/ReviewPage/Review";
import Programs from "../pages/ProgramsPage/Programs";

import { createBrowserRouter } from "react-router-dom";

const my_router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/reviews',
                    element: <Review />
                },
                {
                    path: '/programs',
                    element: <Programs />
                }
            ]
        }
    ]
)


export default my_router;