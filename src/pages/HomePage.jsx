import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src="./assets/beers.png" alt="All Beers" />
        <h2>All Beers</h2>
        <p>She smiled, looking out from the window to the now darkened parking lot. Her smile was huge. It reached all the way up to her eyes, with her teeth as sharply white as the moon itself. The woman</p>
      </Link>

      <Link to="/random-beer">
        <img src="./assets/random-beer.png" alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>She smiled, looking out from the window to the now darkened parking lot. Her smile was huge. It reached all the way up to her eyes, with her teeth as sharply white as the moon itself. The woman</p>
      </Link>

      <Link to="/new-beer">
        <img src="./assets/new-beer.png" alt="New Beer" />
        <h2>New Beer</h2>
        <p>She smiled, looking out from the window to the now darkened parking lot. Her smile was huge. It reached all the way up to her eyes, with her teeth as sharply white as the moon itself. The woman</p>
      </Link>
    </div>
  );
}

export default HomePage;
