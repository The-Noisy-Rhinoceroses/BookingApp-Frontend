import React from 'react';

const ServicesView = props => {
  const { services, handleSubmit, handleNextIndex } = props;
  return (
    <div className="services-view">
      {services.map(service => (
        <div key={service._id} >
          <input onChange={props.handleChange} type="checkbox" name={service.serviceName} value={JSON.stringify(service)} defaultChecked={false} />
          <label>{service.serviceName}</label>
          <p>Duration: {service.duration} minutes</p>
          <p>Description: {service.description}</p>
          <p>Price: ${service.price}.00</p>
        </div>
      ))}
      <button onClick={handleSubmit && handleNextIndex}>Confirm Service</button>
    </div>
  );
};

export default ServicesView;
