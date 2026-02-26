import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/HomePage/Home';
import Programs from '../pages/ProgramsPage/Programs';
import Review from '../pages/ReviewPage/Review';
import SignIn from '../pages/SignInPage/SignIn';
import Register from '../pages/RegisterPage/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'programs',
        element: <Programs />
      },
      {
        path: 'program/:programId',
        // element: <ProgramDetails />
      },
      {
        path: 'reviews',
        element: <Review />
      }
    ]
  },
  // Auth routes without navbar
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

export default router;