import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
