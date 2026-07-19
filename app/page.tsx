// 'use client'
// import Lanyard from '@/components/Lanyard'
// import SoftAurora from '@/components/SoftAurora'
// import { BootStageProvider } from '@/src/some/BootStageProvider'
// import { Terminal } from '@/src/some/Terminal'
// import React, { useState } from 'react'

//  const Home = () => {
//   const [preloader,setPreLoader]=useState<boolean>(true);
//   setTimeout(() => {
//     setPreLoader(false)
//   }, 100);
//   return (

// <>
// {
// preloader ?  <BootStageProvider> <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      
   
//         <main>
  
//           <div className="mx-auto max-w-7xl px-6 pb-32">
        
//           </div>
//         </main>
// <Terminal />
//       </div>
        
//         </BootStageProvider>
//         :
// <div className='overflow-hidden'>
// <div className='absolute z-20  w-full h-full'>
// <Lanyard
//   position={[0,0,14]}
//   gravity={[0,-40,0]}
//   frontImage="/lanyard.png"
//   backImage="/lanyard.png"
//   imageFit="cover"
//   lanyardImage="/lanyard.png"
//   lanyardWidth={1}
  
// /></div>
// <div className='absolute inset-0 h-screen w-full z-10'>
//   <SoftAurora
//   speed={0.6}
//   scale={1}
//   brightness={1}
//   color1="#f7f7f7"
//   color2="#e100ff"
//   noiseFrequency={1.5}
//   noiseAmplitude={0.81}
//   bandHeight={0.5}
//   bandSpread={0.56}
//   octaveDecay={0.1}
//   layerOffset={0}
//   colorSpeed={1}

//   mouseInfluence={0}
// />

// </div>


// </div>
// }
// </>
//   )
// }
// export default Home

'use client'

import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { Terminal } from "@/src/some/Terminal";
import { BootStageProvider } from "@/src/some/BootStageProvider";

export default function HomePage() {

  return (
    <div className="flex min-h-screen bg-[#0b0b0b] text-[#f2f2ee]">

     
       
      <Hero />
  
   

    </div>
  );
}