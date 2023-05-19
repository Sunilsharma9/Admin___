import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className='foot'>
            <div className="footer">
                <div className="term">
                    <p>@2021 Cryptico</p>
                    <Link to="/">Terms</Link>
                    <Link to="/">Privacy</Link>

                    
                </div>

                <div className="icon">
                        <FacebookIcon className='face'/>
                        <TwitterIcon  className='face '/>
                        <InstagramIcon className='face'/>

                </div>

            </div>

    </div>
  )
}

export default Footer