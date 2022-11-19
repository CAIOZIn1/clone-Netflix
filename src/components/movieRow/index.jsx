import React, { useState } from "react";
import style from './MovieRow.module.scss';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);


    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if ( x > 0 ) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 200;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 140
        }
        setScrollX(x);
    }

    return (
        <div className={style.movieRow}>

            <h2>
                {title}
            </h2>

            <div className={style.movieRowLeft} onClick={handleLeftArrow}>
                <span style={{ fontSize: 50 }}>
                    &lt;
                </span>
            </div>

            <div className={style.movieRowRight} onClick={handleRightArrow}>
                <span style={{fontSize: 50, fontWeigt: 'bold'}}>
                    &gt;
                </span>
            </div>

            <div className={style.movieRowListArea}>

                <div className={style.movieRowList} style={{
                    marginLeft: scrollX,
                    width: items.results.length * 200
                }}>

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className={style.movieRowItem}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}

                </div>


            </div>
        </div>
    );
};