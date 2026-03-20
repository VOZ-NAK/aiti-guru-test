export const ApiTags = {
  Products: 'Products',
  Auth: 'Auth',
} as const;

export type ApiTagType = (typeof ApiTags)[keyof typeof ApiTags];
