// As we use screen , height, width etc in entire application.
// so we creted constants.js file for that

import { Dimensions } from "react-native";


export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;