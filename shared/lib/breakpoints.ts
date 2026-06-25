export const breakpoints = {
  mobile:   { min: 0,    max: 767  },
  tablet:   { min: 768,  max: 1023 },
  notebook: { min: 1024, max: 1280 },
  desktop:  { min: 1281, max: 1769 },
  wide:     { min: 1770, max: null  },
} as const;
