import svelte from 'rollup-plugin-svelte';
import gzipPlugin from 'rollup-plugin-gzip';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import sveltePreprocess from 'svelte-preprocess';
import { config } from 'dotenv';
import replace from '@rollup/plugin-replace';import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

console.log('config.js production', production);

const AWARDS_API_HOST = production ? 'https://api-auszeichnungen.fmh.de' : 'http://localhost:3001';

console.log('AWARDS_API_HOST', AWARDS_API_HOST);

function serve() {
	let server;
	
	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', [
        'run', 'start', '--', '--dev',
        //'--http3',
        //'--key /Users/kastner/self-signed/_wildcard.fmh.de-key.pem',
        //'--cert /Users/kastner/self-signed/_wildcard.fmh.de.pem'
    ], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

let serverInstance;
let livereloadInstance;

function serveOnce() {
  if (serverInstance) return serverInstance; 
  serverInstance = serve();
  return serverInstance;
}

function livereloadOnce(watchDir) {
  if (livereloadInstance) return livereloadInstance; 
  livereloadInstance = livereload(watchDir);
  return livereloadInstance;

}




const componentConfig = ({ input, out, cssOut }) => {
  return {
    input,
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: out 
    },
    plugins: [
    
      replace({   
        process: JSON.stringify({
          env: {
            AWARDS_API_HOST,
            isProd: production,
            ...config().parsed
          } 
       }),
      }),
      svelte({
        // enable run-time checks when not in production
        dev: !production,
        // we'll extract any component CSS out into
        // a separate file - better for performance
        preprocess: sveltePreprocess(), 
        css: css => {
          css.write(cssOut);
        }
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serveOnce(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereloadOnce('public'),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
      production && gzipPlugin()	
    ],
    watch: {
      clearScreen: false
    }
  }
};

export default [
  componentConfig({
    input:  'src/main-newsletter-register.js',
    out: 'public/build/newsletter-register.js',
    cssOut: 'newsletter-register.css'
  }),
  componentConfig({
    input:  'src/main-count-down.js',
    out: 'public/build/count-down.js',
    cssOut: 'count-down.css'
  }),
  componentConfig({
    input:  'src/main-random-laureates.js',
    out: 'public/build/random-laureates.js',
    cssOut: 'random-laureates.css'
  }),
  componentConfig({
    input:  'src/main-gallery.js',
    out: 'public/build/gallery.js',
    cssOut: 'gallery.css'
  }),
  componentConfig({
    input:  'src/main-article-teasers.js',
    out: 'public/build/article-teasers.js',
    cssOut: 'article-teasers.css'
  }),
  componentConfig({
    input:  'src/main-youtube-video.js',
    out: 'public/build/youtube-video.js',
    cssOut: 'youtube-video.css'
  }),
  componentConfig({
    input:  'src/main-text-box.js',
    out: 'public/build/text-box.js',
    cssOut: 'text-box.css'
  }),
  componentConfig({
    input:  'src/main-image-box.js',
    out: 'public/build/image-box.js',
    cssOut: 'image-box.css'
  })
];
