import React from 'react';

const BannerContent = () => {
    return (
        <section className="banner__content wrapper">
            <div className="banner__content-title">
                <a href="#">Why?</a>
                <h2>Tại Sao Lựa Chọn Recland?</h2>
            </div>
            <div className="banner__content-list row">
                <div className="banner__content-item1">
                    <div className="banner__content-item__img">
                        <img src="./assets/images/Content/svg/Search.svg" alt="" />
                    </div>
                    <div className="banner__content-item1-wrapper column">
                        <h3>Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn</h3>
                        <p>
                            Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các bạn
                            tìm kiếm, sale jobs đến những ứng viên phù hợp.
                        </p>
                    </div>
                </div>
                <div className="banner__content-item2">
                    <div className="banner__content-item__img">
                        <img src="./assets/images/Content/svg/Dollar.svg" alt="" />
                    </div>
                    <div className="banner__content-item2-wrapper column">
                        <h3>
                            Cơ chế hoa hồng hấp dẫn, rõ ràng <br />
                            và minh bạch
                        </h3>
                        <p>
                            RecLand đem đến cho các bạn REC mức hoa hồng hấp dẫn, giúp cho các bạn
                            REC có được mức thu nhập tương xứng mà không cần đến công ty làm việc
                        </p>
                    </div>
                </div>
                <div className="banner__content-item3">
                    <div className="banner__content-item__img">
                        <img src="./assets/images/Content/svg/Network.svg" alt="" />
                    </div>
                    <div className="banner__content-item3-wrapper column">
                        <h3>
                            Mở rộng network và học hỏi từ <br />
                            cộng đồng
                        </h3>
                        <p>
                            RecLand cũng thường xuyên tổ chức những buổi chia sẻ, buổi offline
                            nhằm giúp các bạn REC trau dồi, học hỏi và mở rộng được network trong
                            lĩnh vực tuyển dụng.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerContent;