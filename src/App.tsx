import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "./features/admin/AdminPage";
import ItineraryPage from "./features/itinerary/ItineraryPage";
import NowPage from "./features/now/NowPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NowPage />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
