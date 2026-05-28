/**
 * Compatibility helpers for echarts and zrender.
 */

/**
 * In echarts 6, DataStore.initData unconditionally calls provider.getSource()
 * on custom data providers. Custom providers that only define {count, getItem}
 * (without getSource) will throw "provider.getSource is not a function".
 *
 * This helper wraps such providers so they are compatible with echarts 6.
 *
 * Ensure data passed to SeriesData.initData is compatible with echarts 6.
 * If data is a custom provider object (has count/getItem but no getSource),
 * add the required getSource method.
 *
 * @param {Array|Object} data - The data or custom provider.
 * @returns {Array|Object} The data, possibly patched with getSource.
 */
export function ensureDataProvider(data) {
  if (data && typeof data === 'object' && !Array.isArray(data) && typeof data.count === 'function' && typeof data.getItem === 'function' && typeof data.getSource !== 'function') {
    data.getSource = function () {
      return {
        sourceFormat: 'original',
        // Minimal Source-like shape expected by DataStore
        seriesLayoutBy: 'column',
        startIndex: 0,
        dimensionsDefine: null
      };
    }; // DataStore may also check these properties


    if (data.persistent == null) {
      data.persistent = true;
    }
  }

  return data;
}
/**
 * NOTE: Keep this method idempotent.
 */

export function zrRefreshMonkeyPatch(zr, afterZrRealRefresh) {
  if (zr.__ECGLOnRefresh) {
    return;
  }

  zr.__ECGLOnRefresh = true; // Since zrender@6.1.0, a immediate refresh is performed if and only if `zr._refresh` is called,
  // and no `zr._refresh` method.
  // Otherwise, in previous zrender, it is performed if and only if `zr.refreshImmediately` is called.

  var patchedMethodName = zr._refresh ? '_refresh' : 'refreshImmediately';
  var oldZrMethod = zr[patchedMethodName];

  zr[patchedMethodName] = function () {
    oldZrMethod.apply(this, arguments);
    afterZrRealRefresh();
  };
}