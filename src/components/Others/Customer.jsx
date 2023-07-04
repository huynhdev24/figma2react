import React from 'react';

const Customer = () => {
    return (
        <section className="doitac wrapper">
            <h2>Đối Tác</h2>
            <div className="doitac__block row">
                <div className="doitac__block-img">
                    <img src="./assets/images/Content/doitac1.png" alt="" />
                </div>
                <div className="doitac__block-img">
                    <img src="./assets/images/Content/doitac2.png" alt="" />
                </div>
                <div className="doitac__block-img">
                    <img src="./assets/images/Content/doitac3.png" alt="" />
                </div>
                <div className="doitac__block-img">
                    <img src="./assets/images/Content/doitac4.png" alt="" />
                </div>
                <div className="doitac__block-img">
                    <img src="./assets/images/Content/doitac5.png" alt="" />
                </div>
            </div>
            <div className="doitac__block-pages row">
                <div className="doitac__block-pages-item" />
                <div className="doitac__block-pages-item" />
                <div className="doitac__block-pages-item pages-active" />
                <div className="doitac__block-pages-item" />
            </div>
        </section>
    );
};

export default Customer;