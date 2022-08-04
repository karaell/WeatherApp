export function ForecastBlock() {
    return (
        <div className="body__forecast forecast">
            <ForecastCategoryRow />
            <ForecastInfo />
        </div>
    )
}

function ForecastCategoryRow() {
    return (
      <ul className="forecast__category-row category-row">
        <li className="category-row__item">date</li>
        <li className="category-row__item">chance of rain</li>
        <li className="category-row__item">humidity</li>
        <li className="category-row__item">wind</li>
        <li className="category-row__item">temperature</li>
      </ul>
    );
}

function ForecastInfo() {
    return (
      <div className="forecast__info">
        <ForecastInfoItem />
      </div>
    );
}

function ForecastInfoItem() {
    return (
      <ul className="forecast__info-item">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
}