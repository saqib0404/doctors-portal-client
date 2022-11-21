import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;

    return (
        <div className="card shadow-xl py-6">
            <div className="card-body text-center">
                <h2 className=" text-xl font-semibold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Sorry sir, no slots availabe"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length < 1 && true}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;