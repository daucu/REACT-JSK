import React from 'react'
// import Pagination from 'react-bootstrap/Pagination';

import Footer from './Footer'
import Navbar from './Navbar'
import DatatablePage from './DatatablePage ';

const Other_services = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-[80px]'>
                <div className='p-[20px]'>
              <DatatablePage/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Other_services