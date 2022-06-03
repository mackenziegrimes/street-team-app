import Color from 'color';

export const useGradient = ({
  color,
  customPercents,
  customLighten,
  customDarken,
  customDegree,
}) => {
  const percents = customPercents || [0, 68, 100];
  const lighten = customLighten || 0.2;
  const darken = customDarken || 0.2;
  const degree = customDegree || 90;

  const originalColor = Color(color);
  const lighterColor = originalColor.lighten(lighten);
  const darkerColor = originalColor.darken(darken);
  const gradientColor = `linear-gradient(${degree}deg,
      ${lighterColor} ${percents[0]}%,
      ${originalColor} ${percents[1]}%,
      ${darkerColor} ${percents[2]}%
    )`;

  return gradientColor;
};
