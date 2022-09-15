import "../css/Header.css";

// import { Logo } from "HeaderComponents/Logo";

import { Logo } from "./HeaderComponents/Logo";
import { SearchForm } from "./HeaderComponents/SearchForm";
import { DegreeFormatButton } from "./HeaderComponents/DegreeFormatButton";
import { FavoriteCitiesButton } from "./HeaderComponents/FavoriteCitiesButton";

export function Header() {

  return (
    <div className="weather__header header">
      <Logo />
      <SearchForm />
      <DegreeFormatButton />
      {/* <FavoriteCitiesButton /> */}
    </div>
  );
}
