import React from 'react';

function CardBack({ appearance, biography, image, work, name, isFlipped }) {
  const alignment = biography.alignment === 'good' ? 'Hero' : 'Villain';
  const base = work.base.split(', ');
  return (

    <div className="card">
      <figure>

      <img className="img-fluid card-img-top" src={image.url} alt={name} />
      </figure>
      <p className=' mb-2'>{biography.aliases[0]}</p>
            <span
              className={
                alignment !== 'Hero' ? 'badge badge-danger' : 'badge badge-success'
              }
            >
              {alignment}
            </span>
        <div className="card-body">
          <div className='h3 mb-3 uppercase font-weight-bold'>
            {name}
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
        <button
          onClick={() => isFlipped(true)}
          className='btn btn-secondary'
        >
          Back
        </button>
        
      </div>

    
  );
}

export default CardBack;
