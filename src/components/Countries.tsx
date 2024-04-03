import { useState } from 'react';

export const Countries = ({ data, country }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const arrayFilter = data.filter((filteredCountry) =>
    filteredCountry.name.common.toLowerCase().includes(country)
  );
  const showCountryInfo = (countryData) => {
    return (
      <div>
        <h2>{countryData.name.common}</h2>
        <p>Capital: {countryData.capital[0]}</p>
        <p>Area: {countryData.area}</p>
        <strong>Languages:</strong>
        <ul>
          {Object.values(countryData.languages).map((languageName) => (
            <li key={languageName}>{languageName}</li>
          ))}
        </ul>
        <img src={countryData.flags.png} alt="Country Flag" />
      </div>
    );
  };

  const handleShowInfoClick = (countryData) => {
    setSelectedCountry(countryData);
  };

  return (
    <div>
      {arrayFilter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : selectedCountry ? (
        <div>{showCountryInfo(selectedCountry)}</div>
      ) : arrayFilter.length > 1 ? (
        <ul>
          {arrayFilter.map((filteredCountry) => (
            <li key={filteredCountry.cca3}>
              {filteredCountry.name.common}
              <button onClick={() => handleShowInfoClick(filteredCountry)}>
                Show Info
              </button>
            </li>
          ))}
        </ul>
      ) : (
        arrayFilter.length === 1 && <div>{showCountryInfo(arrayFilter[0])}</div>
      )}
    </div>
  );
};
