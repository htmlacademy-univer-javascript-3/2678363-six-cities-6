import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p className="spinner-text">Loading...</p>
    </div>
  );
}

export default Spinner;
