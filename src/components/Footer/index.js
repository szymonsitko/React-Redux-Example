import React from 'react';
import { Footer as AppFooter } from 'react-materialize';

const Footer = () => {
    return (
        <AppFooter copyrights="2018 | Jurek Dörfler"
            moreLinks={
                <a
                    className="grey-text text-lighten-4 right"
                    href="https://github.com/yavathol/React-Redux-Example">
                        GitHub Repository
                    </a>
            }
            className='example'
            >   
            <h5 className="white-text">Application Details</h5>
            <p className="grey-text text-lighten-4">This is a homework for React-Redux workshop.</p>
        </AppFooter>
    )
};

export default Footer;


