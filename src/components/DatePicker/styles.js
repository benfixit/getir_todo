import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
    .react-datepicker__day--selected,
    .react-datepicker__day--selected:hover,
    .react-datepicker__day--selected:active,
    .react-datepicker__day--selected:focus {
        background-color: #5D3EBC;
        color: #ffffff;
        outline: none;
    }

    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container {
        width: 100%;
    }

    .react-datepicker__day--keyboard-selected {
        background-color: #5D3EBC;
    }

    .react-datepicker__time-container {
        width: 90px;
    
    > .react-datepicker__time {
            > .react-datepicker__time-box {
                width: 100% !important;

                > ul.react-datepicker__time-list {
                    > .react-datepicker__time-list-item {
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        flex-direction: column;
                        text-transform: lowercase;
                    }

                    > li.react-datepicker__time-list-item--selected {
                        background-color: #5D3EBC;
                    }
                }
            }
        }
    }
`