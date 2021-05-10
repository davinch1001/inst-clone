import React from 'react';
import {Link, useParams} from "react-router-dom";
import '../style.css'

const Header = () => {
    const {albumId} = useParams()
    return (
        <header className="header">

<div className="back-btn-block">
    {
        albumId && (
            <Link className="back-btn" to="/albums"><img width="34px" height='33px' src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt=""/></Link>
        )

    }
</div>


<Link className='inst-logo-block' to='/'><img className="inst-logo-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" alt=""/>
</Link>

        </header>
    );
};

export default Header;