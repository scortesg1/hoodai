import {proxy} from "valtio"

const state = proxy({
    intro: true,
    color: "#2CAEA6",
    isLogoTexture: true,
    isFullTexture: false, 
    logoDecal: "/icon.png",
    fullDecal: "/threejs.png",
})

export default state