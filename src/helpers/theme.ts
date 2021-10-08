export const getTheme = () => {
  return localStorage.getItem('app-theme') || 'light';
}

export const setTheme = (theme: string) => {
  localStorage.setItem('app-theme', theme)

  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
}