import { useSelector } from "react-redux";
import { format } from "date-fns";

export function DetailsBlock() {
  const weatherDataObj = useSelector(
    (state) => state.weatherDataNowReducer.weatherDataNow
  );

  return (
    <div className="body__details details">
      <DetailItem title="Humidity" subtitle={weatherDataObj.main?.humidity + " %"} />
      <DetailItem title="Wind speed" subtitle={weatherDataObj.wind?.speed + " k/h"} />
      <DetailItem title="Visiblity" subtitle={weatherDataObj.visibility/1000 + " km"} />
      <DetailItem title="Sunrise" subtitle={convertTime(weatherDataObj.sys?.sunrise)} />
      <DetailItem title="Sunset" subtitle={convertTime(weatherDataObj.sys?.sunset)} />
    </div>
  );
}

function DetailItem(props) {
  const { title, subtitle } = props;

  return (
    <div className="details__item">
      <div className="details__item-title">{title}</div>
      <div className="details__item-subtitle">{subtitle}</div>
    </div>
  );
}


function convertTime(unixTime) {
  try {
    const time = unixTime * 1000;

    return format(time, "hh:mm aaa");
  } catch (err) {
    console.log(err)
  }
}