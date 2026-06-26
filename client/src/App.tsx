import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import PracticePage from "./pages/PracticePage";
import ProfilePage from "./pages/ProfilePage";
import ClassroomPage from "./pages/ClassroomPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
