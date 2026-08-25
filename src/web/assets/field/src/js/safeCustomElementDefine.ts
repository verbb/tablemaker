/**
 * Multiple Verbb plugins each ship a Plugin Kit register bundle on the same CP
 * page. Lit's `@customElement` always calls `customElements.define`, so the
 * second copy of e.g. `pk-spinner` throws NotSupportedError and aborts the rest
 * of that bundle. Skip redefine — first registrant wins (same kit tags).
 *
 * Import this module first from every plugin-kit-register entry. Remove once
 * `@verbb/plugin-kit-web` ships an idempotent `@customElement` (Unreleased).
 */
const registry = customElements;

if (!(registry as typeof customElements & { __pkSafeDefine?: boolean }).__pkSafeDefine) {
    const nativeDefine = registry.define.bind(registry);

    registry.define = ((
        name: string,
        constructor: CustomElementConstructor,
        options?: ElementDefinitionOptions,
    ) => {
        if (registry.get(name)) {
            return;
        }

        nativeDefine(name, constructor, options);
    }) as typeof customElements.define;

    (registry as typeof customElements & { __pkSafeDefine?: boolean }).__pkSafeDefine = true;
}
