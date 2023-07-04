import React from 'react';

const Partner = () => {
    return (
        <section className="hoptac wrapper">
            <a href="#">Quy trình làm việc</a>
            <h2>Hợp tác cùng RecLand</h2>
            <div className="hoptac__block row">
                <div className="hoptac__block-item item1 column">
                    <div className="hoptac__block-title">
                        <h4>1</h4>
                    </div>
                    <img src="./assets/images/Content/Add.svg" alt="" />
                    <h3>Tạo một tài khoản</h3>
                    <p>Trở thành member trên RecLand</p>
                </div>
                <div className="hoptac__block-item item2 column">
                    <div className="hoptac__block-title">
                        <h4>2</h4>
                    </div>
                    <img src="./assets/images/Content/Search.svg" alt="" />
                    <h3>Tìm kiếm công việc</h3>
                    <p>Tìm kiếm công việc phù hợp để mời ứng viên</p>
                </div>
                <div className="hoptac__block-item column">
                    <div className="hoptac__block-title item3 column">
                        <h4>3</h4>
                    </div>
                    <img src="./assets/images/Content/Shield.svg" alt="" />
                    <h3>Giới thiệu ứng viên</h3>
                    <p>
                        Giới thiệu ứng viên vào các vị trí đang tuyển, process ứng viên và nhận
                        kết quả
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Partner;