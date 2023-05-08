import React from 'react'
import { MainTitle } from '../../ui/title/MainTitle'
import { RouteButton } from '../../ui/buttons/RouteButton'

export const Tests = () => {
  return (
    <div>
      <MainTitle name="Some tests" />
      <RouteButton path="/" name="Back" />
    </div>
  )
}
