export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"start-60180ee1.js","js":["start-60180ee1.js","chunks/vendor-641c7987.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "test/savable",
				pattern: /^\/test\/savable\/?$/,
				names: [],
				types: [],
				path: "/test/savable",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		validators: async () => {
			
			return {  };
		}
	}
};
