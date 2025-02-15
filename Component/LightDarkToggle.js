import { useEffect, useState } from 'react';

export default function LightDarkToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-700 rounded">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
