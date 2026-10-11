import React from 'react';

/**
 * Country flag visual used on destination cards and the country page hero.
 * Keeps the flag's true proportions, adds a soft brand-tinted backdrop and
 * a drop shadow so the flag "sits" in the layout instead of floating.
 */
const CountryFlag = ({ country, variant = 'card' }) => {
  return (
    <div
      className={`country-flag-visual country-flag-visual--${variant}`}
      style={{ '--flag-tint': country.color || '#0d2b55' }}
    >
      {country.image ? (
        <img
          src={country.image}
          alt={`${country.name} flag`}
          loading="lazy"
          className="country-flag-visual__img"
        />
      ) : (
        <span className="country-flag-visual__emoji" role="img" aria-label={`${country.name} flag`}>
          {country.flag}
        </span>
      )}
    </div>
  );
};

export default CountryFlag;
