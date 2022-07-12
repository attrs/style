// See https://css-houdini.rocks/posts/smooth-corners/paint.js
// modified by @joje

export default class SmoothCorners {
  static get inputProperties() {
    return ['--smooth-corners-radius', '--smooth-corners-fill'];
  }

  paint(ctx, size, styleMap) {
    const exp = styleMap.get('--smooth-corners-radius');
    const fill = styleMap.get('--smooth-corners-fill');
    ctx.fillStyle = (fill && fill.toString()) || 'var(--color-bg-active)';
    const n = +(exp && exp.toString()) || 3;

    let m = n;
    if (n > 100) m = 100;
    if (n < 0.00000000001) m = 0.00000000001;
    const r = size.width / 2;
    const w = size.width / 2;
    const h = size.height / 2;

    ctx.beginPath();

    for (let i = 0; i < 2 * r + 1; i++) {
      const x = i - r + w;
      const y = Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(i - r), m)), 1 / m) + h;

      if (i == 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    for (let i = 2 * r; i < 4 * r + 1; i++) {
      const x = 3 * r - i + w;
      const y = -Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(3 * r - i), m)), 1 / m) + h;
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
  }
}

// eslint-disable-next-line no-undef
typeof registerPaint === 'function' && registerPaint('smooth-corners', SmoothCorners);
