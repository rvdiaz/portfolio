import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Queries } from '../../../config/Queries'
import { BioSection } from '../../../Pages/BioSection/BioSection'
import { ContactSection } from '../../../Pages/ContactSection/ContactSection'
import { HomeSection } from '../../../Pages/HomeSection/HomeSection'
import { ServiceSection } from '../../../Pages/ServiceSection.js/ServiceSection'
import { WorksSections } from '../../../Pages/WorksSection/WorksSections'

export const RightSide = () => {
  const {mediaQueries}=Queries();
  const {isDesktop}= mediaQueries;
  return (
    <Box
      sx={{
        height:isDesktop ? '100%' : 'auto'
      }}
    >
        <Routes>
            <Route path='*' element={<HomeSection/>}/>
            <Route path='/biography' element={<BioSection/>}/>
            <Route path='/service' element={<ServiceSection/>}/>
            <Route path='/works' element={<WorksSections/>}/>
            <Route path='/contact' element={<ContactSection/>}/>
        </Routes>
    </Box>
  )
}
