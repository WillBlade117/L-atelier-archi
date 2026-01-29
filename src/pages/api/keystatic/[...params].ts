import { handleKeystatic } from '@keystatic/astro/api';
import config from '../../../../keystatic.config';

export const ALL = handleKeystatic(config);
export const prerender = false;