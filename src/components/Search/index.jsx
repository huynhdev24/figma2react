import React from 'react';

const Search = () => {
    return (
        <section className="wrapper container">
            <div className="form-search-layout">
                <form className="form-search">
                    <div className="form-search__input">
                        <svg
                            className="search-icon"
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 19.5126C14.9706 19.5126 19 15.4832 19 10.5126C19 5.54207 14.9706 1.51263 10 1.51263C5.02944 1.51263 1 5.54207 1 10.5126C1 15.4832 5.02944 19.5126 10 19.5126Z"
                                stroke="#999999"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input type="text" placeholder="Nhập vị trí hoặc từ khóa..." />
                    </div>
                    <div className="divide" />
                    <div className="form-search__option">
                        <div className="form-search__option-left">
                            <svg
                                width={18}
                                height={21}
                                viewBox="0 0 18 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.99951 19.5126C7.80104 19.5126 1.5 14.411 1.5 9.07592C1.5 4.89927 4.8571 1.51263 8.99951 1.51263C13.1419 1.51263 16.5 4.89927 16.5 9.07592C16.5 14.411 10.198 19.5126 8.99951 19.5126Z"
                                    stroke="#999999"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Chọn địa điểm</span>
                        </div>
                        <svg
                            width={18}
                            height={10}
                            viewBox="0 0 18 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.92 1.46265L10.4 7.98265C9.62999 8.75265 8.36999 8.75265 7.59999 7.98265L1.07999 1.46265"
                                stroke="#999999"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <button type="button" className="button button-solid">
                        Tìm kiếm
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Search;