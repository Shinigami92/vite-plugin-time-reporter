import type { Plugin } from 'vite';
import type { SpyInstance } from 'vitest';
import { describe, expect, it, vi } from 'vitest';
import timeReporter from '../src';

describe('index', () => {
  it('should export a function by default', () => {
    expect(timeReporter).toBeTypeOf('function');
  });

  it('should return a plugin with correct name and apply on build', () => {
    const plugin: Plugin = timeReporter();
    expect(plugin).toBeTypeOf('object');
    expect(plugin.name).toBe('vite-plugin-build-time');
    expect(plugin.apply).toBe('build');
  });

  it('should return a plugin with correct hooks', () => {
    const plugin: Plugin = timeReporter();
    expect(plugin.buildStart).toBeTypeOf('function');
    expect(plugin.buildEnd).toBeTypeOf('function');
    expect(plugin.renderStart).toBeTypeOf('function');
    expect(plugin.renderError).toBeTypeOf('function');
    expect(plugin.closeBundle).toBeTypeOf('function');
  });

  it('should ', () => {
    vi.useFakeTimers();

    const plugin: Plugin = timeReporter();

    const spyConsoleTable: SpyInstance<
      [tabularData: any, properties?: readonly string[] | undefined],
      void
    > = vi.spyOn(console, 'table');

    // @ts-expect-error
    plugin.buildStart();

    vi.advanceTimersByTime(2010);

    // @ts-expect-error
    plugin.buildEnd();

    vi.advanceTimersByTime(1030);

    // @ts-expect-error
    plugin.renderStart();

    vi.advanceTimersByTime(3020);

    // @ts-expect-error
    plugin.closeBundle();

    expect(spyConsoleTable).toBeCalledTimes(1);
    expect(spyConsoleTable).toBeCalledWith({
      build: {
        time: '2.010s',
      },
      render: {
        time: '3.020s',
      },
      full: {
        time: '6.060s',
      },
    });

    vi.restoreAllMocks();
  });
});
