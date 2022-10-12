import { Routes, Route } from "react-router-dom"
import { lazy } from "react";

// import Home from "pages/Home/Home";
// import Movies from "pages/Movies/Movies";
// import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
import Cast from "./Cast/Cast";
import Revievs from "./Revievs/Revievs";
import SharedLayout from "./SharedLayout/SharedLayout";


const Home = lazy(() => import("pages/Home/Home"))
const Movies = lazy(() => import("pages/Movies/Movies"))
const MoviesDetails = lazy(() => import("pages/MoviesDetails/MoviesDetails"))


export const App = () => {
  return (
    <div
      style={{
        margin:20
      }}
    >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home/>} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="revievs" element={<Revievs/>} />
            </Route>
            <Route path="*" element={<p>Что-то пошло не так, попробуйте позже </p>  }/>
          </Route>
        </Routes>
    </div>
  );
};



