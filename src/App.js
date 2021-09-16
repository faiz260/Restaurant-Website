import React, { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader";
const RouterConfig = lazy(() => import("./routes"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterConfig />
    </Suspense>
  );
}

export default App;
