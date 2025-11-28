import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/mixes/')({
  component: Mixes,
  // Receive search parameters
  validateSearch: (search) => {
    return {
      q: (search.q as string) || '',
    };
  },
  // Add search params to loaderDeps so that loader can access them
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async ({ deps: { q } }) => {
    const mixes = ['mix1', 'mix2', 'mix3'];
    return { mixes: mixes.filter((mix) => mix === q) };
  },
});

function Mixes() {
  const { mixes } = Route.useLoaderData();
  const { q } = Route.useSearch();
  return (
    <div>
      {mixes.map((mix) => (
        <div key={mix}>
          <Link to='/mixes/$mixId' params={{ mixId: mix }}>
            {mix}
          </Link>
        </div>
      ))}
    </div>
  );
}
