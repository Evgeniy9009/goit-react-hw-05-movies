import Loading from 'components/Loading/Loading'
import Navbar from 'components/Navbar/Navbar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout () {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading/>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}
