import './App.css';
import { Link, Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import { SuperHeroesPage } from './Components/SuperHeroes.page';
import { RQSuperHeroesPage } from './Components/RQSuperHeroes.page';
import { HomePage } from './Components/Home.page';
import { RQSuperHeroPage } from './Components/RQSuperHero.page';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ParallelQueries } from './Components/ParallelQueries';
import { DynamicParallelPage } from './Components/DynamicParallel.page';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/superheroes">SuperHeroes</Link>
            </li>
            <li>
              <Link to="/rqsuperheroes">RQSuperHeroes</Link>
            </li>
            <li>
              <Link to="/parallelqueries">ParallelQueries</Link>
            </li>
            <li>
              <Link to="/dynamicparallelqueries">DynamicParallelPage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
          <Route path="/superheroes" element={<SuperHeroesPage />} /> 
          <Route path="/rqsuperheroes" element={<RQSuperHeroesPage />} />
          <Route path="/parallelqueries" element={<ParallelQueries />} />
          <Route path="/dynamicparallelqueries" element={<DynamicParallelPage heroId={[1,3]} />} />
          <Route path="/" element={<HomePage />} />

        </Routes>     
          </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false}  position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
