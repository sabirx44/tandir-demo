// Draws a non-bread stamp (chekich) rosette as SVG markup.
// Concentric rings: centre star, dot ring, petal ring, notch ring, outer dots.
export function chekich({ petals = 12, stroke = 1.4 }: { petals?: number; stroke?: number } = {}) {
  const c = 50;
  const f = (n: number) => Math.round(n * 100) / 100;
  const polar = (r: number, a: number) => [c + r * Math.cos(a), c + r * Math.sin(a)];
  const parts: string[] = [];

  // Centre: eight-point star from two squares
  const sq = (rot: number) => {
    const pts = [0, 1, 2, 3].map((i) => polar(9, rot + (i * Math.PI) / 2)).map(([x, y]) => `${f(x)},${f(y)}`);
    return `<polygon points="${pts.join(' ')}"/>`;
  };
  parts.push(sq(0), sq(Math.PI / 4));
  parts.push(`<circle cx="50" cy="50" r="15"/>`);

  // Dot ring
  for (let i = 0; i < petals * 2; i++) {
    const [x, y] = polar(20, (i / (petals * 2)) * Math.PI * 2);
    parts.push(`<circle cx="${f(x)}" cy="${f(y)}" r="1.1" fill="currentColor" stroke="none"/>`);
  }

  // Petal ring: pointed almonds
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    const [x1, y1] = polar(24, a);
    const [x2, y2] = polar(38, a);
    const [cx1, cy1] = polar(31, a - 0.2);
    const [cx2, cy2] = polar(31, a + 0.2);
    parts.push(`<path d="M${f(x1)} ${f(y1)} Q${f(cx1)} ${f(cy1)} ${f(x2)} ${f(y2)} Q${f(cx2)} ${f(cy2)} ${f(x1)} ${f(y1)}Z"/>`);
  }
  parts.push(`<circle cx="50" cy="50" r="41"/>`);

  // Notch ring
  const n = petals * 3;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const [x1, y1] = polar(41, a);
    const [x2, y2] = polar(45, a + Math.PI / n);
    const [x3, y3] = polar(41, a + (2 * Math.PI) / n);
    parts.push(`<path d="M${f(x1)} ${f(y1)} L${f(x2)} ${f(y2)} L${f(x3)} ${f(y3)}"/>`);
  }
  parts.push(`<circle cx="50" cy="50" r="48"/>`);

  return `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linejoin="round" aria-hidden="true">${parts.join('')}</svg>`;
}

/** Small stamp as a CSS background (data URI) for ornament bands. */
export function chekichBand(color = '#E6C58A') {
  const svg = chekich({ petals: 8, stroke: 3 }).replace('currentColor', color).replaceAll('currentColor', color).replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" `);
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
