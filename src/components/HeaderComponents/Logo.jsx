import logo from "/0 Projects/WeatherApp/src/img/logo.svg";

export function Logo() {
  return (
    <div className="header__logo logo">
      <img src={logo} alt="logo" />

      <div className="logo__title">
        <h1>WeatherApp</h1>
      </div>
    </div>
  );
}
