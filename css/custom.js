import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "boxSizing": "border-box"
    },
    "body": {
        "fontFamily": "system-ui"
    },
    "top": {
        "background": "linear-gradient( #40b7ed, #3ebfed)"
    }
});