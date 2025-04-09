import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/place/61+Agoncillo,+Novaliches,+Quezon+City,+1123+Metro+Manila/@14.7247289,121.040301,15z/data=!4m6!3m5!1s0x3397b0f8c14dc32f:0x894180fba63e99fd!8m2!3d14.7247289!4d121.040301!16s%2Fg%2F11c5bxmxrq"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;