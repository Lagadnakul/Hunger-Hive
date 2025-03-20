import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="flex" style={{ marginTop: '4.5rem' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/add" replace />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<Navigate to="/add" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App