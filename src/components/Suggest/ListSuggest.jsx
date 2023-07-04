import React from 'react';

const ListSuggest = () => {
    return (
        <div className="list-sugget wrapper">
            <span className="list-sugget__title">Đề xuất:</span>
            <ul className="list-sugget__list">
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        Reacjs
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        VueJS
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        Angular
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        Design
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        .NET
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        PHP
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        Java
                    </a>
                </li>
                <li className="list-sugget__item">
                    <a href="#" className="list-sugget__link">
                        Mobile
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ListSuggest;