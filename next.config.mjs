// import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin();
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
 
// export default withNextIntl(nextConfig);


// next.config.mjs

import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
};

export default nextConfig;
