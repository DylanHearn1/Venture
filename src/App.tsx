import Index from './Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropertyInfomation from './pages/propertyPage/PropertyInfomation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/property/:id"
            element={
              <PropertyInfomation
                homePageLink={`${import.meta.env.VITE_CLIENT}`}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
