import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '..'


const LocationIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg xmlns="http://www.w3.org/2000/svg" width="262.869" height="230.407" viewBox="0 0 262.869 230.407">
    <g id="Artwork" transform="translate(0.015 0.009)">
      <path id="Stroke_1" data-name="Stroke 1" d="M207.579,103.79A103.789,103.789,0,1,1,103.789,0,103.791,103.791,0,0,1,207.579,103.79Z" transform="translate(30.452 22.318)" fill="none" stroke="#e9eaec" stroke-miterlimit="10" stroke-width="1" stroke-dasharray="5.017 5.017"/>
      <path id="Stroke_3" data-name="Stroke 3" d="M154.149,77.075A77.075,77.075,0,1,1,77.074,0,77.075,77.075,0,0,1,154.149,77.075Z" transform="translate(57.167 49.033)" fill="none" stroke="#e9eaec" stroke-miterlimit="10" stroke-width="1" stroke-dasharray="5.045 5.045"/>
      <path id="Stroke_5" data-name="Stroke 5" d="M1.927.059,0,0" transform="translate(8.918 140.023)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_7" data-name="Stroke 7" d="M1.382,0,0,1.291" transform="translate(8.08 136.429)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_9" data-name="Stroke 9" d="M.029,0,0,1.884" transform="translate(5.831 134.76)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_11" data-name="Stroke 11" d="M0,0,1.342,1.374" transform="translate(2.148 136.054)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_13" data-name="Stroke 13" d="M0,0,1.926.059" transform="translate(0.5 139.552)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_15" data-name="Stroke 15" d="M0,1.291,1.383,0" transform="translate(1.882 141.915)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_17" data-name="Stroke 17" d="M0,1.884.029,0" transform="translate(5.484 142.991)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_19" data-name="Stroke 19" d="M1.342,1.374,0,0" transform="translate(7.855 142.207)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_21" data-name="Stroke 21" d="M.847,0,0,.917" transform="translate(261.301 113.222)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_23" data-name="Stroke 23" d="M0,0,.639.589" transform="translate(258.171 114.019)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_25" data-name="Stroke 25" d="M0,.917.847,0" transform="translate(257.526 117.166)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_27" data-name="Stroke 27" d="M.638.589,0,0" transform="translate(260.864 116.698)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_29" data-name="Stroke 29" d="M2.049.055,0,0" transform="translate(182.521 5.392)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_31" data-name="Stroke 31" d="M.031,0,0,1.751" transform="translate(179.238 0.5)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_33" data-name="Stroke 33" d="M0,0,2.049.054" transform="translate(173.566 4.954)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Stroke_35" data-name="Stroke 35" d="M0,1.751.031,0" transform="translate(178.868 8.15)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Fill_37" data-name="Fill 37" d="M12.092,9.509c-2.2.673-5.871,3.978-7.126,7.9C4.755,13.765,2.491,9.188,0,8.529,3.039,7.432,6.331,3.4,7.207,0c-.158,3.562,3.008,8.734,4.885,9.509" transform="translate(22.745 185.275)" fill="#ff6c00"/>
      <path id="Fill_39" data-name="Fill 39" d="M5.972,4.925a6.666,6.666,0,0,0-4,3.441C2.073,6.577,1.2,4.212,0,3.746A6.837,6.837,0,0,0,4.076,0c-.281,1.73,1,4.438,1.9,4.925" transform="translate(61.387 9.901)" fill="#ffd428"/>
      <path id="Fill_41" data-name="Fill 41" d="M2.69,5.5A2.749,2.749,0,1,1,5.5,2.809,2.748,2.748,0,0,1,2.69,5.5" transform="translate(215.37 22.319)" fill="#ff8900"/>
      <path id="Fill_43" data-name="Fill 43" d="M2.342,4.787A2.394,2.394,0,1,1,4.787,2.446,2.394,2.394,0,0,1,2.342,4.787" transform="translate(215.725 203.183)" fill="#ebecef"/>
      <path id="Stroke_45" data-name="Stroke 45" d="M1.449,2.963a1.482,1.482,0,1,1,1.514-1.45A1.481,1.481,0,0,1,1.449,2.963Z" transform="translate(17.873 61.34)" fill="none" stroke="#d2d8df" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Fill_47" data-name="Fill 47" d="M19.066,9.534A9.533,9.533,0,1,1,9.533,0a9.534,9.534,0,0,1,9.533,9.534" transform="translate(159.833 49.033)" fill="#fff"/>
      <path id="Fill_49" data-name="Fill 49" d="M14.244,123.752.042,36.086A3.232,3.232,0,0,1,1.55,32.808l37.511-22.9a3.237,3.237,0,0,1,2.462-.38L87.794,20.975a3.238,3.238,0,0,0,2.534-.425L121.282.521a3.234,3.234,0,0,1,4.864,1.816L152.19,92.259a3.238,3.238,0,0,1-1.222,3.53l-28.5,20.423a3.238,3.238,0,0,1-2.669.509L65.6,103.17a3.238,3.238,0,0,0-2.255.257L18.909,126.116a3.236,3.236,0,0,1-4.665-2.364" transform="translate(59.154 60.803)" fill="#f1f2f7"/>
      <path id="Fill_51" data-name="Fill 51" d="M17.226,45.357a.9.9,0,0,1-.589-.219,62.423,62.423,0,0,1-8.569-8.875,44.861,44.861,0,0,1-5.561-8.849A24.749,24.749,0,0,1,0,17.077c0-.269,0-.534,0-.79A16.76,16.76,0,0,1,16.75,0c.161,0,.324,0,.485.007S17.548,0,17.707,0l.318,0A16.76,16.76,0,0,1,34.468,17.077a23.1,23.1,0,0,1-2.5,9.729A50.233,50.233,0,0,1,26.407,35.7a75.658,75.658,0,0,1-8.591,9.439A.908.908,0,0,1,17.226,45.357Zm.009-36.281A8.163,8.163,0,1,0,25.4,17.24,8.172,8.172,0,0,0,17.235,9.077Z" transform="translate(152.249 40.581)" fill="#4624bd"/>
      <path id="Stroke_53" data-name="Stroke 53" d="M0,59.054l27.628,7.208a3.238,3.238,0,0,0,3.486-4.972C21.577,47.5,3.727,18.913,20.522,20.113,42.624,21.692,38.414,41.652,43.15,44.3S76.3,41.033,77.355,30.574s-2.63-15.723-10-18.88S63.688,0,63.688,0" transform="translate(105.198 85.72)" fill="none" stroke="#0e1d25" stroke-miterlimit="10" stroke-width="2" stroke-dasharray="7"/>
      <path id="Fill_55" data-name="Fill 55" d="M2.009,27.968.118,20.615a3.723,3.723,0,0,1,1.759-4.16L24.923,3.286a3.741,3.741,0,0,1,.567-.264L33.129.227A3.724,3.724,0,0,1,35.2.084L51.958,3.711a3.723,3.723,0,0,1-1.124,7.347l-7.374-.67a3.723,3.723,0,0,0-4.034,4.151L40.1,20.2a3.723,3.723,0,0,1-2.419,3.941L22.192,29.8a3.727,3.727,0,0,1-3.285-.362l-4.249-2.718A3.723,3.723,0,0,0,9.51,27.855L8.756,29.04a3.724,3.724,0,0,1-6.747-1.072" transform="translate(67.857 80.562)" fill="#d8dbea"/>
      <path id="Fill_57" data-name="Fill 57" d="M.1,10.317,5.388,32.99a3.724,3.724,0,0,0,5.839,2.148L28.84,22.119a3.72,3.72,0,0,0,1.383-3.959L26.091,2.76a3.722,3.722,0,0,0-4.685-2.6L2.634,5.911A3.723,3.723,0,0,0,.1,10.317" transform="translate(171.627 131.49)" fill="#d8dbea"/>
      <path id="Fill_59" data-name="Fill 59" d="M3.965.008,16.046.782A3.724,3.724,0,0,1,19.4,3.5l2.348,8.482A3.722,3.722,0,0,1,17.3,16.6L5.34,13.771a3.723,3.723,0,0,1-2.617-2.286L.252,5.06A3.724,3.724,0,0,1,3.965.008" transform="translate(146.028 149.308)" fill="#d8dbea"/>
      <path id="Fill_61" data-name="Fill 61" d="M18.65,49.1a.981.981,0,0,1-.638-.236A66.569,66.569,0,0,1,8.735,39.26a48.57,48.57,0,0,1-6.02-9.58A26.792,26.792,0,0,1,0,18.488c0-.3,0-.582,0-.855A18.145,18.145,0,0,1,18.137,0c.174,0,.35,0,.523.007s.331-.007.5-.007c.117,0,.237,0,.355,0a18.13,18.13,0,0,1,17.8,18.484,25.005,25.005,0,0,1-2.709,10.533,54.376,54.376,0,0,1-6.017,9.629,81.554,81.554,0,0,1-9.3,10.219A.981.981,0,0,1,18.65,49.1Zm.01-39.278A8.838,8.838,0,1,0,27.5,18.664,8.848,8.848,0,0,0,18.66,9.826Z" transform="translate(75.42 116.294)" fill="#ff8900"/>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default LocationIcon