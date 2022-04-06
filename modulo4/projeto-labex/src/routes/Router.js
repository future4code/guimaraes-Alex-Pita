import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import HomePage  from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage/>}/>
          <Route exact path='/admin/trips/list' element={<AdminHomePage/>}/>
          <Route exact path='/trips/application' element={<ApplicationFormPage/>}/>
          <Route exact path='/admin/trips/create' element={<CreateTripPage/>}/>
          <Route exact path='/trips/list' element={<ListTripsPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/admin/trips/:id' element={<TripDetailsPage/>}/>
          <Route exact path='*' element={<ErrorPage/>}/>
       </Routes>
    </BrowserRouter>
    )
}

export default Router