import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            
            <AvailableAppoinments
                selectedDate={selectedDate}
            ></AvailableAppoinments>
        </div>
    );
};

export default Appointment;