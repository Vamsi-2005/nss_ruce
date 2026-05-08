import { Routes, Route } from "react-router-dom";

/* =======================
   Layouts
======================= */
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

/* =======================
   Route Guards
======================= */
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

/* =======================
   Public Pages
======================= */
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Events from "../pages/public/Events";
import Gallery from "../pages/public/Gallery";
import BloodFinder from "../pages/public/BloodFinder";
import Contact from "../pages/public/Contact";
import Register from "../pages/public/Register";

/* =======================
   Auth Pages
======================= */
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

/* =======================
   Admin Pages
======================= */
import Dashboard from "../pages/admin/Dashboard";

/* Students */
import Students from "../pages/admin/students/Students";
import AddStudent from "../pages/admin/students/AddStudent";
import EditStudent from "../pages/admin/students/EditStudent";

/* Events */
import AdminEvents from "../pages/admin/events/Events";
import AddEvent from "../pages/admin/events/AddEvent";
import EditEvent from "../pages/admin/events/EditEvent";

/* Gallery */
import AdminGallery from "../pages/admin/gallery/Gallery";
import UploadImage from "../pages/admin/gallery/UploadImage";

/* Donors */
import BloodDonors from "../pages/admin/donors/BloodDonors";
import AddDonor from "../pages/admin/donors/AddDonor";

/* Contact */
import ContactMessages from "../pages/admin/contact/ContactMessages";

/* Settings */
import Settings from "../pages/admin/settings/Settings";
import Profile from "../pages/admin/settings/Profile";
import ChangePassword from "../pages/admin/settings/ChangePassword";

/* =======================
   ROUTES
======================= */
const AppRoutes = () => {
  return (
    <Routes>

      {/* ========= PUBLIC ROUTES ========= */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blood" element={<BloodFinder />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* ========= AUTH ROUTES ========= */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* ========= ADMIN ROUTES ========= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          </ProtectedRoute>
        }
      >
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Students */}
        <Route path="students" element={<Students />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route path="students/edit/:id" element={<EditStudent />} />

        {/* Events */}
        <Route path="events" element={<AdminEvents />} />
        <Route path="events/add" element={<AddEvent />} />
        <Route path="events/edit/:id" element={<EditEvent />} />

        {/* Gallery */}
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="gallery/upload" element={<UploadImage />} />

        {/* Donors */}
        <Route path="donors" element={<BloodDonors />} />
        <Route path="donors/add" element={<AddDonor />} />

        {/* Contact */}
        <Route path="contact" element={<ContactMessages />} />

        {/* Settings */}
        <Route path="settings" element={<Settings />} />
        <Route path="settings/profile" element={<Profile />} />
        <Route path="settings/password" element={<ChangePassword />} />
      </Route>

      {/* ========= 404 PAGE (OPTIONAL) ========= */}
      <Route path="*" element={<h1 className="text-center mt-20 text-xl">Page Not Found</h1>} />

    </Routes>
  );
};

export default AppRoutes;