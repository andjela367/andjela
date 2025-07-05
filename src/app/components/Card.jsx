// app/components/Card.tsx
import styles from './Card.module.css';
import clsx from 'clsx';
export default function Card() {
  return (
    <div className={clsx(styles.card, styles.shadow)}>

      <div className={styles.title}>Ovo je naslov</div>
      <div className={styles.content}>
        Ovo je sadržaj kartice, stilizovan preko CSS modula.
      </div>
    </div>
  );
}
