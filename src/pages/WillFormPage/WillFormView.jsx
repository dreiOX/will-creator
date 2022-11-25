import React, { useState } from "react";
import style from "./willform.module.css";

function WillFormView() {
  const [ip, setIp] = useState("");
  const [formState, setFormstate] = useState({
    willWritersName: "",
    willWritersAddress: "",
    representativeName: "",
    repSubstitute: "",
    propertyName: "",
    propertyPercentage: "100%",
    beneficiary: "",
    willConditional:
      "Should any beneficiary not survive me by _ days, their share shall be distributed to _.",
  });
  const [checked, setChecked] = useState(false);

  const disabledSub =
    checked &&
    formState.representativeName &&
    formState.willWritersAddress &&
    formState.willWritersName &&
    formState.willConditional;
  const disabledAdd = !!formState.propertyName && !!formState.beneficiary;


  /* fetching ip address to use as online signature */
  text("https://www.cloudflare.com/cdn-cgi/trace").then((data) => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    let ip = data.match(ipRegex)[0];
    setIp(ip);
  });

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault();
    };
  };

  const handleChange = ({ target }) => {
    let { name, value } = target;
    setFormstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={style.container}>
      <h2>Last Will and Testament Form</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <section>
          <h3>Personal Information</h3>
          <label className={style.checkboxLabel}>
            Tick to indicate that you are of sound mind while filling this will:
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              name="soundMind"
              className={style.checkbox}
              id="checkbox"
              required
            />
            <span></span>
          </label>
          <label>
            Name *
            <input
              type="name"
              id="name"
              name="willWritersName"
              className="name"
              value={formState?.willWritersName}
              onChange={handleChange}
              placeholder="enter your name"
              required
            />
          </label>
          <label>
            Address *
            <input
              type="address"
              name="willWritersAddress"
              id="address"
              value={formState?.willWritersAddress}
              onChange={handleChange}
              placeholder="enter address"
              required
            />
          </label>
        </section>
        <section>
          <h3>Name(s) of Representative(s)</h3>
          <label>
            Personal Representive *
            <input
              type="name"
              name="representativeName"
              value={formState?.representativeName}
              onChange={handleChange}
              placeholder="Enter name of Personal Representative for your will"
              required
            />
          </label>
          <label>
            Substitute
            <input
              type="name"
              name="repSubstitute"
              value={formState?.repSubstitute}
              onChange={handleChange}
              placeholder="Enter name of possible substitute for Personal Representative"
            />
          </label>
        </section>
        <section>
          <h3>Distribution of properties</h3>
          <label>
            Property Name *
            <input
              type="text"
              name="propertyName"
              required
              value={formState?.propertyName}
              onChange={handleChange}
              placeholder="enter property name"
            />
          </label>
          <label>
            Percentage:{" "}
            <select
              name="propertyPercentage"
              value={formState?.propertyPercentage}
              onChange={handleChange}
            >
              <option value="100%">100%</option>
              <option value="90%">90%</option>
              <option value="80%">80%</option>
              <option value="70%">70%</option>
              <option value="60%">60%</option>
              <option value="50%">50%</option>
              <option value="40%">40%</option>
              <option value="30%">30%</option>
              <option value="20%">20%</option>
              <option value="10%">10%</option>
            </select>
          </label>
          <label>
            Beneficiary *
            <input
              type="name"
              name="beneficiary"
              placeholder="enter name of recipient beneficiary"
              value={formState?.beneficiary}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className={style.add}
            style={{
              opacity: `${!disabledAdd ? "0.4" : "1"}`,
            }}
            disabled={!disabledAdd}
          >
            add beneficiary
          </button>
        </section>
        <section>
          <label>
            Condition for Inability of A Beneficiary to Receive Property *
            <textarea
              name="willConditional"
              id=""
              placeholder="fill in condition"
              value={formState?.willConditional}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </section>

        <button
          type="submit"
          disabled={!disabledSub}
          style={{
            opacity: `${!disabledSub ? "0.4" : "1"}`,
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default WillFormView;

async function text(url) {
  return fetch(url).then((res) => res.text());
}
