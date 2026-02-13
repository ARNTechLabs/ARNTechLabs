import App from "../App";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Review from "../pages/ReviewPage/Review";

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
                }
            ]
        }
    ]
)


export default my_router;