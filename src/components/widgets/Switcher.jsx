import React, { Component } from 'react';

// Widget component;
// Component takes items (array of objects), activeItem (object) and setItem (function);
class Switcher extends Component {

    render() {
        const { items, setItem, activeItem, openModal } = this.props;
        const currentItem = activeItem.firstName ? activeItem : items[0];

        return (
            <div className="switcher-component">
                <div className="switcher-menu flex-row bottom-grey">
                    {items.map(item => {
                        return (
                            <div key={`${item.firstName}-${item.lastName}`} className={`switcher-link flex-row switcher-link-title switcher-${item.firstName}-${item.lastName}`} onClick={() => setItem(item._id)}>
                                <div>{`${item.firstName} ${item.lastName}`}</div>
                            </div>
                        )
                    })}
                </div>
                
                {/* TODO: Set a default barber, as it is, form can be submitted without a current barber! */}
                { currentItem &&
                    <div className="switcher-content flex-column flex-center large-padding">
                        <div className="item-info flex-column flex-center narrow-content">
                            <div className="header-title small-padding-medium">{currentItem.firstName} {currentItem.lastName}</div>
                            <div className="item-description header-subtitle mini-padding">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada orci ex, sit amet facilisis mauris luctus et. Mauris cursus ornare tristique. Proin id mi sit amet mi faucibus faucibus non quis neque. Duis sed ante eu odio ornare elementum. Pellentesque et sem sodales, sollicitudin sem sed, suscipit felis. Aenean et lacus nulla. Nullam elementum porttitor lobortis.
                            </div>
                            <div className="item-image-container text-center small-padding text-center small-padding text-center small-padding">
                                <img className="item-image element-center" src={currentItem.imgUrl} alt={`${currentItem.firstName} ${currentItem.lastName}`} />
                            </div>
                            <div className="item-book orange-button text-center" onClick={() => openModal()}>Book an Appointment</div>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Switcher;
