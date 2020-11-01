import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends, faMapMarkedAlt, faPhone, faEnvelope, faClock} from "@fortawesome/free-solid-svg-icons"

const Contact = (props) => {
    const [state, setState] = useState({
        submit_stt: false
    });
    const changeSubmitStt = (ev) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                submit_stt: !prevState.submit_stt
            }
        })
    }
    const {submit_stt} = state;
    return (
        <section className="contact">
            {/* location map at the top */}
            <div className="container-fluid map">
                <div className="row">
                    <div className="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5169875974734!2d106.70237131411646!3d10.77165946222879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4138cf4909%3A0xaa966d5f7d098671!2sTh%C3%A1p%20Bitexco%20Financial%20Tower!5e0!3m2!1svi!2s!4v1604051492468!5m2!1svi!2s" title="location map" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
            </div>
            {/* container of contact form, company information & annoucement when submited successfully */}
            <div className="container form-contact">
                <div className="row">
                    {
                        ((submit_stt === false) && (
                            // show contact form if have not completed
                            <div className="col-9 form">
                                <div className="content">
                                    <h3 className="title">Send Us A Feedback</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta aperiam et laboriosam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta aperiam et laboriosam nulla.</p>
                                    <form onSubmit = {(ev)=>{changeSubmitStt(ev)}}>
                                        <label>Your name: </label>
                                        <input required type="text" name="name"/> <br/>
                                        <label>Your phone number </label>
                                        <input required type="tel" name="name"/> <br/>
                                        <label>Your email address </label>
                                        <input required type="email" name="name"/> <br/>
                                        <label>Share your thoughts with us </label>
                                        <textarea required name="comment" row={10}></textarea><br/>
                                        <input type="submit" value="Send Us Your Feedbacks"/>
                                    </form>
                                </div>
                            </div>
                        )) ||
                        ((submit_stt === true) && (
                            // show announcement if submit successfully, use library https://animate.style/
                            <div className="col-9 submit-success animate__animated animate__fadeInBottomRight">
                                <div className="content">
                                    <h3 className="title">Thank you so much for your Feedback</h3>
                                    {/* button other feedback */}
                                    <span className="other-feedback" onClick = {(ev)=>{changeSubmitStt(ev)}}>Send Us Another Feedback</span> <br/>
                                    {/* button continue shopping */}
                                    <NavLink
                                        to = "/all-collection"
                                        exact = {true}
                                        className="navigate"
                                    >
                                        Continiue Shopping
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                    {/* company information in the right: name,  phone, email,... */}
                    <div className="col-3 address">
                        <div className="content">
                            <h3 className="title">Or Reach Us</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="icon">
                                            <FontAwesomeIcon icon = {faUserFriends}/>
                                        </td>
                                        <td className="info">Company Name</td>
                                    </tr>
                                    <tr>
                                        <td className="icon">
                                            <FontAwesomeIcon icon = {faMapMarkedAlt}/>
                                        </td>
                                        <td className="info">Building, Street, Ward, District, City, Country, Zip Code</td>
                                    </tr>
                                    <tr>
                                        <td className="icon">
                                            <FontAwesomeIcon icon = {faPhone}/>
                                        </td>
                                        <td className="info">Phone</td>
                                    </tr>
                                    <tr>
                                        <td className="icon">
                                            <FontAwesomeIcon icon = {faEnvelope}/>
                                        </td>
                                        <td className="info">Email</td>
                                    </tr>
                                    <tr>
                                        <td className="icon">
                                            <FontAwesomeIcon icon = {faClock}/>
                                        </td>
                                        <td className="info">From 09:00AM to 17:00PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;