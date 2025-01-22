import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo115 from './Images/logo115.jpg';
import logo105 from './Images/logo105.jpg';
import logo110 from './Images/logo110.jpg';
import logo111 from './Images/logo111.jpg';
import logo116 from './Images/logo116.jpg';
import logo117 from './Images/logo117.jpg';
import './MultiItem.css';
function Grid() {
    return (
        <div className="pt-5 pb-5">
            <div className="contain">
                <div className="row">
                    <div className="col-12">
                        <h1 className="menu-section-heading">Eco Living Resources</h1>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shadow p-3 mb-3" border-radius="16px">
                            <img
                                src={logo116}
                                className="w-100" style={{ borderRadius: '16px' }}alt="1st"
                            />
                            <h1 className="menu-card-title">8 Ways To Make DIY Decorations</h1>
                            <Link to="/Mat1" className="menu-item-link">
                                View All
                                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="shadow p-3 mb-3" border-radius="16px">
                            <img
                                src={logo117}
                                className="w-100" style={{ borderRadius: '16px' }} alt="2nd"
                            />
                            <h1 className="menu-card-title">7 Ways To Make DIY Natural Beauty Products</h1>
                            <Link to="/Mat2" className="menu-item-link">
                                View All
                                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shadow p-3 mb-3" border-radius="16px">
                            <img
                                src={logo105}
                                className="w-100" style={{ borderRadius: '16px' }} alt="3rd"
                            />
                            <h1 className="menu-card-title">6 Ways To Make Sustainable Fashion</h1>
                            <Link to="/Mat3" className="menu-item-link">
                                View All
                                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shadow p-3 mb-3" border-radius="16px">
                            <img
                                src={logo110}
                                className="w-100" style={{ borderRadius: '16px' }} alt="4th"
                            />
                            <h1 className="menu-card-title">5 Ways To Make An DIY Eco-Friendly Gifts</h1>
                            <Link to="/Mat4" className="menu-item-link">
                                View All
                                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg"></svg>
                                </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shadow p-3 mb-3" border-radius="16px">
                            <img
                                src={logo111}
                                className="w-100" style={{ borderRadius: '16px' }} alt="5th"
                            />
                            <h1 className="menu-card-title">7 Ways To Make Rangoli With Natural Materials</h1>
                            <Link to="/Mat5" className="menu-item-link">
                                View All
                                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="shadow p-3 mb-3" border-radius="16px">
                            <img
                                src={logo115}
                                className="w-100" style={{ borderRadius: '16px' }} alt="6th"
                            />
                            <h1 className="menu-card-title">8 Ways To Make Zero-Waste Gift Wrapping</h1>
                            <Link to="/Mat6" className="menu-item-link">
                                View All
                                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;