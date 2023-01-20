import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MenuContext } from '../../../Context/MenuContext'
import { BioSection } from '../../../Pages/BioSection/BioSection'
import { BlogSection } from '../../../Pages/BlogSection/BlogSection'
import { ContactSection } from '../../../Pages/ConctactSection/ContactSection'
import { ServiceSection } from '../../../Pages/ServiceSection.js/ServiceSection'
import { WorksSections } from '../../../Pages/WorksSection/WorksSections'

export const RightSide = () => {
  return (
    <Box
    >
        <Routes>
            <Route path='*' element={<BioSection/>}/>
            <Route path='/service' element={<ServiceSection/>}/>
            <Route path='/work' element={<WorksSections/>}/>
            <Route path='/contact' element={<ContactSection/>}/>
            <Route path='/blog' element={<BlogSection/>}/>
        </Routes>
    </Box>
  )
}
