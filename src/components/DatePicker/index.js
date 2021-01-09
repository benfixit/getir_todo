import DatePicker from 'react-datepicker'
import { DatePickerWrapper } from './styles'
import "react-datepicker/dist/react-datepicker.css";

const CompDatePicker = props => {
    return (
        <DatePickerWrapper>
            <DatePicker {...props} />
        </DatePickerWrapper>
    )
}

export default CompDatePicker;