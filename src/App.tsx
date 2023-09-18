import styles from "./App.module.css";
import { BASE_URL } from "./api/methods";

//Pages
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";

//Types
import { NotFountPage } from "./pages/NotFoundPage/NotFoundPage";

//Layouts
import { Layout } from "./layouts/Layout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/ttasc_accountmetrics" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NotFountPage />}  />
        </Route>
      </Routes>
      {pathname === BASE_URL && (<Navigate to={`${BASE_URL}/home`} replace={true} />) }
    </div>
  );
}

export default App;
