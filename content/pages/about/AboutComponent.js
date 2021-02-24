/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React from 'react'
import './styles.css'
import avatar from './me.webp'

function AboutComponent() {
  return (
    <div className="avatar">
      <img
          className="avatar-image"
        alt="Avatar"
        src={avatar}
      />
    </div>
  )
}

export default AboutComponent
