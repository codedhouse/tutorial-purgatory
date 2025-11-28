import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/mixes/$mixId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    // This is where you would fetch data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      // This is where you would return the fetched data, which can then be accessed by useLoaderData()
      mixId: params.mixId,
    };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error: Unable to fetch data</div>,
});

function RouteComponent() {
  const { mixId } = Route.useLoaderData();
  return <div>Hello "/mixes/{mixId}"!</div>;
}
