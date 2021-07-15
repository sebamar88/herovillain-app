import React, { useState } from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import Results from './Results';

function Search({ url }) {
  const [searchInfo, setSearchInfo] = useState(null);
  const [displayResult, setDisplayResult] = useState(null);
  const [result, setResult] = useState([]);

  async function getSearchResult() {
    const response = await fetch(`${url}search/${searchInfo}`).catch(
      (err) => err
    );
    if (response.ok) {
      return response.json();
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    setDisplayResult(false);
    setResult(await getSearchResult());
    setDisplayResult(true);
  }

  return (
    <>
      <form className='w-50' onSubmit={handleSearch}>
          <input
            className='form-control'
            type='text'
            placeholder='Find a Character'
            onChange={(e) => setSearchInfo(e.target.value)}
          />
        <div className='control'>
          <button className='btn btn-danger mt-4'>Search</button>
        </div>
      </form>
      {displayResult ? (
        result.response === 'success' ? (
          <>
          <div className="container-fluid overflow-auto">
            <div className="container">
              <div className='row p-4'>
              {result.results.map((character, i) => {
                return (
                  <div className='col-md-3' key={i}>
                    <Results
                      name={character.name}
                      image={character.image.url}
                      id={character.id}
                      biography={character.biography}
                      url={url}
                    />
                  </div>
                );
              })}
                        </div>
            </div>
            <Footer teamHeroes={result.results} />
          </div>
            </>
          
        ) : (
          <div class="alert alert-danger text-capitalize mt-4" role="alert">
            {result.error}
          </div>
        )
      ) : displayResult !== null ? (
        <Spinner />
      ) : null}
      {result.response === 'success' ? null : <Footer teamHeroes={result} />}
    </>
  );
}
export default Search;
