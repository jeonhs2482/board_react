import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import List from "./pages/List";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blogs",
    component: List,
  },
  {
    path: "/blogs/create",
    component: Create,
  },
  {
    path: "/blogs/edit",
    component: Edit,
  },
];
export default routes;
