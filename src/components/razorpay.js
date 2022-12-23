import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { shape, string, bool, func } from 'prop-types';
import BillingAddress from '@magento/venia-ui/lib/components/CheckoutPage/BillingAddress';

import { useRazorpay } from '../talons/useRazorpay';
import defaultClasses from './razorpay.module.css';
import { FormattedMessage } from 'react-intl';

/**
 * The Razorpay component renders all information to handle Razorpay payment.
 *
 * @param {Boolean} props.shouldSubmit boolean value which represents if a payment nonce request has been submitted
 * @param {Function} props.onPaymentSuccess callback to invoke when the a payment nonce has been generated
 * @param {Function} props.onPaymentReady callback to invoke when the component is ready
 * @param {Function} props.onPaymentError callback to invoke when component throws an error
 * @param {Function} props.resetShouldSubmit callback to reset the shouldSubmit flag
 */
const Razorpay = props => {
    const classes = useStyle(defaultClasses, props.classes);
console.log('razorpay file calling.....................................................');
    const {
        onBillingAddressChangedError,
        onBillingAddressChangedSuccess
    } = useRazorpay(props);

    return (
        <div className={classes.root}>
            <BillingAddress
                resetShouldSubmit={props.resetShouldSubmit}
                shouldSubmit={props.shouldSubmit}
                onBillingAddressChangedError={onBillingAddressChangedError}
                onBillingAddressChangedSuccess={onBillingAddressChangedSuccess}
            />
        </div>
    );
};

Razorpay.propTypes = {
    classes: shape({ root: string }),
    shouldSubmit: bool.isRequired,
    onPaymentSuccess: func,
    onPaymentReady: func,
    onPaymentError: func,
    resetShouldSubmit: func.isRequired
};

export default Razorpay;
