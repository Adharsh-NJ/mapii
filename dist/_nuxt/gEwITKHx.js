function r(o){return o>1e3?"#800026":o>500?"#BD0026":o>200?"#E31A1C":o>100?"#FC4E2A":o>50?"#FD8D3C":o>20?"#FEB24C":o>10?"#FED976":"#FFEDA0"}function e(o,n){return n[o]?n[o].populationDensity:0}function i(o,n){if(n[o])return{state:o,...n[o]}}const l=()=>new Promise((o,n)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{o({lat:t.coords.latitude,long:t.coords.longitude})},t=>{console.error(t),o({lat:null,long:null})}):(console.error("Geolocation is not supported by this browser."),o({lat:null,long:null}))});export{r as a,e as b,i as c,l as g};
