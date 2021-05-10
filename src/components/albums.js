import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import '../style.css'
import Header from "./header";

const Albums = () => {
    const albumArr = useSelector(s => s.images.albumsData.map((item)=>{
        return item.albumId;
    }).filter((value, index, self)=>{
        return self.indexOf(value) === index;
    }))
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="album-list-block">
                    {albumArr.map((item)=>{
                        return (
                            <div className="album-block">
                                <Link to={`/albums/${item}`} className='album-link-number'>{item}</Link>
                                <Link to={`/albums/${item}`} className='album-link'>@album</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Albums;