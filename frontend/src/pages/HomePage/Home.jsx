import './Home.css'
import { Link } from 'react-router-dom'; // link ko navbar mai import karke links udhar dalnaa

function Home() {
    return (
        <>
            <div>
                <h1>Home Page</h1>
                <Link to="/about">Go to About</Link> <br />
                <Link to="/reviews">Go to reviews page</Link>
            </div>
        </>
    )
}

export default Home;