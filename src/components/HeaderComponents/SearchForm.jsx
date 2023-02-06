import search from "/0 Projects/WeatherApp/src/img/search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { installCityName } from "../../store/slices/cityNameSlice";

export function SearchForm() {
  const dispatch = useDispatch();

  const [cityName, setCityName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const inputValue = e.target[0].value;

      if (inputValue === "" || inputValue.length < 3 ) {
        throw new Error("Please enter a valid city name");
      }

      dispatch(installCityName(inputValue)); 
    } catch (err) {
        console.log(err.message);
    } finally {
        setCityName("");
    }
  }

  function handleInputChange(e) {
    e.preventDefault();

    setCityName(e.target.value);
  }

  return (
    <form className="weather__search-form search-form" onSubmit={handleSubmit}>
      <SearchInput cityName={cityName} onChange={handleInputChange} />
      <SearchBtn />
    </form>
  );
}

function SearchInput(props) {
  const { cityName, onChange } = props;

  return (
    <input
      className="search-form__input"
      type="text"
      value={cityName}
      onChange={onChange}
    />
  );
}

function SearchBtn() {
  return (
    <div className="search-form__btn">
      <button>
        <img src={search} alt="search" />
      </button>
    </div>
  );
}
