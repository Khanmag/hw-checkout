import ColdIcon from "../../assets/icons/ColdIcon";
import WarmIcon from "../../assets/icons/WarmIcon";


const Thermoment = () => {
  return (
    <div>
      <div>
        <p>text</p>
      </div>
      <div className="term_buttons">
        <button>
          <ColdIcon />
        </button>
        <button>
          <WarmIcon />
        </button>
      </div>

    </div>
  );
};

export default Thermoment;
