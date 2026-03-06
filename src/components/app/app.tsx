import MainPage from '../../pages/main';

type AppComponentProps = {
  placesCount: number;
}

function App({placesCount}: AppComponentProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
  );
}

export default App;
