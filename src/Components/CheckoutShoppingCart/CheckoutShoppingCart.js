import React from 'react';

const CheckoutShoppingCart = (props) => {
    return (
        <section className="check-out">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Welcome to Payment Portal</h4>
                    </div>
                </div>
                <div className="row payment">
                    <div className="col-7 payment-process">
                        <div className="title">
                            <h5>Form Detail</h5>
                        </div>
                        <div className="content">
                            Form
                        </div>
                    </div>
                    <div className="col-5 summary">
                        <div className="title">
                            <h5>Your Order Summary</h5>
                        </div>
                        <div className="content">
                            <table>
                                <tbody><tr className="product">
                                    <td className="name">Latest Beauty Women Clothing White</td>
                                    <td className="quantity">10</td>
                                    <td className="price">$ 200.00</td>
                                    <td className="amount">$ 2000.00</td>
                                    </tr>
                                    <tr className="product">
                                    <td className="name">Shipping Fee</td>
                                    <td className="quantity">1</td>
                                    <td className="price">$ 200.00</td>
                                    <td className="amount">$ 2000.00</td>
                                    </tr>
                                    <tr className="total-amount">
                                    <td className="title" colSpan={3}>Total</td>
                                    <td className="money">$ 2000.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutShoppingCart;