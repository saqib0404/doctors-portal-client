import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const navigate = useNavigate();

    const handleBooking = e => {
        if (!user.uid) {
            e.preventDefault();
            // return navigate('/login')
            return toast("Please login before placingan appointment")
        } else {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const slot = form.slot.value;

            const booking = {
                appointmentDate: date,
                treatment: treatment.name,
                Patient: name,
                email,
                phone,
                slot,
            }

            fetch('http://localhost:5000/bookings', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setTreatment(null)
                        toast.success('Booking Confirmed');
                        refetch();
                    } else {
                        toast.error(data.message);
                    }
                })
        }


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={date} placeholder="Type here" className="input input-bordered w-full mt-10 mb-2" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" value={user?.displayName} disabled className="input input-bordered w-full my-2" required />
                        <input name='email' type="email" value={user?.email} disabled className="input input-bordered w-full my-2" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full mt-4' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;