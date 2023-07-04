import React from 'react';

const JobHeader = () => {
    return (
        <div className="job-header wrapper">
            <svg
                width={53}
                height={53}
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.0526123"
                    y="0.0653076"
                    width="52.8947"
                    height="52.8947"
                    rx="26.4474"
                    fill="white"
                />
                <path
                    d="M38.2867 22.6161C38.2867 30.8677 30.6522 35.734 27.2317 36.8977C26.8262 37.0387 26.1738 37.0387 25.7682 36.8977C24.3048 36.404 22.0656 35.2227 20.0027 33.4066C17.2169 30.9558 14.7133 27.3414 14.7133 22.6161C14.7133 18.9664 17.6401 16.0219 21.2546 16.0219C23.4056 16.0219 25.3098 17.0622 26.5088 18.649C27.6901 17.0622 29.5943 16.0219 31.7454 16.0219C32.6798 16.0219 33.5614 16.2159 34.3725 16.5685C36.6822 17.5911 38.2867 19.9008 38.2867 22.6161Z"
                    fill="#FE4C4C"
                />
            </svg>
            <h1>Jobs tốt nhất</h1>
        </div>
    );
};

export default JobHeader;