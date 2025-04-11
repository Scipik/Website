import { Link } from "react-router";

export function Home() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <h1 className="text-5xl font-bold my-4 leading-tight">Home Page</h1>
      <Link to="cocktail-search">Cocktail Search Link</Link>
    </div>
  );
}

export default Home;
