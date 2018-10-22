import React from 'react';
import { CustomerInfoView } from '../../../../../views/modules/Main'


const CustomerInfoContainer = props => {
    const { handleSubmit, handleDate, handleChange, handleExcludeTimes, appointmentInfo, handleExcludeDates, handleMinTime } = props;
    return (
        <CustomerInfoView
            handleSumbit={handleSubmit}
            handleDate={handleDate}
            handleChange={handleChange}
            handleExcludeTimes={handleExcludeTimes}
            appointmentInfo={appointmentInfo}
            handleExcludeDates={handleExcludeDates}
            handleMinTime={handleMinTime}
        />
    );
};

export default CustomerInfoContainer;
