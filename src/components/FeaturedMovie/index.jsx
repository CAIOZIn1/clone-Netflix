import React from "react";
import style from "./FeaturedMovie.module.scss"

export default ({ item }) => {
    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200)+"...";
    }

    return (
        <section>

            <section
                className={style.featured}
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                }}>

                <div className={style.featuredVertical}>

                    <div className={style.featuredHorizontal}>

                        <div className={style.featuredName}>
                            {item.original_name}
                        </div>

                        <div className={style.featuredInfo}>

                            <div className={style.featuredPoints}>
                                {item.vote_average} pontos
                            </div>

                            <div className={style.featuredYear}>
                                {firstDate.getFullYear()}
                            </div>

                            <div className={style.featuredSeasons}>
                                {item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}
                            </div>

                        </div>

                        <div className={style.featuredDescripition}>
                            {description}
                        </div>

                        <div className={style.featuredButtons}>
                            <a href={`/watch/${item.id}`} className={style.featuredWacthButton}>▶ Assistir</a>

                            <a href={`/list/add/${item.id}`} className={style.featuredMyListButton}>+ Minha Lista</a>
                        </div>

                        <div className={style.featuredGenrs}>
                            <strong>
                                Gêneros
                            </strong>
                            {genres.join(', ')}
                        </div>

                    </div>

                </div>

            </section>

        </section>
    )
}