import { useDispatch, useSelector } from "react-redux";
import { setTempScale } from "../../store/slices/degreeSlice";

export function DegreeFormatButton() {
  const tempScale = useSelector((state) => state.tempScaleReducer.tempScale);
  const dispatch = useDispatch();

  let cDegereClassName = "";
  let fDegereClassName = "";

  if (tempScale === "C") {
    cDegereClassName = "degree__bold";
  } else {
    fDegereClassName = "degree__bold";
  }


  function handleClick() {
    return tempScale === "C" ? dispatch(setTempScale("F")) : dispatch(setTempScale("C"))
  }

  return (
    <button className="header__degree-btn degree" onClick={handleClick}>
      <p className={cDegereClassName}>°c</p>
      <p className="degree__slash">/</p>
      <p className={fDegereClassName}>°f</p>
    </button>
  );
}
