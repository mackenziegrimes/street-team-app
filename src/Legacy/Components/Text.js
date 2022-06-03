import React from 'react'
import createStyledElement from 'create-styled-element'
import { parseToRgb } from 'polished'
import { createTone } from 'tonality'
import directionalStyles from './directional-styles'
// get "directionalStyles" here: https://gist.github.com/souporserious/54f9e56ebac4fc4dab603c4212f2ec2e

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

function parseColor(color, pseudo) {
  const parsedColor = typeof color === 'object'
    ? pseudo ? { ...color[pseudo] } : { ...color }
    : color

  // if we are styling a pseudo state use the base color if it was not provided
  if (!parsedColor.base && pseudo) {
    parsedColor.base = color.base
  }

  // adjust the tone of the base color
  if (parsedColor.tone) {
    parsedColor.base = createTone(parsedColor.base)(parsedColor.tone)
  }

  // determine if we need to adjust the alpha channel or not
  if (parsedColor.alpha) {
    const { red, green, blue } = parseToRgb(parsedColor.base)
    return `rgba(${red}, ${green}, ${blue}, ${parsedColor.alpha})`
  } else {
    return parsedColor.base || parsedColor
  }
}

function Text({
  component = 'span',
  family,
  weight = 400,
  contrast = 1,
  base,
  lineHeight = 1.5,
  uppercase,
  align,
  underline,
  truncate,
  opacity,
  color,
  alpha = '0.79',
  transition = 'color 160ms ease',
  margin,
  ...props
}) {
  let styles = {
    fontFamily: family,
    textDecoration: underline ? 'underline' : 'none',
    transition: transition,
  }
  
  if (weight) {
    styles.fontWeight = weight
  }

  if (contrast) {
    if (base)
    {
      styles.fontSize = contrast * base;
      
    }
  
  }

  if (lineHeight) {
    styles.lineHeight = `${lineHeight}`
  }

  if (uppercase) {
    styles.transform = 'uppercase'
    styles.letterSpacing = '0.05em'
  }

  if (align) {
    styles.textAlign = align
  }
  
  if (opacity) {
    styles.opacity = opacity
  }
  
  if (family) {
    styles.family = family
  }
  
  if (color) {
    styles.color = parseColor(color)
  }

  if (truncate) {
    styles.display = 'block'
    styles.whiteSpace = 'nowrap'
    styles.overflow = 'hidden'
    styles.textOverflow = 'ellipsis'
  }

  // if (color.base) {
  //   styles.color = parseColor(color)
  //   if (color.hover) {
  //     styles[':hover'] = {
  //       color: parseColor(color, 'hover'),
  //     }
  //   }
  //   if (color.active) {
  //     styles[':active'] = {
  //       color: parseColor(color, 'active'),
  //     }
  //   }
  // } else if (color) {
  //   styles.color = parseColor(color)
  // }

  if (margin) {
    styles = {
      ...styles,
      ...directionalStyles(margin, { prefix: 'margin', spacing: base }),
    }
  }

  return createStyledElement(component, props)(styles)
}

export default Text