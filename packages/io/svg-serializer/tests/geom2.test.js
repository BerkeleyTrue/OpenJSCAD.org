const test = require('ava')

const { color, geometry, primitives, transforms } = require('@jscad/modeling')

const serializer = require('../index.js')

test('serialize 2D geometries (simple) to svg', function (t) {
  const cag1 = geometry.geom2.create()

  const observed1 = serializer.serialize({}, cag1)
  t.deepEqual([expected1], observed1)

  const cag2 = primitives.rectangle({ size: [10, 20] })

  const observed2 = serializer.serialize({}, cag2)
  t.deepEqual([expected2], observed2)

  const cag3 = transforms.center({ center: [-30, -30, 0] }, primitives.rectangle({ size: [10, 20] }))
  const cag4 = transforms.center({ center: [30, 30, 0] }, primitives.rectangle({ size: [10, 20] }))

  const observed3 = serializer.serialize({}, cag3, cag4)
  t.deepEqual([expected3], observed3)
})

test('serialize 2D geometries (color) to svg', function (t) {
  let cag2 = primitives.rectangle({ size: [10, 20] })
  cag2 = color.color([0.5, 0.5, 0.5, 0.5], cag2)

  let observed2 = serializer.serialize({}, cag2)
  t.deepEqual([expected4], observed2)
})

test('serialize 2D geometries (complex) to svg', function (t) {
  const shape = geometry.geom2.create([
    [[-75.00000, 75.00000], [-75.00000, -75.00000]],
    [[-75.00000, -75.00000], [75.00000, -75.00000]],
    [[75.00000, -75.00000], [75.00000, 75.00000]],
    [[-40.00000, 75.00000], [-75.00000, 75.00000]],
    [[75.00000, 75.00000], [40.00000, 75.00000]],
    [[40.00000, 75.00000], [40.00000, 0.00000]],
    [[40.00000, 0.00000], [-40.00000, 0.00000]],
    [[-40.00000, 0.00000], [-40.00000, 75.00000]],
    [[15.00000, -10.00000], [15.00000, -40.00000]],
    [[-15.00000, -10.00000], [15.00000, -10.00000]],
    [[-15.00000, -40.00000], [-15.00000, -10.00000]],
    [[-8.00000, -40.00000], [-15.00000, -40.00000]],
    [[15.00000, -40.00000], [8.00000, -40.00000]],
    [[-8.00000, -25.00000], [-8.00000, -40.00000]],
    [[8.00000, -25.00000], [-8.00000, -25.00000]],
    [[8.00000, -40.00000], [8.00000, -25.00000]],
    [[-2.00000, -15.00000], [-2.00000, -19.00000]],
    [[-2.00000, -19.00000], [2.00000, -19.00000]],
    [[2.00000, -19.00000], [2.00000, -15.00000]],
    [[2.00000, -15.00000], [-2.00000, -15.00000]]
  ])
  shape = color.color([0.5, 0.5, 0.5, 0.5], shape)

  let observed = serializer.serialize({}, shape)
  t.deepEqual([expected5], observed)
})

const expected1 = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by OpenJSCAD.org -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
<svg width="0mm" height="0mm" viewBox="0 0 0 0" version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <path d=""/>
  </g>
</svg>
`

const expected2 = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by OpenJSCAD.org -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
<svg width="10mm" height="20mm" viewBox="0 0 10 20" version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <path d="M0 0L10 0L10 20L0 20L0 0"/>
  </g>
</svg>
`

const expected3 = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by OpenJSCAD.org -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
<svg width="70mm" height="80mm" viewBox="0 0 70 80" version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <path d="M0 0L10 0L10 20L0 20L0 0"/>
  </g>
  <g>
    <path d="M60 60L70 60L70 80L60 80L60 60"/>
  </g>
</svg>
`

const expected4 = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by OpenJSCAD.org -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
<svg width="10mm" height="20mm" viewBox="0 0 10 20" version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <path fill-rule="evenodd" fill="rgb(127.5,127.5,127.5,127.5)" d="M0 0L10 0L10 20L0 20L0 0"/>
  </g>
</svg>
`

const expected5 = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by OpenJSCAD.org -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
<svg width="150mm" height="150mm" viewBox="0 0 150 150" version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <path fill-rule="evenodd" fill="rgb(127.5,127.5,127.5,127.5)" d="M0 0L150 0L150 150L115 150L115 75L35 75L35 150L0 150L0 0M90 35L83 35L83 50L67 50L67 35L60 35L60 65L90 65L90 35M73 56L77 56L77 60L73 60L73 56"/>
  </g>
</svg>
`
