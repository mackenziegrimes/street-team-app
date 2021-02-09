function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1)
}

function getValue(value, spacing) {
  return !spacing || isNaN(value) ? value : value * spacing
}

function isNullLike(value) {
  return value === null || typeof value === 'undefined'
}

function resolveDirectionalStyles(
  { all, horizontal, vertical, top, right, bottom, left } = {}
) {
  const space = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  if (!isNullLike(all)) {
    return {
      top: all,
      right: all,
      bottom: all,
      left: all,
    }
  }

  if (!isNullLike(horizontal)) {
    space.right = horizontal
    space.left = horizontal
  }

  if (!isNullLike(vertical)) {
    space.top = vertical
    space.bottom = vertical
  }

  if (!isNullLike(top)) {
    space.top = top
  }

  if (!isNullLike(right)) {
    space.right = right
  }

  if (!isNullLike(bottom)) {
    space.bottom = bottom
  }

  if (!isNullLike(left)) {
    space.left = left
  }

  return space
}

function directionalStyles(
  styles,
  { prefix = '', suffix = '', spacing = 8 } = {}
) {
  const resolvedStyles = resolveDirectionalStyles(styles)
  return Object.keys(resolvedStyles).reduce(function(acc, key) {
    const newKey = prefix || suffix
      ? `${prefix}${capitalize(key)}${capitalize(suffix)}`
      : key
    return {
      ...acc,
      [newKey]: getValue(resolvedStyles[key], spacing),
    }
  }, {})
}

export default directionalStyles