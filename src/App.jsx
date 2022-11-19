import './App.css'
import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/movieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/header';

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    // Pegando a lista total dos filmes
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando a capa inicial
      let originals = list.filter(i => i.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="App">

      <Header black={blackHeader} />

      {featureData &&
        <FeaturedMovie item={featureData} />
      }

      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>

      <footer>

        Feito em conjunto com o vídeo https://youtu.be/tBweoUiMsDg <span role="img" aria-label='Coração'>❤</span><br />
        Todos os direitos reservados a  <a style={{ color: 'red' }} href="https://www.netflix.com/br/">Netflix</a><br />
        Dados pegos do portal <a style={{ color: '#00ff00' }} href="https://www.themoviedb.org/">Themoviedb.org</a>

      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="imagem loading" />
        </div>
      }

    </div>
  );
}

