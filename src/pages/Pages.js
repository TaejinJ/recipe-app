import React from 'react'
import { Home } from './Home'
import { Route, Routes,useLocation } from 'react-router-dom'
import { Cuisine } from './Cuisine'
import { Searched } from './Searched'
import { Recipe } from './Recipe'
import { AnimatePresence } from 'framer-motion'
import { Signup } from '../components/Signup'
export const Pages = () => {
    const location= useLocation();
    return (
        // AnimatePresence를 위한 initial 과 mode 그리고 Routes의 location/key 설정
        <AnimatePresence  initial={false}mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
        </AnimatePresence>
    )
}
