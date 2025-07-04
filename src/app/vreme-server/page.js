export default async function VremeServer() {
  const vreme = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>SSR prikaz vremena</h1>
      <p>Trenutno vreme (server-side renderovano): {vreme}</p>
    </main>
  );
}
