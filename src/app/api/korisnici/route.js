export async function GET() {
  const korisnici = [
    { id: 1, ime: "Ana" },
    { id: 2, ime: "Marko" },
  ];

  return Response.json(korisnici);
}
