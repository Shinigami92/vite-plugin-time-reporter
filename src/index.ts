import type { Plugin } from 'vite';

export function timeReporter(): Plugin {
  const full: Date = new Date();

  let build: Date;
  let buildEnd: Date;
  let render: Date;

  return {
    name: 'vite-plugin-build-time',
    apply: 'build',
    buildStart() {
      build = new Date();
    },
    buildEnd() {
      buildEnd = new Date();
    },
    renderStart() {
      render = new Date();
    },
    renderError() {
      render = new Date();
    },
    closeBundle() {
      const end: Date = new Date();
      // Catch potential render NPEs
      try {
        console.table({
          build: {
            time: `${((buildEnd.getTime() - build.getTime()) / 1000).toFixed(
              3,
            )}s`,
          },
          render: {
            time: `${((end.getTime() - render.getTime()) / 1000).toFixed(3)}s`,
          },
          full: {
            time: `${((end.getTime() - full.getTime()) / 1000).toFixed(3)}s`,
          },
        });
      } catch (error) {
        if (error instanceof Error) {
          this.warn(error);
        }
      }
    },
  };
}

export default timeReporter;
