import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import TeacherList from './TeacherList'
import TeacherForm from './TeacherForm'

const Routes = () =>
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
  </BrowserRouter>

export default Routes