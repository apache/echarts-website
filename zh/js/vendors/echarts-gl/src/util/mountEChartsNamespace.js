/**
 * Best-effort property mount for echarts namespace objects.
 * Avoid direct assignment to import namespace objects, which strict ESM
 * toolchains may reject with ASSIGN_TO_IMPORT.
 *
 * @param {Object} target
 * @param {string} key
 * @param {*} value
 * @return {boolean}
 */
export function mountEChartsNamespace(target, key, value) {
    try {
        Object.defineProperty(target, key, {
            value: value,
            configurable: true,
            writable: true
        });
        return true;
    } catch (e) {
    }

    try {
        return Reflect.set(target, key, value);
    } catch (e) {
    }

    return false;
}
