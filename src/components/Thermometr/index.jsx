import { useDispatch, useSelector } from "react-redux";
import ColdIcon from "../../assets/icons/ColdIcon";
import WarmIcon from "../../assets/icons/WarmIcon";
import { decrement, increment } from "../../store/term/termSlice";


const Thermoment = () => {
  const currentTemp = useSelector(store => store.term.value)
  const dispatch = useDispatch()

  const termUp = () => { dispatch(increment()) }
  const termDown = () => { dispatch(decrement()) }

  const curretTempClass = (t) => {
    if (t < -10) return "t1"
    else if (t < -5) return "t2"
    else if (t < 0) return "t3"
    else if (t < 5) return "t4"
    else if (t < 10) return "t5"
    else if (t < 15) return "t6"
    else if (t < 20) return "t7"
    else if (t < 25) return "t8"
    else if (t < 30) return "t9"
    else return "t10"
  }

  return (
    <div className={"term " + curretTempClass(currentTemp)}>

      <div className="term_monitor">
        <p>{currentTemp}</p>
      </div>

      <div className="term_buttons">

        <button onClick={termDown}>
          <ColdIcon />
        </button>

        <button onClick={termUp}>
          <WarmIcon />
        </button>

      </div>

    </div>
  );
};

export default Thermoment;
