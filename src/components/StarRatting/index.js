import React, { Component } from "react";
import { TouchableOpacity, Animated } from "react-native";
import { StartIconFill } from "./starIconFill";
import { StartIcon } from "./starIcon";
import { colors } from "../../appResources";

const Stars =(props)=> {
  const {size=32,rate=1,colorActive}= props
  const setRatting = () => {
    const actColor=colorActive?colors[colorActive]:'#fff'
    let str = [];
    
    for (var i = 1; i <= 5; i++) {
      if (rate < i) str.push(<StartIcon  size={size} color={actColor} />);
      else str.push(<StartIconFill  size={size} color={actColor} />);
    }
    return str;
  };
 
    const { desable = false ,onPress} =  props;
    const starData = setRatting() || [];
    return (
      <Animated.View style={{ flexDirection: "row"}}>
        {starData.map((t, idx) => (
          <TouchableOpacity
           key={idx.toString()}
            disabled={desable||!props.setRate}
            onPress={() => this.props.setRate(idx + 1)}
          >
            {t}
          </TouchableOpacity>
        ))}
      </Animated.View>
    );
 
}
export default Stars;
 
