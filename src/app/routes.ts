import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CampaignBackground from "./pages/CampaignBackground";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/campaign-background",
    Component: CampaignBackground,
  },
]);
