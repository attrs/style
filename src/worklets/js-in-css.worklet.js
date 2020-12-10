// See https://css-houdini.rocks/js-in-css/

registerPaint('background-canvas', class {
    static get inputProperties() {
        return ['--background-canvas'];
    }
    paint(ctx, geom, properties) {
        eval(properties.get('--background-canvas').toString())(ctx, geom, properties);
    }
})