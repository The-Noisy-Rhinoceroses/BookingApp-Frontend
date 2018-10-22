import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const CustomerInfoView = props => {
    const { handleSubmit, handleDate, handleChange, handleExcludeTimes, appointmentInfo, handleExcludeDates, handleMinTime } = props;
    return (
        <div className="customer-info-view">
            <form onSubmit={handleSubmit}>

                <div className="appointment-form-group-container">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={appointmentInfo.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="appointment-form-group-container">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={appointmentInfo.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="appointment-form-group-container">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={appointmentInfo.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="appointment-form-group-container">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={appointmentInfo.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="appointment-form-group-container">
                    <label>Date</label>
                    <DatePicker
                        todayButton="Today"
                        selected={appointmentInfo.appointmentDate}
                        onChange={handleDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        dateFormat="LLL"
                        timeCaption="time"
                        minTime={handleMinTime()}
                        maxTime={moment().hours(18).minutes(0)}
                        minDate={moment()}
                        maxDate={moment().add(15, 'days')}
                        excludeTimes={handleExcludeTimes()}
                        excludeDates={handleExcludeDates()}
                    />
                </div>

                <button className="appointment-button orange-button">Book</button>

            </form>
        </div>
    );
};

export default CustomerInfoView;
