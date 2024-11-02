export default function BootstrapNavigation() {
  return (
    <>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <div id="wd-css-navigating-with-cards">
        <h2>
          Cards
        </h2>
        <div className="card"
          style={{ width: "18rem" }}>
          <img src="images/stacked.jpg"
            className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              Stacking Starship
            </h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <a href="#" className="btn btn-primary">
              Boldly Go
            </a>
          </div>
        </div>
      </div>
    </>

  );
}

