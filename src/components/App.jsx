
import { Routes, Route } from "react-router-dom";
// import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Routes>
        <Route  path='/' element={<p>fhjfjhjgjgj</p>} />
      </Routes>
      React homework template
    </div>
  );
};
