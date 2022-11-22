import { Grid } from '@mui/material'
import React from 'react'
import logo from '../images/Treflo_Logo_DB@2x.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <div className='p-5 text-white mt-10'>
            <Grid container>
                <Grid xs={12} md={3} lg={3} className="text-center">
                    <div className='flex justify-center'> 
                    <img src={logo} alt="loading.." width={100} />
                    </div>
                    <h1>Copyright © 2021 <br />Ardour Labs Private Limited</h1>
                </Grid>
                <Grid xs={12} md={3} lg={3} className="text-center">
                    <h1 className='text-2xl pb-5'>Useful Links</h1>
                    <h1>Free GST Invoicing App</h1>
                    <h1>E-way Bill Generator App</h1>
                    <h1>B2B Marketplace</h1>
                    <h1>Treflo Discovery App</h1>
                </Grid>
                <Grid xs={12} md={3} lg={3} className="text-center">
                <h1 className='text-2xl pb-5'>Company</h1>
                    <h1>About Us</h1>
                    <h1>Careers</h1>
                    <h1>Contact Us</h1>
                </Grid>
                <Grid xs={12} md={3} lg={3} className="text-center">
                <h1 className='text-2xl pb-5'>Follow Us</h1>
                <div className='flex justify-center'>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                </div>
                   
                </Grid>
            </Grid>
        </div>
    )
}
