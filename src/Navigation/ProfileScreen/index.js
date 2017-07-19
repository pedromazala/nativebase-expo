/**
 * Created by Pedro Mazala on 19/07/2017.
 */

import React from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
  Profile: { screen: Profile },
  EditScreenOne: { screen: EditScreenOne }
}));
