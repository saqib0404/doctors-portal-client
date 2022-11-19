import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl mt-2 mb-4'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length < 1 ? <Loader></Loader> :
                            bookings.map((booking, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{booking.Patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;