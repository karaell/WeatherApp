import { useDispatch, useSelector } from "react-redux";
import { setUnitDegree } from "../../store/slices/degreeSlice";

export function DegreeFormatButton() {
  const degreeUnit = useSelector((state) => state.degreeUnitReducer.degreeUnit);
  const dispatch = useDispatch();

  let cDegereClassName = "";
  let fDegereClassName = "";

  if (degreeUnit === "C") {
    cDegereClassName = "degree__bold";
  } else {
    fDegereClassName = "degree__bold";
  }


  function handleClick() {
    return degreeUnit === "C" ? dispatch(setUnitDegree("F")) : dispatch(setUnitDegree("C"))
  }

  return (
    <button className="header__degree-btn degree" onClick={handleClick}>
      <p className={cDegereClassName}>°c</p>
      <p className="degree__slash">/</p>
      <p className={fDegereClassName}>°f</p>
    </button>
  );
}
