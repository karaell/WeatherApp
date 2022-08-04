import search from "/0 Projects/WeatherApp/src/img/search.svg"

export function SearchForm() {
  return (
    <form className="weather__search-form search-form">
      <SearchInput />
      <SearchBtn />
    </form>
  );
}

function SearchInput() {
  return (
    <input className="search-form__input" />
  );
}

function SearchBtn() {
  return (
    <div className="search-form__btn">
      <button>
        <img src={search} alt="search"/>
      </button>
    </div>
  );
}
