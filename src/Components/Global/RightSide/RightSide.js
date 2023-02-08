import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Queries } from '../../../config/Queries'
import { MenuContext } from '../../../Context/MenuContext'
import { BioSection } from '../../../Pages/BioSection/BioSection'
import { BlogSection } from '../../../Pages/BlogSection/BlogSection'
import { BlogSingle } from '../../../Pages/BlogSingle/BlogSingle'
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
            <Route path='/work' element={<WorksSections/>}/>
            <Route path='/contact' element={<ContactSection/>}/>
            <Route path='/blog' element={<BlogSection/>}/>
            <Route path='/blog/:id' element={<BlogSingle/>}/>
        </Routes>
    </Box>
  )
}
