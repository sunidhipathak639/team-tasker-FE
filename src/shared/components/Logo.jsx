import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 28,
};

const Logo = ({ className, size }) => (
  <span className={className}>
   <svg width={size} height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.9745 35.0354C58.9745 35.9124 58.9352 36.7815 58.8606 37.6388C57.7496 38.1343 56.5208 38.4056 55.2292 38.4056H42.3013C44.4252 41.1506 45.6893 44.5994 45.6893 48.3393C45.6893 57.3017 38.4343 64.573 29.4833 64.573C13.1988 64.573 0 51.3478 0 35.0354C0 19.8596 11.4204 7.3618 26.1228 5.69045C27.2259 5.56461 28.3487 5.49775 29.4872 5.49775C45.7718 5.49775 58.9745 18.7191 58.9745 35.0354Z" fill="url(#paint0_linear_0_1)"/>
<path d="M63.6665 29.864C63.6665 32.3455 62.6614 34.591 61.04 36.2152C59.9683 37.2888 58.6296 38.0949 57.1259 38.5157C40.123 36.2112 26.8457 22.1719 25.6758 4.80562C26.139 2.17472 28.4278 0.176966 31.1877 0.176966H34.03C50.397 0.176966 63.6665 13.4691 63.6665 29.864Z" fill="#5D33F6"/>
<path d="M49.9408 21.5545C54.1949 21.5545 57.6434 18.1 57.6434 13.8388C57.6434 9.57748 54.1949 6.12303 49.9408 6.12303C45.6868 6.12303 42.2383 9.57748 42.2383 13.8388C42.2383 18.1 45.6868 21.5545 49.9408 21.5545Z" fill="white"/>
<path d="M52.1556 14.1927C53.3785 14.1927 54.3698 13.1997 54.3698 11.9747C54.3698 10.7498 53.3785 9.75674 52.1556 9.75674C50.9327 9.75674 49.9414 10.7498 49.9414 11.9747C49.9414 13.1997 50.9327 14.1927 52.1556 14.1927Z" fill="#050659"/>
<path d="M29.4873 64.573C38.4376 64.573 45.6933 57.305 45.6933 48.3393C45.6933 39.3737 38.4376 32.1056 29.4873 32.1056C20.5369 32.1056 13.2812 39.3737 13.2812 48.3393C13.2812 57.305 20.5369 64.573 29.4873 64.573Z" fill="url(#paint1_linear_0_1)"/>
<path d="M29.4866 53.4831C32.3226 53.4831 34.6216 51.1802 34.6216 48.3393C34.6216 45.4985 32.3226 43.1955 29.4866 43.1955C26.6506 43.1955 24.3516 45.4985 24.3516 48.3393C24.3516 51.1802 26.6506 53.4831 29.4866 53.4831Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="50.844" y1="15.573" x2="-15.4841" y2="69.7867" gradientUnits="userSpaceOnUse">
<stop stop-color="#5D33F6"/>
<stop offset="0.17" stop-color="#562BE4"/>
<stop offset="0.52" stop-color="#4519B7"/>
<stop offset="0.94" stop-color="#2E0079"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="45.6893" y1="48.0837" x2="13.2851" y2="48.5971" gradientUnits="userSpaceOnUse">
<stop stop-color="#905DF6"/>
<stop offset="0.08" stop-color="#8150F4"/>
<stop offset="0.23" stop-color="#6E3FF2"/>
<stop offset="0.4" stop-color="#6033F1"/>
<stop offset="0.62" stop-color="#582DF0"/>
<stop offset="1" stop-color="#562BF0"/>
</linearGradient>
</defs>
</svg>

  </span>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
