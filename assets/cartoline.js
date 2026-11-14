document.addEventListener('click', async (event) => {
  const btn = event.target.closest('.copy-btn');
  if (!btn) return;
  const text = btn.getAttribute('data-quote') || '';
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    const original = btn.textContent;
    btn.textContent = 'Copiata!';
    setTimeout(() => { btn.textContent = original; }, 1600);
  } catch {
    prompt('Copia la frase:', text);
  }
});

