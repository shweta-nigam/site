import { Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="*" element={<div className="text-white text-center py-20">404 - Page Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;
