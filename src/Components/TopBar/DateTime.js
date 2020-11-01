import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const DateTime = () => {
    const returnWeekday = (day) => {
        switch (day) {
            case 0:
                return "Sunday, " 
            case 1:
                return "Monday, "
            case 2:
                return "Tuesday, "
            case 3:
                return "Wednesday, "
            case 4:
                return "Thursday, "
            case 5:
                return "Friday, "
            case 6:
                return "Saturday, "
            default:
                break;
        }
    }
    const returnMonth = (month) => {
        switch (month) {
            case 0:
                return "January, "
            case 1:
                return "February, "
            case 2:
                return "March, "
            case 3:
                return "April, "
            case 4:
                return "May, "
            case 5:
                return "June, "
            case 6:
                return "July, " 
            case 7:
                return "August, " 
            case 8:
                return "September, " 
            case 9:
                return "October, " 
            case 10:
                return "November, " 
            case 11:
                return "December, " 
            default:
                break;
        }
    }
    const addZero = (value) => {
        if (parseFloat(value) < 10){
            return `0${value}`
        } else return value
    }
    useEffect(() => {
        const timer = setInterval(() => {
            const time = new Date();
            const weekday = returnWeekday(time.getDay());
            const date = addZero(time.getDate());
            const month = returnMonth(time.getMonth());
            const year = time.getFullYear();
            const hour = addZero(time.getHours());
            const minute = addZero(time.getMinutes());
            const second = addZero(time.getSeconds());
            const fullDate = `${weekday}${date} ${month}${year} at ${hour}:${minute}:${second}`
            const showFullDate = document.querySelector(".full-date");
            showFullDate.innerHTML = fullDate
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    return (
        <div className="col-4 date-time-container">
            <div className="date-time">
                <FontAwesomeIcon icon = {faClock} className="icon"/> &nbsp;
                <span className="full-date"></span>
            </div>
        </div>
    );
};

export default DateTime;