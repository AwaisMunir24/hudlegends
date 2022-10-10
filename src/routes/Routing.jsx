import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, PreSeed } from "../pages/Page";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pre-seed" element={<PreSeed />} />
        <Route
          path="pitch-deck"
          element={<h1 className="dummy--ttile">pitch deck Page</h1>}
        />
        <Route
          path="introduction"
          element={<h1 className="dummy--ttile">Introduction Page</h1>}
        />
      </Routes>
    </>
  );
};

export default Routing