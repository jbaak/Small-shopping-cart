import React from 'react';

export default function Header(props) {
    const {countCartItems} = props;
    return(
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>Small shopping cart</h1>
                </a>
            </div>
            <div>
                <a href='#/cart'>Cart</a>
                Cart { ''}
                {countCartItems? (
                    <button className='badge'>{countCartItems}</button>
                ): (
                    ''
                )}
                <a href='#/singin'>SingIn</a>
            </div>
        </header>
    );
}