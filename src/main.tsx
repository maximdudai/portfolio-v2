import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react'

import './index.css'

import LandingPage from './App'
import Archive from './pages/archive'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<LandingPage />} />
        <Route path="/experience" element={<LandingPage />} />
        <Route path="/abilities" element={<LandingPage />} />
        <Route path="/projects" element={<LandingPage />} />
        <Route path="/certificates" element={<LandingPage />} />
        <Route path="/education" element={<LandingPage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
)
