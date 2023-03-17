import { version } from '../package.json';

export default function Header() {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="mb-0">Quotes</h3>
        <p>v{version}</p>
      </div>
    </header>
  );
}
