export const dynamic = "force-dynamic";

export default function DinamickaStranica() {
  const vreme = new Date().toLocaleTimeString();
  return <h1>Trenutno vreme: {vreme}</h1>;
}
