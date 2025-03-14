import "../styles/notfound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center notfound">
      <h1 className="text-lg font-bold">Error 404 - Página no encontrada</h1>
      <h2 className="ups font-bold text-xl mt-2">¡UPS!</h2>
      <Link to="/" className="border border-black text-black font-light py-3 px-6 hover:bg-gray-100 transition-all navButton2">
        Back to my portfolio
      </Link>
    </div>
  );
};
