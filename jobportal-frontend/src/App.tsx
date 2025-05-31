import "./App.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FindJobs from "./pages/FindJobs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FindTalent from "./pages/FindTalent";
import TalentProfile from "./pages/TalentProfile";
import PostJobs from "./pages/PostJobs";
import JobDetailPage from "./pages/JobDetailPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import CompanyPage from "./pages/CompanyPage";
import PostedJobPage from "./pages/PostedJobPage";
import JobHistoryPage from "./pages/JobHistoryPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import { Notifications } from "@mantine/notifications";
import { useSelector } from "react-redux";
import { IRootUserState } from "./redux/store";
import { IUser } from "./types";

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamilyMonospace: "monospace, sans-serif",
    primaryColor: "bright-sun",
    primaryShade: 4,
    colors: {
      "bright-sun": [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
    fontFamily: "poppins, sanps-serif",
  });

  const user = useSelector((state: IRootUserState) => state.user) as IUser;

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <Router>
        <div className="relative">
          <Header />
          <Divider size={"xs"} mx={"md"} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/sign-up"
              element={user ? <Navigate to={"/"} /> : <SignUpPage />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to={"/"} /> : <SignUpPage />}
            />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/post-jobs" element={<PostJobs />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="/job/:id" element={<JobDetailPage />} />
            <Route path="/company/:company" element={<CompanyPage />} />
            <Route path="/apply-job/:id" element={<ApplyJobPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/posted-job/:id" element={<PostedJobPage />} />
            <Route path="/talent-profile/:id" element={<TalentProfile />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
