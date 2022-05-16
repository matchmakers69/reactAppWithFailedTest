import { lazy, FC } from "react";
import constants from "../../constants";

const Dashboard = lazy(() => import("pages/Dashboard"));
const MemberContactDetails = lazy(() => import("pages/MemberContactDetails"));
const Profile = lazy(() => import("pages/Profile"));

export type IRoute = {
  path: string;
  name: string;
  component: FC;
};

const protectedRoutes: IRoute[] = [
  {
    path: constants.routes.PROFILE,
    name: "Profile",
    component: Profile,
  },
  {
    path: constants.routes.DASHBOARD,
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: constants.routes.CONTACT_DETAILS,
    name: "MemberContactDetails",
    component: MemberContactDetails,
  },
];

export { protectedRoutes };
