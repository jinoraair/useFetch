import { useState, useEffect } from 'react';
import useDebounce from './hooks/useDebounce';
import useCopy from './hooks/useCopy';
import './App.css';

function App() {
  // ---- для useDebounce ----
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Поиск (с задержкой):', debouncedQuery);
    }
  }, [debouncedQuery]);

  // ---- для useCopy ----
  const { copiedText, copy } = useCopy();
  const linkToCopy = 'https://github.com/KseniyaVakulenko/TicTacToe';

  return (
    <div className="app">
      <h1>Демонстрация хуков</h1>

      {/* ---- useDebounce ---- */}
      <section className="section">
        <h2>1. useDebounce</h2>
        <p>Отложенное обновление значения (500 мс)</p>
        <input
          type="text"
          placeholder="Введи текст..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
        <p>
          Мгновенно: <strong>{query || '—'}</strong>
        </p>
        <p>
          С задержкой 500 мс: <strong>{debouncedQuery || '—'}</strong>
        </p>
      </section>

      {/* ---- useCopy ---- */}
      <section className="section">
        <h2>2. useCopy</h2>
        <p>Копирование текста в буфер обмена</p>
        <p className="link-text">{linkToCopy}</p>
        <button onClick={() => copy(linkToCopy)} className="btn">
          {copiedText === linkToCopy ? '✅ Скопировано!' : '📋 Копировать ссылку'}
        </button>
      </section>
    </div>
  );
}

export default App;