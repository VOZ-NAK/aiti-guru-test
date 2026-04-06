import { Toaster } from 'react-hot-toast';

import { BrowserRouter } from 'react-router-dom';

import { useAuthInit } from '@/shared/lib';

import Navigation from './router/Navigation';

function App() {
  useAuthInit();

  return (
    <BrowserRouter basename="/aiti-guru-test">
      <Navigation />
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
