// TODO remove function after strapi fix
export const forceUrlToHttps = (url: string): string => url?.replace(/http:/i, 'https:');
