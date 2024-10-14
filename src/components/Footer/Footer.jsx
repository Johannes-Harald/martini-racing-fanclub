import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Auto-Fanclub</li>
        <li>Hilfezentrum</li>
        <li>Foren</li>
        <li>Medienzentrum</li>
        <li>Investorenbeziehungen</li>
        <li>Jobs</li>
        <li>Nutzungsbediengungen</li>
        <li>Datenschutz</li>
        <li>Rechtliche Hinweise</li>
        <li>Cookie-Einstellungen</li>
        <li>Unternehmensinformationen</li>
        <li>Kontakt</li>
      </ul>
      <p className='copyright'>© 1968-2023 Martini-Racing.</p>
    </div>
  )
}

export default Footer