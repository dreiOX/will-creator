import React, { useState } from "react";

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
    willConditional: "",
  });

  const [checked, setChecked] = useState(false);

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
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <h3>Personal Information</h3>
          <label>
            Tick to indicate that you are of sound mind while filling this will:
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              name="soundMind"
              id="checkbox"
              required
            />
          </label>
          <label>
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
          <input
            type="text"
            name="propertyName"
            value={formState?.propertyName}
            onChange={handleChange}
            placeholder="enter property name"
          />
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
          <input
            type="name"
            name="beneficiary"
            placeholder="enter name of recipient beneficiary"
            value={formState?.beneficiary}
            onChange={handleChange}
          />
          <button>Add+</button>
        </section>
        <section>
          <h3>
            Condition for Inability of A Beneficiary to Not Receive Property
          </h3>
          <label htmlFor="">
            <textarea
              name="willConditional"
              id=""
              value={formState?.willConditional}
              onChange={handleChange}
            ></textarea>
          </label>
        </section>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default WillFormView;

async function text(url) {
  return fetch(url).then((res) => res.text());
}
