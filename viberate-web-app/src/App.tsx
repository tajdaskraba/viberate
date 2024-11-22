import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Landing from './components/Landing'
import ArtistDetail from './components/ArtistDetail';
import './styles/styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/:artistUuid" element={<ArtistDetail />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;