import adapter from '@sveltejs/adapter-static';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isGitHubPages && repoName ? `/${repoName}` : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: basePath
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
