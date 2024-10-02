window.addEventListener('DOMContentLoaded', () => {
  // Получаем текущий URL
  const params = new URLSearchParams(window.location.search);
  
  // Проверяем, есть ли параметр 'redirect'
  const redirectPath = params.get('redirect');
  
  if (redirectPath) {
    // Используем history.pushState, чтобы восстановить правильный маршрут
    history.pushState(null, '', redirectPath);

    // Если у тебя есть функция для управления маршрутизацией
    handleRouteChange(redirectPath);
  }
});