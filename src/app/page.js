import Link from 'next/link';
import Card from './components/Card';

export default function Home() {
  return (
    <main>
      <h1>Početna</h1>
      <Card />

      <Link href="/proizvodi/cokolada">Čokolada</Link><br />
      <Link href="/proizvodi/kamera">Kamera</Link><br />
      <Link href="/proizvodi/telefon">Telefon</Link><br />
      <br />
      <h1>Dobrodošli!</h1>
      <p>Ovo je početna stranica moje Next.js aplikacije.</p>
      <img src="/logo.png" alt="Logo" width="150" />
      <br />
      <Link href="/about">O meni</Link><br />
      <Link href="/vreme">Trenutno vreme</Link><br />
      <Link href="/korisnici/101">Korisnik 101</Link><br />
      <Link href="/korisnici/202">Korisnik 202</Link><br/>
      <Link href="/vreme-server">Server vreme</Link><br />

    </main>
  );
}

