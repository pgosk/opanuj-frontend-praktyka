import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SectionTitle } from './components/section-title';
import { Comments } from './components/comments';
import { Authors } from './components/authors';
import { Articles } from './components/articles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto max-w-7xl">
        <div className="md:grid md:grid-cols-4 gap-x-8">
          <div>
            <h1 className="text-3xl font-bold">Library</h1>
            <img
              className="rounded-xl shadow mb-2"
              src="/image-v2.png"
              alt="Bookshelf"
            />
            <SectionTitle>Comments</SectionTitle>
            <Comments />
          </div>
          <div className="col-span-3">
            <SectionTitle>Authors</SectionTitle>
            <Authors />
            <SectionTitle>Articles</SectionTitle>
            <Articles />
          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
