'use client'; // obavezno jer koristimo useEffect

import { useEffect, useState } from 'react';

export default function Korisnici() {
  const [korisnici, setKorisnici] = useState([]);     // stanja za podatke
  const [loading, setLoading] = useState(true);       // stanje za učitavanje
  const [error, setError] = useState(null);           // stanje za greške

  useEffect(() => {
    async function fetchKorisnici() {
      try {
        const res = await fetch('/api/korisnici');
        if (!res.ok) throw new Error('Greška u mreži');
        const data = await res.json();
        setKorisnici(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchKorisnici();
  }, []);

  if (loading) return <p>Učitavanje podataka...</p>;
  if (error) return <p>Greška: {error}</p>;

  return (
    <main>
      <h1>Lista korisnika</h1>
      <ul>
        {korisnici.map(k => (
          <li key={k.id}>{k.ime}</li>
        ))}
      </ul>
    </main>
  );
}
