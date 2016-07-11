const postcss = require('postcss')
const fs = require('fs')

const paths = require('./paths')

module.exports = (glyphs, options) => {
  const fontFace = postcss.atRule({
    name: 'font-face'
  })
    .append(postcss.decl({
      prop: 'font-family',
      value: options.fontName
    }))

    .append(postcss.decl({
      prop: 'font-style',
      value: 'normal'
    }))

    .append(postcss.decl({
      prop: 'font-weight',
      value: 'normal'
    }))

    .append(postcss.decl({
      prop: 'src',
      value: `url("../fonts/${options.fontName}.woff") format("woff")`
    }))

  const glyph = postcss.rule({
    selector: '.glyph'
  })
    .append({
      prop: 'font-family',
      value: options.fontName
    })
    .append({
      prop: '-moz-osx-font-smoothing',
      value: 'grayscale'
    })
    .append({
      prop: '-webkit-font-smoothing',
      value: 'antialiased'
    })
    .append({
      prop: 'font-style',
      value: 'normal'
    })
    .append({
      prop: 'font-weight',
      value: 'normal'
    })
    .append({
      prop: 'line-height',
      value: 1
    })
    .append({
      prop: 'speak',
      value: 'none'
    })

  const stylesheet = postcss.root({
    after: '\n'
  })
    .append(fontFace)
    .append(glyph)

  glyphs.forEach((glyph) => {
    const decl = {
      prop: 'content',
      value: `"\\${glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()}\"`
    }

    const currentPlaceholder = postcss.atRule({
      name: `define-mixin ${glyph.name}`
    })
      .append(postcss.decl(decl))

    const currentGlyph = postcss.rule({
      selector: `.glyph-${glyph.name}::before`
    })
      .append(decl)

    stylesheet
      .append(currentPlaceholder)
      .append(currentGlyph)
  })

  fs.writeFileSync(`${paths.src.css.src}/atoms/glyph.css`, stylesheet.toResult().css)
}
