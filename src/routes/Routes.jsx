import { Route, Routes } from "react-router-dom";
import Courses from "../pages/courses/Courses";
import Anouncements from "../pages/anouncements/Anouncements/Anouncemets";
import MainLayout from "../pages/MainLayout";
import Schedule from "../pages/schedule/Schedule";
import Notifiactions from "../pages/notifications/Notifiactions";
import Rating from "../pages/courses/rating-page/Rating";
import Material from "../pages/courses/material-det/Material";
import Students from "../pages/courses/students.det/Students";
import MaterialDet from "../pages/courses/material-det/MaterialDet";
import Submitted from "../pages/nav-pages/Submitted";
import Waiting from "../pages/nav-pages/Waiting";
import Late from "../pages/nav-pages/Late";
import StudentsDet from "../pages/courses/students.det/StudentsDet";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="courses" element={<Courses />}>
            <Route path="materials" element={<Material />} />

            <Route path="materials/:id/details" element={<MaterialDet />}>
              <Route path="submitted" element={<Submitted />} />
              <Route path="waiting" element={<Waiting />} />
              <Route path="late" element={<Late />} />
            </Route>

            <Route path="students" element={<Students />} />
            <Route path="students/:id/details" element={<StudentsDet />}/>


            <Route path="rating" element={<Rating />} />
          </Route>
          <Route path="anouncements" element={<Anouncements />} />
          <Route path="notifications" element={<Notifiactions />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
