export function DetailsBlock() {
    return (
      <div className="body__details details">
        <DetailItem title="Chance of rain" subtitle="12%"/>
        <DetailItem title="Humidity" subtitle="60%"/>
        <DetailItem title="Wind speed" subtitle="10 k/h"/>
        <DetailItem title="Visiblity" subtitle="100km"/>
        <DetailItem title="Pressure" subtitle="1015 hPa"/>
      </div>
    );
}

function DetailItem(props) {
  const {title, subtitle} = props;

  return (
    <div className="details__item">
      <div className="details__item-title">{title}</div>
      <div className="details__item-subtitle">{subtitle}</div>
    </div>
  );
}