import { gql } from '@apollo/client';

export const GET_RZP_CONFIG_DATA = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        StoreConfig {
            store_code
            razorpay_key_id @client
            razorpay_merchant_name_override @client
        }
    }
`;

export const SET_PAYMENT_METHOD_ON_CART = gql`
    mutation setPaymentMethodOnCart($cartId: String!) {
        setPaymentMethodOnCart(
            input: { cart_id: $cartId, payment_method: { code: "razorpay" } }
        ) {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;

export default {
    getRzpConfigQuery: GET_RZP_CONFIG_DATA,
    setPaymentMethodOnCartMutation: SET_PAYMENT_METHOD_ON_CART
};
