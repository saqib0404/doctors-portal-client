import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appoinment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppoinment = () => {
    return (
        <section className='mt-20 md:mt-60'>
            <div className="hero rounded-lg" style={{ backgroundImage: `url(${appoinment})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="lg:w-5/12 -mt-40 hidden md:block rounded-lg shadow-2xl" />
                    <div className='text-white'>
                        <h3 className="text-xl font-bold text-primary mb-4">Appoinment</h3>
                        <h3 className="text-5xl font-bold">Make an appointment Today</h3>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton><Link to='/appointment'>Appoinment</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;