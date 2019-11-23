import { createStackNavigator } from "react-navigation-stack";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
