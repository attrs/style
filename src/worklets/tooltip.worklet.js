// See https://css-houdini.rocks/tooltip/

/*
.el {
  background: #00c6ff;
  border-image-source: paint(tooltip);
  border-image-slice: 0 0 100% 0;
  border-image-width: var(--border-width);
  border-image-outset: var(--border-width);
  --border-width: 20px;
  --tooltip-position: 50%;
  --tooltip-size: 30px;
}
*/

typeof registerPaint === 'function' &&
  registerPaint(
    'tooltip',
    class Bubble {
      static get inputProperties() {
        return ['background-color', '--tooltip-position', '--tooltip-size'];
      }

      paint(ctx, geom, props, args) {
        const color = props.get('background-color').toString();
        const positionPercent = props.get('--tooltip-position').toString().replace('%', '') * 1;
        const position = (geom.width * positionPercent) / 100;
        const size = props.get('--tooltip-size').toString().replace('px', '') * 1;

        ctx.beginPath();
        ctx.moveTo(position - size, 0);
        ctx.lineTo(position + size, 0);
        ctx.lineTo(position, geom.height);
        ctx.closePath();

        // fill
        ctx.fillStyle = color;
        ctx.fill();
      }
    }
  );
