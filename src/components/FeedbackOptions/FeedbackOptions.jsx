import React from 'react';
import { List } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({option, onLeaveFeedback }) => {
    return  < List >
        {option.map((opt, index) => {
        return (<li key={index}>
        <Button type='button' onClick={() => onLeaveFeedback(opt)}>{opt}</Button>
        </li>)
        })}
    </List> 
};

 FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    option: PropTypes.arrayOf(PropTypes.string).isRequired
    };