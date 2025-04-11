export function classificarEngajamento(views) {
  if (views > 10000) {
    return { destaque: true, nivel: '🔥 Viral' };
  } else if (views > 1000) {
    return { destaque: false, nivel: '👍 Popular' };
  } else {
    return { destaque: false, nivel: '👀 Baixo alcance' };
  }
}
