import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";

// import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
import Cast from "./Cast/Cast";
import Revievs from "./Revievs/Revievs";
import SharedLayout from "./SharedLayout/SharedLayout";
import Loading from "./Loading/Loading";

const Home = lazy(() => import("pages/Home/Home"))
// import MoviesDetails from "./MoviesDetails/MoviesDetails";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
      <SharedLayout/>
      
      <Suspense fallback={Loading}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revievs" element={<Revievs/>} />
        </Route>
        <Route path="*" element={<p>Что-то пошло не так, попробуйте позже </p>  }/>
      </Routes>
      </Suspense>
    </div>
  );
};



