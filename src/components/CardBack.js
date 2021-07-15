import React from 'react';

function CardBack({ appearance, biography, image, work, name, isFlipped }) {
  const alignment = biography.alignment === 'good' ? 'Hero' : 'Villain';
  const base = work.base.split(', ');
  return (
    <div className='card'>
      <div className='card-content mx-3 p-0 pt-2'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-96x96 is-square'>
              <img src={image.url} alt={name} />
            </figure>
          </div>
          <div className='media-content'>
            <p className='has-text-weight-semibold is-uppercase mb-0'>{name}</p>
            <p className='subtitle is-6 mb-2'>{biography.aliases[0]}</p>
            <span
              className={
                alignment !== 'Hero' ? 'tag is-danger' : 'tag is-success'
              }
            >
              {alignment}
            </span>
          </div>
        </div>
        <div className='content is-small'>
          <div className='subtitle is-size-5 mb-3 has-text-weight-semibold'>
            Caracter Facts
          </div>
          <table className='table is-narrow'>
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{biography['full-name']}</td>
              </tr>
              <tr>
                <th>Occupation</th>
                <td>{work.occupation}</td>
              </tr>
              <tr>
                <th>Residence</th>
                <td>{base ? base[0] : work.base}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{appearance.weight[1]}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{appearance.height[1]}</td>
              </tr>
              <tr>
                <th>Eye color</th>
                <td>{appearance['eye-color']}</td>
              </tr>
              <tr>
                <th>Hair color</th>
                <td>{appearance['hair-color']}</td>
              </tr>
              <tr>
                <th>First Appearance</th>
                <td>{biography['first-appearance']}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className='card-footer'>
        <button
          onClick={() => isFlipped(true)}
          className='card-footer-item button is-light is-link '
        >
          Back
        </button>
      </footer>
    </div>
  );
}

export default CardBack;
