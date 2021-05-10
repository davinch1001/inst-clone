import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Header from "./header";
import '../style.css'

const AlbumImg = () => {
    const {albumId} = useParams();
    const albumArr = useSelector(s => s.images.albumsData.filter((item) => {
        return item.albumId === +albumId
    }))
    return (
        <div>
            <Header/>
        <div className="album-img-block">
            {albumArr.map((item)=>{
                return <div>
                    <img className="album-img" src={item.url} alt=""/>
                </div>
            })
            }
        </div>
        </div>
    );
};

export default AlbumImg;