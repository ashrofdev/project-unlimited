import React from 'react';
import fspLogo from '../../resources/images/fsplogo.png'

const PoweredBy = () => {
    return (
        <div className="powered">
            <div className="logo">
                <img alt="" src={fspLogo} />
            </div>
            <p>Powered by Freedom Synergy Pro</p>
        </div>
    );
};

export default PoweredBy;