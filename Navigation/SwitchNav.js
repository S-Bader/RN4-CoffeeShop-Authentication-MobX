import { createSwitchNavigator } from "react-navigation";

import StackNav from "./StackNav";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const SwitchNav = createSwitchNavigator({
  StackNav: StackNav,
  Login: Login,
  Signup: Signup
});

export default SwitchNav;
