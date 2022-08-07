import "../css/Body.css"


import { NowBlock } from "./BodyComponents/NowBlock";
import { DetailsBlock } from "./BodyComponents/DetailsBlock";
import { ForecastBlock } from "./BodyComponents/ForecastBlock";

export function Body() {
  return (
    <div className="weather__body body">
      <NowBlock />
      <DetailsBlock />
      <ForecastBlock />
    </div>
  );
}
