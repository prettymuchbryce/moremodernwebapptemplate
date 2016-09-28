import React from 'react'
import { Router, Route } from 'react-router'
import ComponentMain from '../components/main'

export default function (history) {
  return (
    <Router history={history}>
      <Route path='/' component={ComponentMain} />
    </Router>
  )
};
