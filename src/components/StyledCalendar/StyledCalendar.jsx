import Calendar from "react-calendar";
import styled from "styled-components";

export const StyledCalendar = styled(Calendar)`
  border: 1px solid var(--primary-button-color);
  border-radius: 8px;
  width: 233px;
  height: 254px;

  background-color: var(--datepicker-background-color);

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar__navigation::after {
    content: "";
    display: block;
    width: 197px;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    background-color: var(--datepicker-disabled-day);
  }

  .react-calendar__navigation button {
    height: 56px;
    background: none;
    color: var(--datepicker-current-day);
    border: none;
    transition: all var(--hover-params);
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    color: var(--primary-button-color);
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev-button {
    border: none;
    width: 36px;
    cursor: pointer;
  }

  .react-calendar__navigation__label {
    border: none;
    width: 158px;
    cursor: pointer;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    border: none;
    width: 36px;
    cursor: pointer;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    width: 197px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 11px;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--screens-page-tutorial-text-color);
    text-align: center;
  }

  abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days {
    width: 197px;
    height: 145px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__month-view__days__day {
    border: none;
    border-radius: 50%;
    background-color: transparent;
    letter-spacing: -0.02em;
    color: var(--datepicker-current-day);
    cursor: pointer;
    transition: all var(--hover-params);

    &:hover {
      color: var(--primary-button-color);
    }
  }

  .react-calendar__tile--active {
    color: var(--datepicker-title-active);
    background-color: var(--primary-button-color);
  }

  .react-calendar__tile--now {
    color: var(--datepicker-title-active);
    background-color: var(--primary-button-color);
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--datepicker-disabled-day);
  }

  .react-calendar__year-view__months {
    width: 197px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__year-view__months__month {
    border: none;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: -0.02em;
    color: var(--datepicker-current-day);
    background-color: var(--datepicker-background-color);
    transition: all var(--hover-params);

    &:hover,
    &:focus {
      color: var(--primary-button-color);
    }
  }

  .react-calendar__decade-view__years {
    width: 197px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__decade-view__years__year {
    border: none;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--datepicker-current-day);
    background-color: var(--datepicker-background-color);
    transition: all var(--hover-params);

    &:hover,
    &:focus {
      color: var(--primary-button-color);
    }
  }

  .react-calendar__century-view__decades {
    width: 197px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__century-view__decades__decade {
    border: none;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--datepicker-current-day);
    background-color: var(--datepicker-background-color);
    transition: all var(--hover-params);

    &:hover,
    &:focus {
      color: var(--primary-button-color);
    }
  }
`;
