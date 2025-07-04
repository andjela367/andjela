import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>O meni</h1>
      <p>Ovo je stranica o meni.</p>
      <Link href="/">Nazad na početnu</Link>
    </main>
  );
}
