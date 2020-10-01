export default function Criteria() {
  return (
    <div id="mySidenav" className="sidenav">
      <li className="bg-colorli">
        Set Criteria
        <a href="#0" className="closebtn">
          &times;
        </a>
      </li>
      <li>
        <a href="#">Contract List View</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Contract#/Name</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Client Age</a>
        <label>Min</label>
        <input type="text" placeholder=""className="form-field"  />
        <label>Max</label>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Investment Option</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Rider Settings</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Product Settings</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Program Settings</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Anniversary Date</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <li>
        <a href="#">Contract Value</a>
        <input type="text" placeholder=""className="form-field"  />
      </li>
      <div className="apply-section">
        <button>Apply</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
