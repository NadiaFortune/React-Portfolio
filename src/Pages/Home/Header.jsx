import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderSection () {
    return  (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-auto'>
                    <img src='/Nadia2.png' alt='Nadia Fortune Image' className='img-fluid custom-image' />
                </div>
                <div className='col'>
                    <h1>Hey, I'm Nadia</h1>
                    <p className='text-pink font-bold ml-5'>A Front-End Developer & Web Designer<br/ ></p>
                    <p className='margin-left font-lg'>Bringing Your Website to Life</p>
                </div>
            </div>
        </div>
    );
};


