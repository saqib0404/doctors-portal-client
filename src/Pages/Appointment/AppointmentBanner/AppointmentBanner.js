import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse md:my-16">
                    <img src={chair} alt='' className="rounded-lg shadow-2xl md:ml-24 md:w-1/2" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;