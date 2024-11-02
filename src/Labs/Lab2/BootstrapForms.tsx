export default function BootstrapForms() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Forms</h2>
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">
          Email address</label>
        <input type="email" className="form-control"
          id="input1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="textarea1" className="form-label">
          Example textarea</label>
        <textarea className="form-control" id="textarea1"
          rows={3}></textarea>
      </div>
      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <select className="form-select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox"
            id="switch1" />
          <label className="form-check-label" htmlFor="switch1">
            Default switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox"
            id="switch2" checked />
          <label className="form-check-label" htmlFor="switch2">
            Checked switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox"
            id="switch3" disabled />
          <label className="form-check-label" htmlFor="switch3">
            Disabled switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox"
            id="switch4" checked disabled />
          <label className="form-check-label" htmlFor="switch4">
            Disabled checked switch checkbox input
          </label>
        </div>
      </div>
      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <label htmlFor="range1" className="form-label">
          Example range
        </label>
        <input type="range" className="form-range"
          min="0" max="5" step="0.5" id="range1" />
      </div>
      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
        </div></div>
      <div id="wd-css-responsive-forms-1">
        <h3>Responsive forms</h3>
        <div className="mb-3 row">
          <label htmlFor="email1"
            className="col-sm-2 col-form-label">
            Email </label>
          <div className="col-sm-10">
            <input type="text" className="form-control"
              id="email1" value="email@example.com" />
          </div> </div>
        <div className="mb-3 row">
          <label htmlFor="password1"
            className="col-sm-2 col-form-label">
            Password </label>
          <div className="col-sm-10">
            <input type="password" id="password1"
              className="form-control" />
          </div> </div>
        <div className="mb-3 row">
          <label htmlFor="textarea2"
            className="col-sm-2 col-form-label">
            Bio </label>
          <div className="col-sm-10">
            <textarea className="form-control"
              id="textarea2" rows={3}></textarea>
          </div>
        </div>
      </div>
      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms</h3>
        <form>
          <div className="row mb-3">
            <label htmlFor="r1" className="col-sm-2 col-form-label">
              Email </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="r1" />
            </div> </div>
          <div className="row mb-3">
            <label htmlFor="r2" className="col-sm-2 col-form-label">
              Password </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="r2" />
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">
              Radios</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio"
                  name="gridRadios" id="r3" value="option1" checked />
                <label className="form-check-label" htmlFor="r3">
                  First radio </label> </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"
                  name="gridRadios" id="r4" value="option2" />
                <label className="form-check-label" htmlFor="r4">
                  Second radio </label> </div>
              <div className="form-check disabled">
                <input className="form-check-input" type="radio"
                  name="gridRadios" id="r5" value="option3" disabled />
                <label className="form-check-label" htmlFor="r5">
                  Third disabled radio </label> </div>
            </div>
          </fieldset>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox"
                  id="r6" />
                <label className="form-check-label" htmlFor="r6">
                  Example checkbox </label> </div> </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in </button>
        </form>
      </div>

    </div>
  );
}