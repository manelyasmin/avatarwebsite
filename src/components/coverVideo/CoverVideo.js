import React from 'react'
import {VideoContainer} from "./VideoContainer.element";
import GIF from "/home/manel/reactProject/nftprj/src/assets/Nfts/bighead-1.png";
const CoverVideo = () => {
  return (
    <VideoContainer>
    <img src={GIF} alt="" /* autoPlay muted loop *//>
    </VideoContainer>
  )
}

export default CoverVideo