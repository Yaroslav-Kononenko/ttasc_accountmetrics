import styles from "./App.module.css";

//Pages
import { Home } from "./pages/Home/Home";
import { Courses } from "./pages/Courses/Courses";

//Types
import { NotFountPage } from "./pages/NotFoundPage/NotFoundPage";

//Layouts
import { Layout } from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => { 
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/ttasc_accountmetrics" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NotFountPage />}  />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
