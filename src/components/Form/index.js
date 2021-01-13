import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { CircularProgress } from '@material-ui/core'
import CompDatePicker from '../DatePicker'
import ProgressWrapper from '../ProgressWrapper';
import Error from '../Error';
import { TODO_STATUS } from '../../utils/constants'
import { 
    DivGroup,
    Label,
    StyledInput,
    AddButton,
    CancelButton,
    ButtonWrapper,
    StyledForm,
    StyledWrapper,
    InfoWrapper
 } from './styles';
import { addTodo } from '../../actions/todos';

class Form extends React.Component{

    handleSubmit = async (values, actions) => {
        const { onAdd, onModalClose } = this.props
        const { description, startDate, endDate } = values
        
        const newTodo = {
            description,
            startDate,
            endDate,
            status: TODO_STATUS.INCOMPLETE
        }

        await onAdd(newTodo);

        actions.setSubmitting(false);

        onModalClose();
    }

    validate = (values) => {
        const errors = {};
      
        if (!values.description) {
          errors.description = 'This field is required';
        }
      
        return errors;
    }

    render(){
        const { handleSubmit: formikHandleSubmit, validate } = this;
        const { onModalClose } = this.props

        return(
            <Formik
                initialValues={{
                    description: '',
                    startDate: new Date(),
                    endDate: new Date(),
                }}
                onSubmit={formikHandleSubmit}
                validate={validate}
                validateOnBlur
            >
                        {props => {
                        const { 
                            handleBlur, 
                            handleSubmit, 
                            handleChange, 
                            setFieldValue, 
                            values: { description, startDate, endDate }, 
                            errors: { description: desc },
                            isSubmitting
                        } = props

                        return (
                            <StyledForm onSubmit={handleSubmit}>
                            <DivGroup>
                                <Label htmlFor="description" error={!!desc}>Description</Label>
                                <StyledInput 
                                    name="description" 
                                    id="description" 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                    value={description}
                                    autoComplete="off"
                                    autoFocus
                                />
                                {desc && <Error>{desc}</Error>}
                            </DivGroup>
                            
                            <DivGroup>
                                <Label htmlFor="startDate">Start Date</Label>
                                <CompDatePicker
                                    id="startDate"
                                    name="startDate" 
                                    customInput={<StyledInput />}
                                    selected={startDate}
                                    onChange={(date) => setFieldValue('startDate', date)} 
                                    dateFormat="MMMM d, yyyy"
                                />
                            </DivGroup>
                            <DivGroup>
                                <Label htmlFor="endDate">End Date</Label>
                                <CompDatePicker
                                    id="endDate"
                                    name="endDate" 
                                    customInput={<StyledInput />}
                                    minDate={startDate}
                                    selected={endDate}
                                    onChange={(date) => setFieldValue('endDate', date)} 
                                    dateFormat="MMMM d, yyyy"
                                />
                            </DivGroup>
                            <StyledWrapper>
                                <ButtonWrapper>
                                    <CancelButton type="button" onClick={onModalClose}>Cancel</CancelButton>
                                    <AddButton disabled={isSubmitting} type="submit">Add Todo</AddButton>
                                </ButtonWrapper>
                                <InfoWrapper>
                                    {isSubmitting && (
                                        <ProgressWrapper>
                                            <CircularProgress color="inherit" />
                                        </ProgressWrapper>
                                    )}
                                </InfoWrapper>
                            </StyledWrapper>
                        </StyledForm>
                    )
                }}
            </Formik>
        )
    }
}

const mapDispatchToProps = {
    onAdd: addTodo
}

Form.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Form);