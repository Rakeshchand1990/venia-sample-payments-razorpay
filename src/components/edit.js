import React from 'react';
import { shape, string, bool, func } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';

import RazorPay from './razorpay';
import defaultClasses from './edit.module.css';

/**
 * The edit view for the RazorPay payment method.
 */
const EditRazorPay = props => {
    const {
        onPaymentReady,
        onPaymentSuccess,
        onPaymentError,
        resetShouldSubmit,
        shouldSubmit
    } = props;

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <RazorPay
                onPaymentReady={onPaymentReady}
                onPaymentSuccess={onPaymentSuccess}
                onPaymentError={onPaymentError}
                resetShouldSubmit={resetShouldSubmit}
                shouldSubmit={shouldSubmit}
            />
        </div>
    );
};

export default EditRazorPay;

EditRazorPay.propTypes = {
    classes: shape({
        root: string
    }),
    onPaymentReady: func.isRequired,
    onPaymentSuccess: func.isRequired,
    onPaymentError: func.isRequired,
    resetShouldSubmit: func.isRequired,
    shouldSubmit: bool
};
