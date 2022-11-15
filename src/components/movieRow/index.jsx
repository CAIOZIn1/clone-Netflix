import React from "react";
import style from './MovieRow.module.scss';

export default ({ title, items }) => {
    return (
        <div className={style.movieRow}>

            <h2>
                {title}
            </h2>

            <div className={style.movieRowListArea}>

                <div className={style.movieRowList}>

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