import React from 'react';
import { List } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    return  < List >
        {options.map((opt, index) => {
        return (<li key={index}>
        <Button type='button' onClick={() => onLeaveFeedback(opt)}>{opt}</Button>
        </li>)
        })}
    </List> 
};

 FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
    };