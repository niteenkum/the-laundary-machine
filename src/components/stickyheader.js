import React,{useState,useEffect} from 'react'
import {View,Animated,SafeAreaView,StyleSheet,Text} from 'react-native'
import { colors, scales } from '../appResources'


const StickyHeader=(props)=>{
    const [scrollY,setScrolly]=useState(new Animated.Value(0))
    const  headerHeight =  props.headerHeight?props.headerHeight: 150   
    const [loader,setLoader]=useState(false)

    useEffect(()=>{
      if(loader)
       setLoader(props.loading)
    },[props,props.loading])
  const  _onScroll=(e) =>{
       const { contentSize, contentOffset, layoutMeasurement } = e.nativeEvent;
        let ht = contentOffset.y + layoutMeasurement.height;
       if (contentSize.height <= ht + 2 && !loader )
       setLoader(true)
         props.onScrollToEndPont?props.onScrollToEndPont():null
      }

    const renderListHeader =()=>{
        return ( <Animated.View
               style={[
                 styles.headerContainer,
                 props.headerStyle,
                 {
                   width: "100%",
                   height: scrollY.interpolate({
                     inputRange: [0,  headerHeight],
                     outputRange: [headerHeight, 0],
                     extrapolate: "clamp"
                   })
                 }
               ]}
             >
             <Animated.View
                 style={{
                   height: headerHeight,
                   width: "100%",
                  }}
               >
              {props.renderHeader?props.renderHeader:null}
              </Animated.View>
             </Animated.View>)
       }

const renderScrollView=()=>{
   return(
   <Animated.View style={[styles.innerScrollContainer ,props.bodyStyle]}>
     <Animated.ScrollView
         refreshControl={props.refreshControl}
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y:  scrollY } } }],
            { listener: _onScroll }
          )}
        >
          <View style={{flex:1,paddingTop:headerHeight}}>
        {props.children}
        </View>
       </Animated.ScrollView>
        </Animated.View>
        )
}



    return (
      <SafeAreaView style={[styles.container,props.style]}>
        { renderListHeader()}
        { renderScrollView()}
        </SafeAreaView>)
}
export default StickyHeader

const styles =StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "transparent",
        flex:1,
      },
       
      innerScrollContainer: {
        position: "relative",
  
        flex:1,
      },
      innerContainerText: { color: "black" },
      testingText: { color: "black" },
      headerContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
     
       
      },
 
    
})