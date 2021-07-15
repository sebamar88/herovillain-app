import React from 'react';

function Footer({ teamHeroes }) {
  return (
    <footer
      className={
        !teamHeroes.error && teamHeroes.length !== 0
          ? 'footer mt-4'
          : 'bottom footer mt-4'
      }
    >
      <div className='content text-center text-white'>
        <p>
          <strong className='text-warning'>Heroes & Villains App</strong> by{' '}
          <a
            className="text-danger font-weight-bold"
            rel='noreferrer'
            href='https://www.linkedin.com/in/sebamar88/'
            target='_blank'
          >
            Sebastián Martínez
          </a>{' '}
          © {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
