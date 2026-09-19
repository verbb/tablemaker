import{S as e,_ as t,a as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,u as m,x as h,y as g}from"./icons-BR8JcQj2-CqR11aHb.js";import{a as _,c as v,d as y,f as b,h as x,i as S,l as C,n as ee,o as w,p as T,r as te,s as ne,t as re,u as E}from"./directive-Dt008SrX.js";import{_ as ie,a as ae,c as oe,d as se,f as ce,g as le,h as ue,i as de,l as fe,m as pe,n as me,o as he,p as ge,r as _e,s as ve,u as ye,v as be,y as xe}from"./pk-input-CF_icEtR-YSIbFemU.js";import{a as Se,d as Ce,f as D,i as we,l as Te,n as Ee,r as De,s as Oe,t as ke,u as Ae}from"./animate-with-class-CsDwYnXL-DpFfZCiB.js";import{i as je,n as Me,r as Ne,t as Pe}from"./form-control.styles-BQdimE5o-1wlcCSTt.js";import"./unsafe-html-CeyHfull.js";function Fe(e=`default`){return e===`xxs`||e===`xs`?`xxs`:e===`lg`||e===`xl`?`sm`:`xs`}function Ie(e=`default`,t){return t||(e===`primary`||e===`secondary`||e===`dashed`||e===`outline`||e===`transparent`?e:`default`)}var Le=[ne,x`
        @layer pk-component {
            :host {
                display: block;
                box-sizing: border-box;
            }

            :host([centered]) {
                position: absolute;
                top: 50%;
                left: 50%;
                display: block;
                width: fit-content;
                height: fit-content;
                margin: 0;
                transform: translate(-50%, -50%);
            }

            .spinner {
                display: block;
                box-sizing: border-box;
                margin-inline: auto;
                border-style: solid;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-radius: 50%;
                animation: pk-spinner-spin 0.5s linear infinite;
            }

            /* Sizes */
            :host([size='xxs']) .spinner {
                width: 0.75rem;
                height: 0.75rem;
                border-width: 1px;
            }

            :host([size='xs']) .spinner {
                width: 1rem;
                height: 1rem;
                border-width: 2px;
            }

            :host([size='sm']) .spinner,
            :host(:not([size])) .spinner {
                width: 1.5rem;
                height: 1.5rem;
                border-width: 2px;
            }

            :host([size='md']) .spinner {
                width: 2rem;
                height: 2rem;
                border-width: 2px;
            }

            :host([size='lg']) .spinner {
                width: 3rem;
                height: 3rem;
                border-width: 2px;
            }

            :host([size='xl']) .spinner {
                width: 4rem;
                height: 4rem;
                border-width: 2px;
            }

            /* Variants — matched to button loading contrast */
            :host([variant='default']:not([tone])) .spinner {
                border-top-color: var(--pk-color-red-500);
                border-right-color: var(--pk-color-red-500);
            }

            :host([variant='primary']:not([tone])) .spinner,
            :host([variant='secondary']:not([tone])) .spinner {
                border-top-color: var(--pk-color-white);
                border-right-color: var(--pk-color-white);
            }

            :host([variant='dashed']:not([tone])) .spinner,
            :host([variant='outline']:not([tone])) .spinner,
            :host([variant='transparent']:not([tone])) .spinner {
                border-top-color: var(--pk-color-gray-700);
                border-right-color: var(--pk-color-gray-700);
            }

            /* Standalone tone overrides */
            :host([tone='sky']) .spinner {
                border-top-color: var(--pk-color-sky-600);
                border-right-color: var(--pk-color-sky-600);
            }

            :host([tone='emerald']) .spinner {
                border-top-color: var(--pk-color-emerald-600);
                border-right-color: var(--pk-color-emerald-600);
            }

            :host([tone='violet']) .spinner {
                border-top-color: var(--pk-color-violet-600);
                border-right-color: var(--pk-color-violet-600);
            }

            :host([tone='amber']) .spinner {
                border-top-color: var(--pk-color-amber-500);
                border-right-color: var(--pk-color-amber-500);
            }

            @keyframes pk-spinner-spin {
                to {
                    transform: rotate(360deg);
                }
            }
        }
    `],Re=class extends S{constructor(...e){super(...e),this.variant=`default`,this.size=`sm`,this.centered=!1}static{this.styles=Le}render(){return T`
            <div part="base" class="spinner" aria-hidden="true"></div>
        `}};_([E({reflect:!0})],Re.prototype,`variant`,void 0),_([E({reflect:!0})],Re.prototype,`size`,void 0),_([E({reflect:!0})],Re.prototype,`tone`,void 0),_([E({type:Boolean,reflect:!0})],Re.prototype,`centered`,void 0),Re=_([w(`pk-spinner`)],Re);var ze=x`
    @layer pk-component {
        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
            vertical-align: middle;
            overflow: visible;
        }
    }
`,Be=[ne,ze,be(),ie(`.button`),xe(),le(`.button`),x`
        @layer pk-component {
            :host {
                font-family: var(--pk-font-family);
                cursor: pointer;
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
                /*
                 * Slotted labels inherit from the host — pin the size-token font
                 * (and button line-height) so Craft CP / Tailwind hosts match.
                 */
                font-size: var(--pk-btn-font);
                line-height: 1.2;
            }

            :host([disabled]) {
                cursor: not-allowed;
                pointer-events: none;
            }

            :host([loading]):not([disabled]) {
                pointer-events: none;
            }

            .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: var(--pk-btn-icon-gap);
                box-sizing: border-box;
                width: auto;
                margin: 0;
                /* Every button carries a 1px border (transparent for fill/plain variants) so the box
                 * model is identical across variants and states. Prevents width shift when swapping a
                 * button between filled and outline/dashed, or toggling states. Matches Bootstrap
                 * (transparent baseline) and  (border always present, only color changes).
                 */
                border: 1px solid transparent;
                border-radius: var(--pk-btn-radius);
                font: inherit;
                font-size: var(--pk-btn-font);
                font-weight: 400;
                line-height: 1.2;
                text-decoration: none;
                white-space: nowrap;
                /* Inherit host cursor so className/style (e.g. cursor-move) pierce shadow. */
                cursor: inherit;
                user-select: none;
                vertical-align: middle;
                appearance: none;
                background: var(--pk-btn-fill, var(--pk-action-fill));
                color: var(--pk-btn-on, var(--pk-action-on));
                height: var(--pk-btn-height);
                min-height: var(--pk-btn-height);
                /* Block padding defaults to 0 (height tokens center content). Override for nav rows. */
                padding-block: var(--pk-btn-padding-block, 0);
                padding-inline: var(--pk-btn-padding-inline);
                transition: background-color 0.12s ease, box-shadow 0.12s ease, color 0.12s ease;
            }

            .button:disabled {
                opacity: 0.5;
            }

            .icon-slot {
                display: none;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
            }

            .icon-slot--has-content {
                display: inline-flex;
            }

            /* Fixed token sizes for all icons (labeled or icon-only) — matches plugin-kit-react Button. */
            .icon-slot slot::slotted(svg),
            slot[name='start']::slotted(svg),
            slot[name='end']::slotted(svg) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                flex-shrink: 0;
                pointer-events: none;
            }

            .icon-slot slot::slotted(img),
            slot[name='start']::slotted(img),
            slot[name='end']::slotted(img) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                object-fit: contain;
                flex-shrink: 0;
                pointer-events: none;
            }

            /* pk-icon sizes itself from font-size (1em), so scale it to the
             * icon token. This keeps the idiomatic slotted pk-icon usage in
             * sync with raw slotted svg. Set width/height explicitly — %/size-full
             * collapses when the icon-slot has no definite box.
             */
            .icon-slot slot::slotted(pk-icon),
            slot[name='start']::slotted(pk-icon),
            slot[name='end']::slotted(pk-icon) {
                font-size: var(--pk-btn-icon-size);
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                /* Kill pk-icon's text-baseline nudge (-0.125em) — flex slots center optically. */
                vertical-align: 0;
                flex-shrink: 0;
                pointer-events: none;
            }

            .label {
                display: inline-flex;
                align-items: center;
                min-width: 0;
                line-height: 1.2;
            }

            /* Trailing slot (status): grow + clip the label so end sits at the far edge
             * and long titles truncate instead of colliding with the indicator.
             */
            .button:has(.icon-slot--end.icon-slot--has-content) .label:not(.is-empty) {
                flex: 1 1 auto;
                overflow: hidden;
            }

            .label.is-empty {
                display: none;
            }

            /* Icon-only (no label): square hit box = size height. Button owns the target;
             * glyph size comes from --pk-btn-icon-size. Do not Tailwind-size the Icon.
             * Opt out with icon (compact), size=none, or group-trigger (narrow disclosure cap).
             */
            :host(:not([icon]):not([size='none']):not([group-trigger])) .button:not(.has-label) {
                width: var(--pk-btn-height);
                min-width: var(--pk-btn-height);
                padding-inline: 0;
            }

            /* Compact density (icon attr): padless box that hugs the glyph.
             * size still drives --pk-btn-icon-size; height/width tiers do not apply.
             * Use for dense x / ellipsis in cells — not for table action rows (prefer square above).
             * line-height: 0 collapses whitespace flex-struts so the glyph sits dead-center.
             */
            :host([icon]) {
                display: inline-flex;
                line-height: 0;
                vertical-align: middle;
            }

            :host([icon]) .button {
                display: flex;
                width: auto;
                min-width: 0;
                height: auto;
                min-height: 0;
                padding-inline: 0.25rem;
                padding-block: 0;
                line-height: 0;
                align-items: center;
                justify-content: center;
            }

            /* Keep label space while loading even before slotchange runs. */
            .button.loading .label.is-empty {
                display: inline-flex;
                visibility: hidden;
            }

            /* Sizes — token-driven scale (see tokens.css) */
            :host([size='xxs']) {
                --pk-btn-height: var(--pk-btn-height-xxs);
                --pk-btn-font: var(--pk-btn-font-xxs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xxs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xxs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xxs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xxs);
                --pk-btn-radius: var(--pk-btn-radius-xxs);
            }

            :host([size='xs']) {
                --pk-btn-height: var(--pk-btn-height-xs);
                --pk-btn-font: var(--pk-btn-font-xs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xs);
                --pk-btn-radius: var(--pk-btn-radius-xs);
            }

            :host([size='sm']) {
                --pk-btn-height: var(--pk-btn-height-sm);
                --pk-btn-font: var(--pk-btn-font-sm);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-sm);
                --pk-btn-icon-size: var(--pk-btn-icon-size-sm);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-sm);
                --pk-btn-caret-size: var(--pk-btn-caret-size-sm);
                --pk-btn-radius: var(--pk-btn-radius-sm);
            }

            :host([size='default']) {
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
            }

            :host([size='lg']) {
                --pk-btn-height: var(--pk-btn-height-lg);
                --pk-btn-font: var(--pk-btn-font-lg);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-lg);
                --pk-btn-icon-size: var(--pk-btn-icon-size-lg);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-lg);
                --pk-btn-caret-size: var(--pk-btn-caret-size-lg);
                --pk-btn-radius: var(--pk-btn-radius-lg);
            }

            :host([size='xl']) {
                --pk-btn-height: var(--pk-btn-height-xl);
                --pk-btn-font: var(--pk-btn-font-xl);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xl);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xl);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xl);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xl);
                --pk-btn-radius: var(--pk-btn-radius-xl);
            }

            /* No preset scale — size to content or set --pk-btn-* on the host for one-off dimensions
             * (height, padding, font, icon, radius) without fighting a named size tier.
             * Pair with icon for a padless glyph host, or set --pk-btn-padding-inline / --pk-btn-height yourself.
             */
            :host([size='none']) {
                --pk-btn-height: auto;
                --pk-btn-font: inherit;
                --pk-btn-padding-inline: 0px;
                --pk-btn-padding-block: 0px;
                --pk-btn-icon-size: 1em;
                --pk-btn-icon-gap: 0px;
                --pk-btn-caret-size: 1em;
                --pk-btn-radius: 0px;
            }

            :host([size='none']) .button {
                height: auto;
                min-height: auto;
                width: 100%;
            }

            /* Variants */
            :host([variant='default']) {
                --pk-btn-fill: var(--pk-action-fill);
                --pk-btn-fill-hover: var(--pk-action-fill-hover);
                --pk-btn-fill-active: var(--pk-action-fill-active);
                --pk-btn-on: var(--pk-action-on);
            }

            :host([variant='primary']) {
                --pk-btn-fill: var(--pk-action-primary-fill);
                --pk-btn-fill-hover: var(--pk-action-primary-fill-hover);
                --pk-btn-fill-active: var(--pk-action-primary-fill-active);
                --pk-btn-on: var(--pk-action-primary-on);
            }

            :host([variant='primary']) .button,
            :host([variant='secondary']) .button {
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
            }

            :host([variant='secondary']) {
                --pk-btn-fill: var(--pk-color-gray-500);
                --pk-btn-fill-hover: var(--pk-color-gray-550);
                --pk-btn-fill-active: var(--pk-color-gray-600);
                --pk-btn-on: var(--pk-color-white);
            }

            :host([variant='outline']) .button {
                background: transparent;
                border-color: var(--pk-color-slate-400);
                color: var(--pk-color-gray-700);
            }

            :host([variant='transparent']) .button {
                background: transparent;
                color: var(--pk-color-gray-700);
            }

            /* link/none opt out of the shared transparent 1px border: they never render a border, so
             * carrying one only pads the box by 2px inline (and 2px block at size='none', where height
             * is auto). These are the "inline text" / "no chrome" variants — content-sized is the point,
             * and neither participates in button-group border joins. Other variants keep the stable box.
             */
            /*
             * Craft CP sets --link-color on :root (inherits into shadow). Prefer that,
             * then kit --pk-color-link — not sky-700 (reads as a different “CP blue”).
             * Color on :host so consumer utilities (e.g. text-[var(--link-color)]) can override.
             * Height must be content-sized — default --pk-btn-height (34px) bloated table rows.
             */
            :host([variant='link']) {
                color: var(--link-color, var(--pk-color-link));
                --pk-btn-height: auto;
                --pk-btn-padding-inline: 0;
                --pk-btn-padding-block: 0;
            }

            :host([variant='link']) .button {
                background: transparent;
                border-width: 0;
                border-radius: 0;
                color: inherit;
                width: auto;
                height: auto;
                min-height: 0;
                padding: 0;
                text-underline-offset: 2px;
            }

            :host([variant='dashed']) .button {
                background: transparent;
                border-style: dashed;
                border-color: var(--pk-color-slate-500);
                color: var(--pk-color-gray-700);
            }

            :host([variant='none']) .button {
                border-width: 0;
                border-radius: 0;
                background: transparent;
                color: inherit;
            }

            /* Interaction — pseudo-classes only; playground matrices use dev/pk-button-demo-states.css */
            .button:hover:not(:disabled) {
                background: var(--pk-btn-fill-hover, var(--pk-btn-fill));
            }

            :host([variant='outline']) .button:hover:not(:disabled),
            :host([variant='transparent']) .button:hover:not(:disabled),
            :host([variant='dashed']) .button:hover:not(:disabled) {
                background: var(--pk-color-slate-150);
            }

            :host([variant='link']) .button:hover:not(:disabled) {
                background: transparent;
                text-decoration: underline;
            }

            :host([variant='none']) .button:hover:not(:disabled) {
                background: transparent;
            }

            .button:active:not(:disabled) {
                background: var(--pk-btn-fill-active, var(--pk-btn-fill-hover, var(--pk-btn-fill)));
            }

            :host([variant='outline']) .button:active:not(:disabled),
            :host([variant='transparent']) .button:active:not(:disabled),
            :host([variant='dashed']) .button:active:not(:disabled) {
                background: var(--pk-color-slate-200);
            }

            :host([variant='link']) .button:active:not(:disabled),
            :host([variant='none']) .button:active:not(:disabled) {
                background: transparent;
            }

            .button:focus {
                outline: none;
            }

            .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            /* Bordered variants: fold the button's own border into the focus ring by recoloring it to
             * the accent (and solidifying dashed) so focus reads as one cohesive ring instead of a
             * doubled border. The ring is thinned to 1px here because the recolored 1px border already
             * supplies the other half — total 2px, matching the filled variants' ring weight.
             */
            :host([variant='outline']) .button:focus-visible,
            :host([variant='dashed']) .button:focus-visible {
                border-color: var(--pk-color-sky-600);
                box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 5px 1px hsl(from var(--pk-color-sky-600) h s l / 0.7);
            }

            :host([variant='dashed']) .button:focus-visible {
                border-style: solid;
            }

            :host(.pk-dialog__close) .button:focus-visible {
                box-shadow: 0 0 0 2px var(--pk-color-gray-600);
            }

            :host-context(pk-button-group) {
                position: relative;
            }

            :host-context(pk-button-group[orientation='vertical']) {
                display: block;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group[orientation='vertical']) .button {
                width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group:focus-visible) {
                z-index: 2;
            }

            /* Bordered variants — matching border divider (filled uses margin gap via buttonGroupIndentStyles) */

            :host([variant='primary']) .button:focus-visible,
            :host([variant='secondary']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus-inset);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button {
                background: var(--pk-color-gray-500);
                color: var(--pk-color-white);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:hover:not(:disabled) {
                background: var(--pk-color-gray-550);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:active:not(:disabled) {
                background: var(--pk-color-gray-600);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([variant='link']) .button:focus-visible {
                box-shadow: none;
                text-decoration: underline;
            }

            .button.loading {
                position: relative;
                cursor: default;
                pointer-events: none;
            }

            .label.loading {
                visibility: hidden;
            }

            .button.loading .icon-slot,
            .button.loading slot[name='start']::slotted(*),
            .button.loading slot[name='end']::slotted(*) {
                visibility: hidden;
            }

            .button.caret .icon-slot--end.icon-slot--has-content {
                display: none;
            }

            /* Scope to the caret span — the button host also gets class caret when
               with-caret is set; an unscoped .caret rule was adding 2px margin
               to the whole button and shifting dropdown anchors left. */
            .button > .caret {
                display: inline-flex;
                align-self: center;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
                /* Sits slightly further from the label than the flex gap alone. */
                margin-inline-start: 2px;
            }

            /* Caret has its own per-size token (--pk-btn-caret-size), kept deliberately smaller than
             * --pk-btn-icon-size so it reads as a subordinate dropdown affordance next to real icons.
             */
            .button > .caret svg {
                display: block;
                width: var(--pk-btn-caret-size);
                height: var(--pk-btn-caret-size);
            }

            :host([group-trigger]) .button {
                padding-inline: 6px;
            }

            /* Compact disclosure cap — hide content, keep only the shared SVG caret (centered). */
            :host([group-trigger]) .label,
            :host([group-trigger]) .icon-slot {
                display: none;
            }

            :host([group-trigger]) .button > .caret {
                margin-inline-start: 0;
            }

            :host([size='sm'][group-trigger]) .button,
            :host([size='xs'][group-trigger]) .button,
            :host([size='xxs'][group-trigger]) .button {
                padding-inline: 6px;
            }

            :host([size='lg'][group-trigger]) .button {
                padding-inline: 10px;
            }

            :host([size='xl'][group-trigger]) .button {
                padding-inline: 12px;
            }

            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: solid;
                border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: solid;
                border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: dashed;
                border-left-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: dashed;
                border-top-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-right-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-bottom-width: 0;
            }
        }
    `],Ve=n(i),O=class extends S{constructor(...e){super(...e),this.variant=`default`,this.size=`default`,this.disabled=!1,this.loading=!1,this.withCaret=!1,this.groupTrigger=!1,this.icon=!1,this.title=``,this.ariaLabel=null,this.type=`button`,this.hasDefaultSlotContent=!1,this.hasStartSlotContent=!1,this.hasEndSlotContent=!1,this.startSlotChanged=e=>{this.iconSlotChanged(e,`start`)},this.endSlotChanged=e=>{this.iconSlotChanged(e,`end`)},this.handleHostClick=e=>{if(this.disabled||this.loading||this.href||this.type!==`submit`&&this.type!==`reset`)return;let t=this.resolveAssociatedForm();if(t){if(e.preventDefault(),e.stopPropagation(),this.type===`reset`){t.reset();return}if(typeof t.requestSubmit==`function`){t.requestSubmit();return}t.dispatchEvent(new Event(`submit`,{bubbles:!0,cancelable:!0}))}}}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=Be}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}iconSlotChanged(e,t){let n=e.target.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE);t===`start`?this.hasStartSlotContent=n:this.hasEndSlotContent=n}buttonClasses(){return e({button:!0,"has-label":this.hasDefaultSlotContent,loading:this.loading,caret:this.withCaret,"group-trigger":this.groupTrigger})}connectedCallback(){super.connectedCallback(),this.setAttribute(`data-slot`,`button`),this.addEventListener(`click`,this.handleHostClick)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),super.disconnectedCallback()}resolveAssociatedForm(){let e=(this.form||this.getAttribute(`form`)||``).trim();if(e){let t=this.ownerDocument?.getElementById(e);if(t instanceof HTMLFormElement&&t.id!==`main`)return t}let t=this.closest(`form`);return t&&t.id!==`main`?t:null}render(){let e=this.spinnerSize||Fe(this.size),t=Ie(this.variant,this.spinnerVariant),n=!!this.href,r=this.ariaLabel||this.title||``;return T`
            ${n?T`
                    <a
                        part="base"
                        class=${this.buttonClasses()}
                        href=${this.href}
                        target=${this.target??y}
                        rel=${this.rel??y}
                        aria-label=${r||y}
                    >
                        ${this.renderInner(e,t)}
                    </a>
                `:T`
                    <button
                        part="base"
                        class=${this.buttonClasses()}
                        type=${this.type}
                        ?disabled=${this.disabled}
                        aria-disabled=${this.disabled?`true`:y}
                        aria-busy=${this.loading?`true`:y}
                        aria-label=${r||y}
                        name=${this.name??y}
                        value=${this.value??y}
                    >
                        ${this.renderInner(e,t)}
                    </button>
                `}
        `}renderInner(t,n){return T`
            <span
                class=${e({"icon-slot":!0,"icon-slot--start":!0,"icon-slot--has-content":this.hasStartSlotContent})}
            >
                <slot name="start" @slotchange=${this.startSlotChanged}></slot>
            </span>
            ${this.loading?T`
                    <pk-spinner
                        variant=${n}
                        size=${t}
                        tone=${this.spinnerTone??y}
                        centered
                    ></pk-spinner>
                `:y}
            <span
                class=${e({label:!0,"is-empty":!this.hasDefaultSlotContent,loading:this.loading})}
            >
                <slot @slotchange=${this.defaultSlotChanged}></slot>
            </span>
            <span
                class=${e({"icon-slot":!0,"icon-slot--end":!0,"icon-slot--has-content":this.hasEndSlotContent})}
            >
                <slot name="end" @slotchange=${this.endSlotChanged}></slot>
            </span>
            ${this.withCaret||this.groupTrigger?T`<span part="caret" class="caret">${D(Ve)}</span>`:y}
        `}};_([E({reflect:!0})],O.prototype,`variant`,void 0),_([E({reflect:!0})],O.prototype,`size`,void 0),_([E({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),_([E({type:Boolean,reflect:!0})],O.prototype,`loading`,void 0),_([E({reflect:!0,attribute:`spinner-size`})],O.prototype,`spinnerSize`,void 0),_([E({reflect:!0,attribute:`spinner-variant`})],O.prototype,`spinnerVariant`,void 0),_([E({reflect:!0,attribute:`spinner-tone`})],O.prototype,`spinnerTone`,void 0),_([E({type:Boolean,reflect:!0,attribute:`with-caret`})],O.prototype,`withCaret`,void 0),_([E({type:Boolean,reflect:!0,attribute:`group-trigger`})],O.prototype,`groupTrigger`,void 0),_([E({type:Boolean,reflect:!0})],O.prototype,`icon`,void 0),_([E()],O.prototype,`href`,void 0),_([E()],O.prototype,`target`,void 0),_([E()],O.prototype,`rel`,void 0),_([E()],O.prototype,`name`,void 0),_([E()],O.prototype,`value`,void 0),_([E()],O.prototype,`title`,void 0),_([E({attribute:`aria-label`})],O.prototype,`ariaLabel`,void 0),_([E()],O.prototype,`type`,void 0),_([E({reflect:!0})],O.prototype,`form`,void 0),_([C()],O.prototype,`hasDefaultSlotContent`,void 0),_([C()],O.prototype,`hasStartSlotContent`,void 0),_([C()],O.prototype,`hasEndSlotContent`,void 0),O=_([w(`pk-button`)],O);function He(){return T`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path
                fill="currentColor"
                d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z"
            />
        </svg>
    `}function Ue(){return T`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path fill="currentColor" d="M96 352V288H544V352H96z" />
        </svg>
    `}var We=[x`
    @layer pk-component {
        .control {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            width: var(--pk-checkbox-size);
            height: var(--pk-checkbox-size);
            border: 1px solid var(--pk-checkbox-border-color, #c0cbd9);
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-white);
            cursor: pointer;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([disabled]) .control {
            cursor: not-allowed;
        }

        .input:focus-visible + .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 4px 0 hsl(from var(--pk-color-sky-600) h s l / 0.7);
        }

        :host([invalid]) .control,
        .input[aria-invalid='true'] + .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .input:focus-visible + .control,
        .input[aria-invalid='true']:focus-visible + .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: 0 0 0 1px var(--pk-color-rose-600), 0 0 4px 0 hsl(from var(--pk-color-rose-600) h s l / 0.7);
        }

        .indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--pk-color-gray-900);
        }

        .icon-check,
        .icon-indeterminate {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
        }

        .icon-check svg {
            width: 14px;
            height: 14px;
            transform: translateY(1px) scale(1.2);
        }

        .icon-indeterminate svg {
            width: 12px;
            height: 12px;
        }

        :host([checked]) .icon-check,
        .input:checked + .control .icon-check {
            opacity: 1;
        }

        :host([indeterminate]) .icon-check,
        .input:indeterminate + .control .icon-check {
            opacity: 0;
        }

        :host([indeterminate]) .icon-indeterminate,
        .input:indeterminate + .control .icon-indeterminate {
            opacity: 1;
        }
    }
`,x`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            /* Hit target is the content-sized .root label (Craft checkbox-select), not the host. */
            cursor: default;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        :host([disabled]) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .root {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: flex-start;
            gap: var(--pk-control-label-gap);
            /* Content-sized like Craft's <label> beside the checkbox — not full-row. */
            width: fit-content;
            max-width: 100%;
            margin: 0;
            min-height: 0;
            cursor: pointer;
            user-select: none;
            position: relative;
        }

        :host([disabled]) .root {
            cursor: not-allowed;
        }

        .root--with-hint {
            align-items: flex-start;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
            appearance: none;
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .label {
            line-height: max(1rem, var(--pk-checkbox-size));
            /* Match form-control / Craft body labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            cursor: pointer;
        }

        :host([disabled]) .label {
            cursor: not-allowed;
        }

        :host(.all-option) .label {
            font-weight: 700;
        }

        .hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
        }

        .hint:empty {
            display: none;
        }
    }
`],k=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new je(this,`hint`),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.invalid=!1,this.checkboxValue=`on`,this.defaultChecked=!1,this.ariaLabel=null,this.hint=``,this.withHint=!1,this.hasDefaultSlotContent=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=We}static get validators(){return[...super.validators,ge({validationProperty:`checked`})]}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.checkboxValue:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked,this.indeterminate=!1}restoreFormState(e){this.checked=e===`on`||e===this.checkboxValue}updated(e){if(!this.input){super.updated(e);return}(e.has(`indeterminate`)||e.has(`checked`))&&(this.input.indeterminate=this.indeterminate,this.input.checked=this.checked),super.updated(e)}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let t=this.hasDefaultSlotContent,n=!!this.hint||this.hasSlotController.test(`hint`,this.withHint);return T`
            <label
                part="base"
                class=${e({root:!0,"root--with-hint":n})}
            >
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    name=${this.name??y}
                    value=${this.checkboxValue}
                    aria-labelledby=${t?`label`:y}
                    aria-describedby=${n?`hint`:y}
                    aria-label=${t?y:this.ariaLabel??y}
                    aria-invalid=${this.invalid?`true`:y}
                    @change=${this.handleChange}
                />
                <span part="control" class="control">
                    <span part="checked-icon" class="icon-check">${He()}</span>
                    <span part="indeterminate-icon" class="icon-indeterminate">${Ue()}</span>
                </span>
                ${t||n?T`
                        <span class="text">
                            ${t?T`
                                    <span part="label" class="label" id="label">
                                        <slot @slotchange=${this.defaultSlotChanged}></slot>
                                    </span>
                                `:T`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
                            ${n?T`
                                    <span part="hint" class="hint" id="hint">
                                        <slot name="hint">${this.hint}</slot>
                                    </span>
                                `:y}
                        </span>
                    `:T`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
            </label>
        `}};_([E({type:Boolean,reflect:!0})],k.prototype,`checked`,void 0),_([E({type:Boolean,reflect:!0})],k.prototype,`indeterminate`,void 0),_([E({type:Boolean,reflect:!0})],k.prototype,`disabled`,void 0),_([E({type:Boolean,reflect:!0})],k.prototype,`invalid`,void 0),_([E()],k.prototype,`checkboxValue`,void 0),_([E({attribute:`default-checked`,type:Boolean})],k.prototype,`defaultChecked`,void 0),_([E({attribute:`aria-label`})],k.prototype,`ariaLabel`,void 0),_([E()],k.prototype,`hint`,void 0),_([E({type:Boolean,attribute:`with-hint`})],k.prototype,`withHint`,void 0),_([v(`.input`)],k.prototype,`input`,void 0),_([C()],k.prototype,`hasDefaultSlotContent`,void 0),k=_([w(`pk-checkbox`)],k);function*Ge(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Ge(e.shadowRoot.activeElement)))}function Ke(e){let t=e.split(`-`)[0];return t===`inline-start`?`left`:t===`inline-end`?`right`:t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`}function qe(e,t,n,r,i){let a=Ke(e),o=t.x+t.width/2-n.x,s=t.y+t.height/2-n.y;return Math.abs(i?.y??0)>r&&(a===`top`||a===`bottom`)?`${o}px ${t.y+t.height/2-n.y}px`:{top:`${o}px calc(100% + ${r}px)`,bottom:`${o}px ${-r}px`,left:`calc(100% + ${r}px) ${s}px`,right:`${-r}px ${s}px`}[a]}function Je(e,t){if(!t){e.removeAttribute(`data-side`);return}e.setAttribute(`data-side`,Ke(t))}function Ye(e,t,n=100,r){let i=()=>e.getAttribute(`data-current-placement`)??t;return!r?.requireEvent&&e.hasAttribute(`data-current-placement`)?Promise.resolve(i()):new Promise(t=>{let a=!1,o=()=>{a||(a=!0,t(i()))};e.addEventListener(`pk-reposition`,o,{once:!0}),r?.requireEvent||requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.hasAttribute(`data-current-placement`)&&o()})}),window.setTimeout(o,n)})}var Xe=globalThis.HTMLElement!==void 0&&Object.prototype.hasOwnProperty.call(globalThis.HTMLElement.prototype,`popover`),Ze=Math.min,A=Math.max,Qe=Math.round,$e=Math.floor,j=e=>({x:e,y:e}),et={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function tt(e,t,n){return A(e,Ze(t,n))}function nt(e,t){return typeof e==`function`?e(t):e}function rt(e){return e.split(`-`)[0]}function it(e){return e.split(`-`)[1]}function at(e){return e===`x`?`y`:`x`}function ot(e){return e===`y`?`height`:`width`}function M(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function st(e){return at(M(e))}function ct(e,t,n){n===void 0&&(n=!1);let r=it(e),i=st(e),a=ot(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=_t(o)),[o,_t(o)]}function lt(e){let t=_t(e);return[ut(e),t,ut(t)]}function ut(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var dt=[`left`,`right`],ft=[`right`,`left`],pt=[`top`,`bottom`],mt=[`bottom`,`top`];function ht(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ft:dt:t?dt:ft;case`left`:case`right`:return t?pt:mt;default:return[]}}function gt(e,t,n,r){let i=it(e),a=ht(rt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ut)))),a}function _t(e){let t=rt(e);return et[t]+e.slice(t.length)}function vt(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function yt(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:vt(e)}function bt(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function xt(e,t,n){let{reference:r,floating:i}=e,a=M(t),o=st(t),s=ot(o),c=rt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=it(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function St(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=nt(t,e),p=yt(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=bt(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=bt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Ct=50,wt=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:St},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=xt(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Ct&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=xt(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Tt=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=nt(e,t)||{};if(l==null)return{};let d=yt(u),f={x:n,y:r},p=st(i),m=ot(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let ee=b/2-x/2,w=C/2-h[m]/2-1,T=Ze(d[_],w),te=Ze(d[v],w),ne=C-h[m]-te,re=C/2-h[m]/2+ee,E=tt(T,re,ne),ie=!c.arrow&&it(i)!=null&&re!==E&&a.reference[m]/2-(re<T?T:te)-h[m]/2<0,ae=ie?re<T?re-T:re-ne:0;return{[p]:f[p]+ae,data:{[p]:E,centerOffset:re-E-ae,...ie&&{alignmentOffset:ae}},reset:ie}}}),Et=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=nt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=rt(r),_=M(o),v=rt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[_t(o)]:lt(o)),x=p!==`none`;!d&&x&&b.push(...gt(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),ee=[],w=i.flip?.overflows||[];if(l&&ee.push(C[g]),u){let e=ct(r,a,y);ee.push(C[e[0]],C[e[1]])}if(w=[...w,{placement:r,overflows:ee}],!ee.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===M(t)||w.every(e=>M(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(x){let t=M(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Dt=new Set([`left`,`top`]);async function Ot(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=rt(n),s=it(n),c=M(n)===`y`,l=Dt.has(o)?-1:1,u=a&&c?-1:1,d=nt(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var kt=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Ot(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},At=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=nt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=M(i),p=at(f),m=u[p],h=u[f],g=(e,t)=>tt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},jt=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=nt(e,t),c=await i.detectOverflow(t,s),l=rt(n),u=it(n),d=M(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Ze(p-c[m],g),y=Ze(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*A(c.left,c.right):S=p-2*A(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let ee=await i.getDimensions(a.floating);return f!==ee.width||p!==ee.height?{reset:{rects:!0}}:{}}}};function Mt(){return typeof window<`u`}function Nt(e){return Pt(e)?(e.nodeName||``).toLowerCase():`#document`}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function P(e){return((Pt(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Pt(e){return Mt()?e instanceof Node||e instanceof N(e).Node:!1}function F(e){return Mt()?e instanceof Element||e instanceof N(e).Element:!1}function Ft(e){return Mt()?e instanceof HTMLElement||e instanceof N(e).HTMLElement:!1}function It(e){return!Mt()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}function Lt(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Rt(e){return/^(table|td|th)$/.test(Nt(e))}function zt(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Bt=/transform|translate|scale|rotate|perspective|filter/,Vt=/paint|layout|strict|content/,Ht=e=>!!e&&e!==`none`,Ut;function Wt(e){let t=F(e)?I(e):e;return Ht(t.transform)||Ht(t.translate)||Ht(t.scale)||Ht(t.rotate)||Ht(t.perspective)||!Kt()&&(Ht(t.backdropFilter)||Ht(t.filter))||Bt.test(t.willChange||``)||Vt.test(t.contain||``)}function Gt(e){let t=Yt(e);for(;Ft(t)&&!qt(t);){if(Wt(t))return t;if(zt(t))return null;t=Yt(t)}return null}function Kt(){return Ut??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Ut}function qt(e){return/^(html|body|#document)$/.test(Nt(e))}function I(e){return N(e).getComputedStyle(e)}function Jt(e){return F(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yt(e){if(Nt(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||It(e)&&e.host||P(e);return It(t)?t.host:t}function Xt(e){let t=Yt(e);return qt(t)?(e.ownerDocument||e).body:Ft(t)&&Lt(t)?t:Xt(t)}function Zt(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Xt(e),i=r===e.ownerDocument?.body,a=N(r);if(i){let e=Qt(a);return t.concat(a,a.visualViewport||[],Lt(r)?r:[],e&&n?Zt(e):[])}return t.concat(r,Zt(r,[],n))}function Qt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $t(e){let t=I(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ft(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Qe(n)!==a||Qe(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function en(e){return F(e)?e:e.contextElement}function tn(e){let t=en(e);if(!Ft(t))return j(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=$t(t),o=(a?Qe(n.width):n.width)/r,s=(a?Qe(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var nn=j(0);function rn(e){let t=N(e);return!Kt()||!t.visualViewport?nn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function an(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===N(e)}function on(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=en(e),o=j(1);t&&(r?F(r)&&(o=tn(r)):o=tn(e));let s=an(a,n,r)?rn(a):j(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=N(a),t=F(r)?N(r):r,n=e,i=Qt(n);for(;i&&t!==n;){let e=tn(i),t=i.getBoundingClientRect(),r=I(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=N(i),i=Qt(n)}}return bt({width:u,height:d,x:c,y:l})}function sn(e,t){let n=Jt(e).scrollLeft;return t?t.left+n:on(P(e)).left+n}function cn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-sn(e,n),y:n.top+t.scrollTop}}function ln(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=P(r),s=t?zt(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=j(1),u=j(0),d=Ft(r);if((d||!a)&&((Nt(r)!==`body`||Lt(o))&&(c=Jt(r)),d)){let e=on(r);l=tn(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?cn(o,c):j(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function un(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function dn(e){let t=Jt(e),n=e.ownerDocument.body,r=A(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=A(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+sn(e),o=-t.scrollTop;return I(n).direction===`rtl`&&(a+=A(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var fn=25;function pn(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=N(e),a=P(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Kt()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(sn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=fn&&(s-=o)}return{width:s,height:c,x:l,y:u}}function mn(e,t){let n=on(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=tn(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function hn(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=pn(e,n,t);else if(t===`document`)r=dn(P(e));else if(F(t))r=mn(t,n);else{let n=rn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return bt(r)}function gn(e,t){let n=t.get(e);if(n)return n;let r=Zt(e,[],!1).filter(e=>F(e)&&Nt(e)!==`body`),i=null,a=I(e).position===`fixed`,o=a?Yt(e):e;for(;F(o)&&!qt(o);){let e=I(o),t=Wt(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Yt(o)}return t.set(e,r),r}function _n(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?zt(t)?[]:gn(t,this._c):[].concat(n),r],o=hn(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=hn(t,a[e],i);s=A(n.top,s),c=Ze(n.right,c),l=Ze(n.bottom,l),u=A(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function vn(e){let{width:t,height:n}=$t(e);return{width:t,height:n}}function yn(e,t,n){let r=Ft(t),i=P(t),a=n===`fixed`,o=on(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=j(0);if((r||!a)&&((Nt(t)!==`body`||Lt(i))&&(s=Jt(t)),r)){let e=on(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=sn(i));let l=i&&!r&&!a?cn(i,s):j(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function bn(e){return I(e).position===`static`}function xn(e,t){if(!Ft(e)||I(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return P(e)===n&&(n=n.ownerDocument.body),n}function Sn(e,t){let n=N(e);if(zt(e))return n;if(!Ft(e)){let t=Yt(e);for(;t&&!qt(t);){if(F(t)&&!bn(t))return t;t=Yt(t)}return n}let r=xn(e,t);for(;r&&Rt(r)&&bn(r);)r=xn(r,t);return r&&qt(r)&&bn(r)&&!Wt(r)?n:r||Gt(e)||n}var Cn=async function(e){let t=this.getOffsetParent||Sn,n=this.getDimensions,r=await n(e.floating);return{reference:yn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wn(e){return I(e).direction===`rtl`}var Tn={convertOffsetParentRelativeRectToViewportRelativeRect:ln,getDocumentElement:P,getClippingRect:_n,getOffsetParent:Sn,getElementRects:Cn,getClientRects:un,getDimensions:vn,getScale:tn,isElement:F,isRTL:wn};function En(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Dn(e,t,n){let r=null,i,a=P(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=$e(d),h=$e(a.clientWidth-(u+f)),g=$e(a.clientHeight-(d+p)),_=$e(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:A(0,Ze(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!En(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=N(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function On(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=en(e),u=i||a?[...l?Zt(l):[],...t?Zt(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Dn(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?on(e):null;c&&g();function g(){let t=on(e);h&&!En(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var kn=kt,An=At,jn=Et,Mn=jt,Nn=Tt,Pn=(e,t,n)=>{let r=new Map,i=n??{},a={...Tn,...i.platform,_c:r};return wt(e,t,{...i,platform:a})};function Fn(e){return Ln(e)}function In(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ln(e){for(let t=e;t;t=In(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=In(e);t;t=In(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Wt(e)||t.tagName===`BODY`))return t}return null}function Rn(e,t){if(!t)return null;let n=e.getRootNode();if(n instanceof Document||n instanceof ShadowRoot){let e=n.getElementById(t);if(e)return e}return e.ownerDocument.getElementById(t)}var zn=class extends Event{constructor(){super(`pk-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Bn=x`
    @layer pk-component {
        :host {
            display: contents;
        }

        .popup {
            position: absolute;
            isolation: isolate;
            width: max-content;
            z-index: var(--pk-popup-z-index, 1000);
            /* Never transition coordinates — flip would animate the jump. */
            transition: none;

            /* Reset UA styles for [popover] — see  pk-popup. */
            inset: unset;
            padding: unset;
            margin: unset;
            height: unset;
            color: unset;
            background: unset;
            border: unset;
            overflow: unset;
        }

        .popup-fixed {
            position: fixed;
        }

        .popup:not(.active) {
            display: none;
        }

        /* Prefer visibility over opacity so enter animations are not fighting a
         * 0→1 fade. Matches base-ui isPositioned / hide-until-placed.
         */
        .popup.active:not(.positioned) {
            visibility: hidden;
            pointer-events: none;
        }

        .popup.show {
            animation: pk-popup-surface-in 100ms ease-out;
        }

        .popup.hide {
            animation: pk-popup-surface-out 100ms ease-in forwards;
        }

        @keyframes pk-popup-surface-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-popup-surface-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        .arrow {
            position: absolute;
            width: var(--pk-popup-arrow-size, 6px);
            height: var(--pk-popup-arrow-size, 6px);
            rotate: 45deg;
            background: var(--pk-popup-arrow-color, var(--pk-color-white));
            z-index: 1;
        }

        .hover-bridge {
            position: fixed;
            z-index: calc(var(--pk-popup-z-index, 1000) - 1);
            inset: 0;
            clip-path: polygon(
                var(--pk-hover-bridge-top-left-x, 0) var(--pk-hover-bridge-top-left-y, 0),
                var(--pk-hover-bridge-top-right-x, 0) var(--pk-hover-bridge-top-right-y, 0),
                var(--pk-hover-bridge-bottom-right-x, 0) var(--pk-hover-bridge-bottom-right-y, 0),
                var(--pk-hover-bridge-bottom-left-x, 0) var(--pk-hover-bridge-bottom-left-y, 0)
            );
            pointer-events: auto;
        }

        .hover-bridge:not(.hover-bridge-visible) {
            display: none;
        }
    }
`;function Vn(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e}function Hn(e){return e||(Xe?`absolute`:`fixed`)}function Un(e,t){if(Xe&&!Vn(e)&&t===`scroll`)return Zt(e).filter(e=>e instanceof Element)}var L=class extends S{constructor(...e){super(...e),this.anchor=``,this.active=!1,this.boundary=`viewport`,this.placement=`bottom-start`,this.distance=4,this.skidding=0,this.flip=!0,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=8,this.shift=!0,this.shiftPadding=8,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.autoSizePadding=8,this.anchorTracking=!0,this.hoverBridge=!1,this.anchorElement=null,this.settlingInitialPosition=!1,this.settleGeneration=0}static{this.styles=Bn}disconnectedCallback(){this.stop(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`active`)&&(this.active?(this.resolveAnchor(),this.start()):this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&!e.has(`active`)&&this.reposition()}reposition(){this.settlingInitialPosition||this.repositionAsync()}async repositionAsync(e=!0){let t=this.popupElement,n=this.arrow?this.arrowElement:null;if(!this.active||!this.anchorElement||!t)return!1;let r=Un(this.anchorElement,this.boundary),i=[kn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?i.push(Mn({apply:({rects:e})=>{let n=this.sync===`width`||this.sync===`both`,r=this.sync===`height`||this.sync===`both`;t.style.width=n?`${e.reference.width}px`:``,t.style.height=r?`${e.reference.height}px`:``}})):(t.style.width=``,t.style.height=``),this.flip&&i.push(jn({boundary:r,fallbackPlacements:this.flipFallbackPlacements?this.flipFallbackPlacements.split(` `).map(e=>e.trim()).filter(Boolean):void 0,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&i.push(An({boundary:r,padding:this.shiftPadding})),this.autoSize?i.push(Mn({boundary:r,padding:this.autoSizePadding,apply:({availableHeight:e,availableWidth:n})=>{let r=this.autoSize===`horizontal`||this.autoSize===`both`,i=this.autoSize===`vertical`||this.autoSize===`both`;r?t.style.setProperty(`--pk-popup-available-width`,`${Math.max(0,Math.floor(n))}px`):t.style.removeProperty(`--pk-popup-available-width`),i?t.style.setProperty(`--pk-popup-available-height`,`${Math.max(0,Math.floor(e))}px`):t.style.removeProperty(`--pk-popup-available-height`)}})):(t.style.removeProperty(`--pk-popup-available-width`),t.style.removeProperty(`--pk-popup-available-height`)),this.arrow&&n&&i.push(Nn({element:n,padding:this.arrowPadding}));let a=Hn(this.positionMethod),o=a===`fixed`;t.classList.toggle(`popup-fixed`,o);let s=Xe?e=>Tn.getOffsetParent(e,Fn):Tn.getOffsetParent,{x:c,y:l,middlewareData:u,placement:d}=await Pn(this.anchorElement,t,{placement:this.placement,middleware:i,strategy:a,platform:{...Tn,getOffsetParent:s}});if(!this.active||!t.isConnected)return!1;let f={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[d.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,d),Object.assign(t.style,{left:`${c}px`,top:`${l}px`,...o?{position:`fixed`}:{position:``}}),this.anchorElement){let e=this.anchorElement.getBoundingClientRect(),n=t.getBoundingClientRect();t.style.setProperty(`--pk-anchor-width`,`${e.width}px`),t.style.setProperty(`--pk-anchor-height`,`${e.height}px`);let r=qe(d,e,n,this.distance,u.shift);t.style.setProperty(`--pk-transform-origin`,r)}if(this.arrow&&n){let e=u.arrow?.x,t=u.arrow?.y,r=``,i=``,a=``,o=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`${this.arrowPadding}px`:``;r=typeof t==`number`?`${this.arrowPadding}px`:``,o=n}else this.arrowPlacement===`end`?(i=typeof e==`number`?`${this.arrowPadding}px`:``,a=typeof t==`number`?`${this.arrowPadding}px`:``):this.arrowPlacement===`center`?(o=typeof e==`number`?`50%`:``,r=typeof t==`number`?`50%`:``):(o=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(n.style,{top:r,right:i,bottom:a,left:o,transform:``,[f]:`calc(-1 * var(--pk-popup-arrow-size, 6px) / 2)`})}return requestAnimationFrame(()=>this.updateHoverBridge()),e&&this.dispatchEvent(new zn),!0}frames(e){return new Promise(t=>{let n=e=>{if(e<=0){t();return}requestAnimationFrame(()=>n(e-1))};n(e)})}async settleInitialPosition(){let e=++this.settleGeneration,t=this.popupElement;if(!t){this.settlingInitialPosition=!1;return}await this.frames(2),this.active&&e===this.settleGeneration&&(await this.repositionAsync(!1),t.offsetHeight,await this.frames(1),this.active&&e===this.settleGeneration&&(await this.repositionAsync(!1),this.active&&e===this.settleGeneration&&(t.classList.add(`positioned`),this.settlingInitialPosition=!1,requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new zn))))}resolveAnchor(){if(typeof this.anchor==`string`&&this.anchor){this.anchorElement=Rn(this,this.anchor);return}if(this.anchor instanceof Element||Vn(this.anchor)){this.anchorElement=this.anchor;return}let e=this.querySelector(`[slot="anchor"]`);e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]??null),this.anchorElement=e}async handleAnchorChange(){await this.stop(),this.resolveAnchor(),this.anchorElement&&this.active&&this.start()}usesPopoverTopLayer(){return Xe&&this.positionMethod!==`fixed`}stop(){return new Promise(e=>{let t=this.popupElement;this.settleGeneration+=1,this.settlingInitialPosition=!1,t?.classList.remove(`positioned`),this.usesPopoverTopLayer()&&t?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,t?.style.removeProperty(`--pk-transform-origin`),requestAnimationFrame(()=>e())):e(),this.removeAttribute(`data-current-placement`)})}releasePositioning(){this.cleanup&&=(this.cleanup(),void 0)}async awaitHidden(){await this.stop()}start(){this.anchorElement&&this.active&&this.isConnected&&this.popupElement&&(this.popupElement.classList.remove(`positioned`),this.settlingInitialPosition=!0,this.usesPopoverTopLayer()&&this.popupElement.showPopover?.(),this.anchorTracking&&(this.cleanup=On(this.anchorElement,this.popupElement,()=>{this.settlingInitialPosition||this.reposition()})),this.settleInitialPosition())}getContentElement(){let e=((this.shadowRoot?.querySelector(`slot:not([name])`))?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement);if(e)return e;for(let e of this.childNodes)if(e instanceof HTMLElement&&e.getAttribute(`slot`)!==`anchor`)return e;return null}updateHoverBridge(){let e=this.popupElement;if(!this.hoverBridge||!this.anchorElement||!e)return;let t=this.anchorElement.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.placement.includes(`top`)||this.placement.includes(`bottom`),i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;r?t.top<n.top?(i=t.left,a=t.bottom,o=t.right,s=t.bottom,c=n.left,l=n.top,u=n.right,d=n.top):(i=n.left,a=n.bottom,o=n.right,s=n.bottom,c=t.left,l=t.top,u=t.right,d=t.top):t.left<n.left?(i=t.right,a=t.top,o=n.left,s=n.top,c=t.right,l=t.bottom,u=n.left,d=n.bottom):(i=n.right,a=n.top,o=t.left,s=t.top,c=n.right,l=n.bottom,u=t.left,d=t.bottom),this.style.setProperty(`--pk-hover-bridge-top-left-x`,`${i}px`),this.style.setProperty(`--pk-hover-bridge-top-left-y`,`${a}px`),this.style.setProperty(`--pk-hover-bridge-top-right-x`,`${o}px`),this.style.setProperty(`--pk-hover-bridge-top-right-y`,`${s}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-x`,`${c}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-y`,`${l}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-x`,`${u}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-y`,`${d}px`)}render(){let t=!Xe||this.positionMethod===`fixed`,n=this.usesPopoverTopLayer();return T`
            <slot name="anchor" @slotchange=${()=>{this.handleAnchorChange()}}></slot>
            ${this.hoverBridge?T`
                <div
                    part="hover-bridge"
                    class=${e({"hover-bridge":!0,"hover-bridge-visible":this.active})}
                    aria-hidden="true"
                ></div>
            `:y}
            <div
                popover=${n?`manual`:y}
                part="popup"
                class=${e({popup:!0,active:this.active,"popup-fixed":t})}
            >
                ${this.arrow?T`<div part="arrow" class="arrow"></div>`:y}
                <slot></slot>
            </div>
        `}};_([E()],L.prototype,`anchor`,void 0),_([E({type:Boolean,reflect:!0})],L.prototype,`active`,void 0),_([E({attribute:`position-method`})],L.prototype,`positionMethod`,void 0),_([E({reflect:!0})],L.prototype,`boundary`,void 0),_([E({reflect:!0})],L.prototype,`placement`,void 0),_([E({type:Number})],L.prototype,`distance`,void 0),_([E({type:Number})],L.prototype,`skidding`,void 0),_([E({type:Boolean})],L.prototype,`flip`,void 0),_([E({attribute:`flip-fallback-placements`})],L.prototype,`flipFallbackPlacements`,void 0),_([E({attribute:`flip-fallback-strategy`})],L.prototype,`flipFallbackStrategy`,void 0),_([E({attribute:`flip-padding`,type:Number})],L.prototype,`flipPadding`,void 0),_([E({type:Boolean})],L.prototype,`shift`,void 0),_([E({attribute:`shift-padding`,type:Number})],L.prototype,`shiftPadding`,void 0),_([E({type:Boolean})],L.prototype,`arrow`,void 0),_([E({attribute:`arrow-placement`})],L.prototype,`arrowPlacement`,void 0),_([E({attribute:`arrow-padding`,type:Number})],L.prototype,`arrowPadding`,void 0),_([E()],L.prototype,`sync`,void 0),_([E({attribute:`auto-size`})],L.prototype,`autoSize`,void 0),_([E({attribute:`auto-size-padding`,type:Number})],L.prototype,`autoSizePadding`,void 0),_([E({attribute:`anchor-tracking`,type:Boolean})],L.prototype,`anchorTracking`,void 0),_([E({attribute:`hover-bridge`,type:Boolean})],L.prototype,`hoverBridge`,void 0),_([v(`.popup`)],L.prototype,`popupElement`,void 0),_([v(`.arrow`)],L.prototype,`arrowElement`,void 0),L=_([w(`pk-popup`)],L);var Wn=new Set([`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `,`Escape`]);function Gn(e){return e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function Kn(e){return e.filter(e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.getAttribute(`aria-disabled`)!==`true`&&e.getAttribute(`aria-hidden`)!==`true`)}function qn(e,t,n){if(n){n(t);return}let r=e[t];if(r instanceof HTMLElement&&`focusControl`in r&&typeof r.focusControl==`function`){r.focusControl();return}r?.focus()}function Jn(e){if(!e)return;let t=e.shadowRoot?.querySelector(`.option`);if(t instanceof HTMLButtonElement){t.click();return}e.click()}function Yn(e,t){let n=Kn(t.items),r=t.loop===!0;if(n.length===0)return t.currentIndex;let i=Math.max(0,t.currentIndex),a=n[i]??n[0];switch(i=n.indexOf(a),i<0&&(i=0),e.key){case`ArrowDown`:case`ArrowRight`:return e.preventDefault(),i=r&&i>=n.length-1?0:Math.min(i+1,n.length-1),qn(n,i,t.focusItem),t.onSelect(i),i;case`ArrowUp`:case`ArrowLeft`:return e.preventDefault(),i=r&&i<=0?n.length-1:Math.max(i-1,0),qn(n,i,t.focusItem),t.onSelect(i),i;case`Home`:return e.preventDefault(),i=0,qn(n,i,t.focusItem),t.onSelect(i),i;case`End`:return e.preventDefault(),i=n.length-1,qn(n,i,t.focusItem),t.onSelect(i),i;case`Enter`:case` `:return t.multiselect||(e.preventDefault(),Jn(n[i])),i;case`Escape`:return e.preventDefault(),t.onClose?.(),i;default:return i}}function Xn(e,t){let n=``,r=0,i=()=>{n=``,window.clearTimeout(r)};return{handleKey:a=>{if(a.key.length!==1||a.ctrlKey||a.metaKey||a.altKey)return;n+=a.key.toLowerCase(),window.clearTimeout(r),r=window.setTimeout(i,750);let o=Kn(e);for(let e=0;e<o.length;e+=1)if((o[e]?.textContent??``).trim().toLowerCase().startsWith(n)){t(e),a.preventDefault();return}},reset:i}}var Zn=e=>e.hidden||e.hasAttribute(`data-pk-filter-empty`),Qn=e=>{let t=[...e.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`)],n=(e,n)=>{for(let r=e+n;n<0?r>=0:r<t.length;r+=n){let e=t[r];if(e&&e.localName!==`pk-separator`)return e}return null};for(let e=0;e<t.length;e+=1){let r=t[e];if(!r||r.localName!==`pk-separator`)continue;let i=n(e,-1),a=n(e,1);r.hidden=!i||!a||Zn(i)||Zn(a)}};function $n(e,t=150){return e?new Promise(n=>{let r=!1,i=()=>{r||(r=!0,e.removeEventListener(`animationend`,a),window.clearTimeout(o),e.classList.remove(`closing`),n())},a=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&i()};e.classList.add(`closing`),e.addEventListener(`animationend`,a);let o=window.setTimeout(i,t)}):Promise.resolve()}function er(e){let{host:t,options:n,visible:r,listboxId:i,filterQuery:a,isSelected:o}=e;for(let e of n)e.selected=o(e.value),e.hidden=!r.includes(e),e.optionId=`${i}-option-${e.value}`,e.matchQuery=a;for(let e of t.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)],n=t.length>0&&t.every(e=>e.hidden);e.toggleAttribute(`data-pk-filter-empty`,n)}Qn(t)}var tr=class{constructor(e,t){this.getHandler=e,this.timer=null,this.requestId=0,this.abortController=null,this.callbacks=t,this.debounceMs=t.debounceMs??200,this.errorLabel=t.errorLabel??`options`}schedule(e){this.timer!==null&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.timer=null,this.run(e)},this.debounceMs)}cancel(){this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null),this.abortController?.abort(),this.abortController=null}async run(e){let t=this.getHandler();if(!t)return;let n=++this.requestId;if(this.abortController?.abort(),this.abortController=new AbortController,!e){this.callbacks.onEmptyQuery?.();return}this.callbacks.onLoading?.();try{let r=await t(e,this.abortController.signal);if(n!==this.requestId)return;this.callbacks.onResults(r)}catch(e){if(this.abortController?.signal.aborted||n!==this.requestId||e instanceof DOMException&&e.name===`AbortError`)return;console.error(`Failed to load ${this.errorLabel}:`,e),this.callbacks.onError?.(`Failed to load options. Please try again.`),this.callbacks.onResults([])}finally{n===this.requestId&&this.callbacks.onSettled?.()}}};function nr(e,t){let n=e.getLabel().toLowerCase(),r=e.value.toLowerCase(),i=(e.getSearchText?.()??n).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)}function rr(e,t,n){return n?n(e,t):nr(e,t)}function ir(e){if(e.panel instanceof Element){let t=e.panel.closest(`pk-popup`);if(t)return t;let n=e.panel.getRootNode();if(n instanceof ShadowRoot&&n.host.localName===`pk-popup`)return n.host}return e.host instanceof HTMLElement?e.host.shadowRoot?.querySelector(`pk-popup`)??e.host.querySelector(`:scope > pk-popup`)??e.host.querySelector(`pk-popup`):null}function ar(e,t={}){let n=e.composedPath();if(t.host&&n.includes(t.host)||t.anchor&&n.includes(t.anchor)||t.panel&&n.includes(t.panel))return!0;let r=ir(t);return r&&n.includes(r)?!0:n.some(e=>e instanceof HTMLElement?r&&e.classList.contains(`popup`)&&(e===r||r.contains(e))?!0:t.extraMatches?.(e)??!1:!1)}function or(e,t={}){return ar(e,t)}var sr=x`
    @layer pk-component {
        .pk-popup-content {
            transform-origin: var(--pk-transform-origin, top);
        }

        .pk-popup-content[data-open] {
            animation: pk-popup-content-in 100ms ease-out;
        }

        .pk-popup-content[data-open][data-side='bottom'] {
            animation-name: pk-popup-content-in-bottom;
        }

        .pk-popup-content[data-open][data-side='top'] {
            animation-name: pk-popup-content-in-top;
        }

        .pk-popup-content[data-open][data-side='left'] {
            animation-name: pk-popup-content-in-left;
        }

        .pk-popup-content[data-open][data-side='right'] {
            animation-name: pk-popup-content-in-right;
        }

        /* Exit: fade + zoom only — matches tw-animate animate-out / tooltip motion. */
        .pk-popup-content.closing {
            animation: pk-popup-content-out 100ms ease-in forwards;
        }
    }

    @keyframes pk-popup-content-in {
        from {
            opacity: 0;
            transform: scale(0.95);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes pk-popup-content-out {
        from {
            opacity: 1;
            transform: scale(1);
        }

        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes pk-popup-content-in-bottom {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-top {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-left {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }

    @keyframes pk-popup-content-in-right {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }
`,cr=class extends Event{constructor(e){super(`pk-create`,{bubbles:!0,cancelable:!0,composed:!0}),this.inputValue=e}},lr=[sr,x`
    ${ze}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-default);
            --pk-combobox-padding-block: 6px;
            --pk-combobox-padding-inline: 10px;
            --pk-combobox-font-size: var(--pk-font-size-base);
            --pk-combobox-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-combobox-decoration-size: 0.875rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 2rem;
            --pk-select-item-font-size: 14px;
            --pk-select-item-line-height: 1.4;
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel default: text-xs → 12px (was 11px). */
            --pk-select-group-label-font-size: 12px;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .control {
            display: inline-flex;
            align-items: center;
            --pk-combobox-control-gap: 0.5rem;
            gap: var(--pk-combobox-control-gap);
            /* Fill the host — consumers set min-width/width on :host; fit-content here
               left a dead hit strip beside the painted field (same class of bug as dropdown). */
            width: 100%;
            max-width: 100%;
            min-width: 0;
            min-height: var(--pk-combobox-min-height);
            margin: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-radius-lg);
            --pk-combobox-fill: var(--pk-color-slate-250);
            --pk-combobox-fill-hover: var(--pk-color-slate-300);
            background: var(--pk-combobox-fill);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            line-height: var(--pk-input-control-line-height, 1.25rem);
            white-space: nowrap;
            cursor: text;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .control[data-popup-open] {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled) {
            background: var(--pk-combobox-fill-hover);
        }

        :host(:not([disabled])) .control[data-popup-open]:hover:not(.is-disabled),
        :host(:not([disabled])) .control[data-popup-open]:focus-within:not(.is-disabled) {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-within,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .control-start,
        .control-end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-600);
        }

        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            width: var(--pk-combobox-decoration-size);
            height: var(--pk-combobox-decoration-size);
        }

        .combobox-input {
            flex: 1 1 auto;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            line-height: var(--pk-input-control-line-height, 1.25rem);
            outline: none;
        }

        .combobox-input::placeholder {
            color: currentColor;
        }

        :host([data-has-value]) .combobox-input::placeholder,
        .control[data-popup-open] .combobox-input::placeholder,
        .control:focus-within .combobox-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        /* Expand/clear: the button box IS the hit target. Negative margins cancel the
           control padding / half-gap in layout, while matching extra width/height keeps
           the painted (and clickable) box flush to the field edge — so flex centering
           places the glyph in the middle of the real hit area. */
        .icon-button,
        .clear-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: stretch;
            box-sizing: border-box;
            width: calc(var(--pk-combobox-decoration-size) + var(--pk-combobox-control-gap));
            height: auto;
            min-height: var(--pk-combobox-decoration-size);
            margin-block: calc(-1 * var(--pk-combobox-padding-block));
            margin-inline: calc(-0.5 * var(--pk-combobox-control-gap));
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            outline: none;
        }

        /* Trailing control absorbs the control's inline-end padding into its hit box,
           with the same 4px glyph inset as pk-copy-button[slot=end]. */
        .control > .expand-button,
        .control > .clear-button:last-child {
            width: calc(
                var(--pk-combobox-decoration-size) + (0.5 * var(--pk-combobox-control-gap)) +
                    var(--pk-combobox-padding-inline)
            );
            margin-inline-start: calc(-0.5 * var(--pk-combobox-control-gap));
            margin-inline-end: calc(-1 * var(--pk-combobox-padding-inline) + 4px);
        }

        .icon-button:disabled,
        .clear-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            pointer-events: none;
            color: var(--pk-color-gray-600);
        }

        .icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .clear-button-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .clear-button-icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .control--multiple {
            --pk-combobox-control-gap: 0.25rem;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            width: 100%;
            max-width: 100%;
            height: auto;
            min-height: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            gap: var(--pk-combobox-control-gap);
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: var(--pk-input-bg);
            cursor: text;
        }

        :host([multiple][width='full']) .control--multiple {
            width: 100%;
        }

        :host([multiple]) .control:hover:not(.is-disabled) {
            background: var(--pk-input-bg);
        }

        :host([multiple]:not([invalid]):not(:state(user-invalid))) .control[data-popup-open],
        :host([multiple]:not([invalid]):not(:state(user-invalid))) .control:focus-within,
        :host([multiple]:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-input-bg);
        }

        .chips {
            display: flex;
            flex: 0 1 auto;
            flex-wrap: wrap;
            gap: 0.25rem;
            align-items: center;
            min-width: 0;
        }

        .tag {
            /* v1 ComboboxChip: text-xs + py-[2px] → 20px; face color gray-700. */
            --pk-combobox-tag-height: 20px;
            --pk-combobox-tag-padding-inline-start: 6px;
            --pk-combobox-tag-remove-width: 1.25rem;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            gap: 0.125rem;
            max-width: 100%;
            height: var(--pk-combobox-tag-height);
            padding-block: 0;
            padding-inline: var(--pk-combobox-tag-padding-inline-start) 0;
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-slate-200);
            color: var(--pk-color-gray-700);
            font-size: 12px;
            font-weight: 500;
            line-height: 1rem;
            white-space: nowrap;
        }

        .tag-label {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Chip remove: fill the chip end so the glyph centers in the real target. */
        .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: stretch;
            box-sizing: border-box;
            width: var(--pk-combobox-tag-remove-width);
            height: auto;
            min-height: 0;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            opacity: 0.5;
            outline: none;
        }

        .tag-remove:hover {
            opacity: 1;
        }

        .tag-remove-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .tag-remove-icon svg {
            display: block;
            width: 0.625rem;
            height: 0.625rem;
        }

        .combobox-input--inline {
            flex: 1 1 4rem;
            width: auto;
            min-width: 4rem;
            padding: 0;
        }

        :host([multiple]) .control:not([data-popup-open]):not(:focus-within) {
            background: var(--pk-input-bg);
        }

        :host([multiple]) .combobox-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        .create-option {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 0;
            min-height: var(--pk-select-item-min-height);
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: 0;
            background: transparent;
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
            text-align: left;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
        }

        .create-option:hover,
        .create-option.is-highlighted {
            background: var(--pk-color-slate-100);
        }

        .value-input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .panel ::slotted(pk-separator) {
            margin: 4px 0;
        }

        .panel {
            width: max-content;
            min-width: var(--pk-combobox-anchor-width, 8rem);
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            color: var(--pk-color-gray-700);
            outline: none;
        }

        .panel-body {
            max-height: 16rem;
            overflow: auto;
        }

        .panel--popup {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .panel--popup .panel-body {
            flex: 1 1 auto;
            min-height: 0;
        }

        :host([popup-mode]) .control--popup {
            display: inline-flex;
            width: 100%;
            max-width: 100%;
            min-height: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            gap: 0;
            cursor: default;
        }

        :host([popup-mode]) .control--popup:hover:not(.is-disabled) {
            background: transparent;
        }

        /* Popup mode paints chrome on the trigger / panel input — do not keep the
           shared .control[data-popup-open] focus ring around the closed-state button. */
        :host([popup-mode]) .control--popup[data-popup-open],
        :host([popup-mode]) .control--popup[data-popup-open]:hover:not(.is-disabled),
        :host([popup-mode]) .control--popup[data-popup-open]:focus-within:not(.is-disabled),
        :host([popup-mode]:not([invalid]):not(:state(user-invalid))) .control--popup:focus-within,
        :host([popup-mode]:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control--popup {
            border: 0;
            box-shadow: none;
            background: transparent;
        }

        .popup-trigger {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            width: 100%;
            min-width: 12rem;
            max-width: 100%;
            min-height: var(--pk-combobox-trigger-min-height);
            margin: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-input-border-radius);
            /* Match input-mode fill / v1 default Button — not a white outlined field. */
            background: var(--pk-combobox-fill, var(--pk-color-slate-250));
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            font-weight: 400;
            line-height: var(--pk-combobox-line-height);
            text-align: left;
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .popup-trigger:hover:not(:disabled) {
            background: var(--pk-combobox-fill-hover, var(--pk-color-slate-300));
        }

        .popup-trigger:active:not(:disabled),
        .control--popup[data-popup-open] .popup-trigger:not(:disabled) {
            background: var(--pk-combobox-fill-hover, var(--pk-color-slate-300));
        }

        .control--popup[data-popup-open] .popup-trigger:not(:disabled) {
            border-color: transparent;
            box-shadow: none;
        }

        .control--popup:not([data-popup-open]) .popup-trigger:focus-visible,
        :host([data-state='focus-visible']) .control--popup:not([data-popup-open]) .popup-trigger {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        .popup-trigger:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .popup-trigger-value {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .popup-trigger-value.is-placeholder {
            /* Trigger label is button text, not an input placeholder — keep it readable. */
            color: var(--pk-color-gray-700);
        }

        .popup-trigger-icon {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            line-height: 0;
        }

        .popup-trigger-icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .panel-search {
            flex: none;
            padding: 0.25rem;
        }

        .panel-input {
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 6px 8px;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: color-mix(in srgb, var(--pk-input-bg) 30%, transparent);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            line-height: 1.4;
            outline: none;
            box-sizing: border-box;
        }

        .panel-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        .panel-input:focus {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host([popup-mode][size='xs']) .popup-trigger-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([popup-mode][size='xs']) .panel-input {
            padding: 4px 8px;
            font-size: 11px;
        }

        :host([popup-mode][size='sm']) .panel-input {
            font-size: 12px;
        }

        :host([popup-mode][size='lg']) .panel-input {
            padding-block: 8px;
            padding-inline: 12px;
        }

        :host([popup-mode][width='full']) .popup-trigger {
            width: 100%;
        }

        .panel:not([data-open]):not(.closing) {
            opacity: 0;
            pointer-events: none;
        }

        .panel[data-open]:not(.closing) {
            opacity: 1;
            pointer-events: auto;
        }

        .panel[hidden] {
            display: none !important;
        }

        .empty {
            display: flex;
            align-items: center;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            box-sizing: border-box;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
        }

        .async-status {
            display: flex;
            align-items: center;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            box-sizing: border-box;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([multiple][invalid]) .control,
        :host([multiple]:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .control:focus-within,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-within,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xs']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-xs);
            --pk-combobox-padding-block: 4px;
            --pk-combobox-padding-inline: 8px;
            --pk-combobox-font-size: 11px;
            --pk-combobox-decoration-size: 0.625rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
        }

        :host([size='xs']) .control {
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xs']) .icon svg,
        :host([size='xs']) .clear-button-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([size='sm']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-sm);
            --pk-combobox-padding-block: 6px;
            --pk-combobox-padding-inline: 10px;
            --pk-combobox-font-size: 12px;
            --pk-combobox-decoration-size: 0.6875rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 12px;
            --pk-select-item-indicator-inset: 0.625rem;
            /* v1 ComboboxLabel sm: text-[12px] — empty dropzone field picker uses sm. */
            --pk-select-group-label-font-size: 12px;
        }

        :host([size='sm']) .control {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .popup-trigger {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .icon svg,
        :host([size='sm']) .clear-button-icon svg {
            width: 0.6875rem;
            height: 0.6875rem;
        }

        :host([size='lg']) {
            --pk-combobox-trigger-min-height: var(--pk-btn-height-lg);
            --pk-combobox-padding-block: 8px;
            --pk-combobox-padding-inline: 12px;
            --pk-combobox-font-size: var(--pk-font-size-base);
            --pk-combobox-decoration-size: 1rem;
            --pk-select-item-padding-block: 8px;
            --pk-select-item-padding-inline: 12px;
            --pk-select-item-font-size: 14px;
            --pk-select-item-indicator-inset: 0.75rem;
            /* v1 ComboboxLabel lg: text-sm → 14px */
            --pk-select-group-label-font-size: 14px;
        }

        :host([size='xl']) {
            --pk-combobox-trigger-min-height: var(--pk-btn-height-xl);
            --pk-combobox-padding-block: 10px;
            --pk-combobox-padding-inline: 14px;
            --pk-combobox-font-size: var(--pk-font-size-base);
            --pk-combobox-decoration-size: 1.125rem;
            --pk-select-item-padding-block: 10px;
            --pk-select-item-padding-inline: 14px;
            --pk-select-item-padding-inline-end: 2.25rem;
            --pk-select-item-font-size: 14px;
            --pk-select-item-indicator-inset: 0.875rem;
            /* v1 ComboboxLabel xl: text-base → 16px */
            --pk-select-group-label-font-size: 16px;
        }

        :host([size='xl']) .icon svg,
        :host([size='xl']) .clear-button-icon svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
`],ur=s(u.chevronDown),dr=s(u.xmark),R=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=6,this.clearable=!1,this.withClear=!1,this.allowCreate=!1,this.allowCustomValue=!1,this.autoHighlight=!1,this.popupMode=!1,this.searchPlaceholder=`Search`,this.invalid=!1,this.size=`default`,this.placeholder=``,this.emptyMessage=`No options found.`,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.label=``,this.instructions=``,this.ariaLabel=null,this.loopFocus=!0,this.filter=null,this.async=!1,this.loadingMessage=`Searching…`,this.startTypingMessage=`Start typing to search…`,this.fetchOptions=null,this.hasSlotController=new je(this,`start`,`end`),this.listboxId=Ne(`pk-combobox-listbox`),this.inputId=Ne(`pk-combobox-input`),this.createOptionId=Ne(`pk-combobox-create`),this.options=[],this.inputValue=``,this.hasInputSinceOpening=!1,this.highlightedIndex=-1,this.createOptionHighlighted=!1,this.closing=!1,this.panelAnimated=!1,this.dismissRegistered=!1,this.panelEventTarget=null,this.selectedOptionMeta=null,this.asyncFetcher=null,this.asyncLoading=!1,this.asyncError=null,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,this.applySelection(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.togglePanel=e=>{e?.preventDefault(),e?.stopPropagation(),!this.disabled&&(this.open||this.closing?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(!this.open)return;if(e.key===`Escape`){if(!Te(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`);return}let t=this.panelInput;if(t&&e.composedPath().includes(t)||!(Wn.has(e.key)||Gn(e)))return;let n=this.panelElement,r=e.composedPath();n&&r.includes(n)&&ar(e,{anchor:this.controlElement,panel:n})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))},this.handleOptionSelect=e=>{let{value:t}=e.detail;if(this.multiple){this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t],this.inputValue=``,this.applySelection(),this.emitValueChange(),this.activeInput?.focus({preventScroll:!0});return}this.value=t,this.syncSelectedOptionMeta(),this.applySelection(),this.closePanel(`api`),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t!==-1&&t!==this.highlightedIndex&&(this.highlightedIndex=t,this.syncHighlight())},this.handleControlMouseDown=e=>{if(this.disabled||this.usesPopupMode||e.composedPath().some(e=>e instanceof HTMLElement?e.classList.contains(`icon-button`)||e.classList.contains(`clear-button`)||e.classList.contains(`tag-remove`):!1))return;let t=e.target===this.activeInput;if(!this.open&&!this.closing){t||e.preventDefault(),this.activeInput?.focus({preventScroll:!0}),this.openPanel();return}t||(e.preventDefault(),this.activeInput?.focus({preventScroll:!0}))},this.handleTriggerKeyDown=e=>{if(!this.disabled){if(e.key===`Enter`||e.key===` `){e.preventDefault(),this.togglePanel(e);return}e.key===`ArrowDown`&&!this.open&&(e.preventDefault(),this.openPanel())}},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)},this.handleCreateMouseEnter=()=>{if(!this.open)return;let e=this.getEnabledVisibleOptions();this.highlightedIndex=e.length,this.syncHighlight()},this.handleCreateKeyDown=e=>{e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e)}}static{this.styles=lr}static get validators(){return[...super.validators,ce(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)?n:(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n)}}]}get panelElement(){return this.popupElement?.getContentElement()??null}get panelInput(){return this.panelElement?.querySelector(`.panel-input`)}get panelBodyElement(){return this.panelElement?.querySelector(`.panel-body`)}get usesPopupMode(){return this.popupMode&&!this.multiple}get activeInput(){return this.usesPopupMode?this.panelInput:this.controlInput}keepsFocusOnInput(){return!!this.activeInput}maintainInputFocus(){this.activeInput?.focus({preventScroll:!0})}get listScrollContainer(){return this.panelBodyElement??this.panelElement??this}connectedCallback(){this.instructions=this.getAttribute(`hint`)??this.instructions,this.refreshOptions(),super.connectedCallback(),this.syncHasValueAttribute(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.optionsObserver?.disconnect(),this.liveRegion?.destroy(),this.liveRegion=void 0,this.asyncFetcher?.cancel(),this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&(this.syncHasValueAttribute(),this.syncSelectedOptionMeta(),this.applySelection()),super.updated(e)}get validationTarget(){return this.activeInput??this.popupTrigger??this.controlElement}getAriaMirrorTarget(){return this.activeInput??this.popupTrigger??this.controlElement??null}syncFormValue(){if(!this.name){this.setFormValue(null);return}if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e);return}this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.inputValue=``,this.applySelection()}restoreFormState(e){if(e instanceof FormData&&this.name){this.values=e.getAll(this.name).map(String);return}typeof e==`string`&&(this.value=e)}syncHasValueAttribute(){this.toggleAttribute(`data-has-value`,this.hasSelection())}getOptionElements(){let e=this.popupElement?.getContentElement()?.querySelectorAll(`pk-option`);return e&&e.length>0?[...e]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;e&&e!==this.panelEventTarget&&(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&=(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),null)}isOptionInHiddenGroup(e){return!!e.closest(`pk-option-group`)?.hidden}matchesFilter(e,t){return rr(e,t,this.filter)}getFilterQuery(){return!this.open||!this.multiple&&!this.hasInputSinceOpening&&!this.usesPopupMode?``:this.inputValue.trim().toLowerCase()}getVisibleOptions(){if(this.usesAsyncSearch)return this.options.filter(e=>!this.isOptionInHiddenGroup(e));let e=this.getFilterQuery();return this.options.filter(t=>this.isOptionInHiddenGroup(t)?!1:!e||this.matchesFilter(t,e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}getSelectedOptions(){if(this.multiple){let e=new Map(this.options.map(e=>[e.value,e]));return this.values.map(t=>e.get(t)).filter(e=>e!==void 0)}let e=this.options.find(e=>e.value===this.value);return e?[e]:[]}getSelectedOption(){return this.options.find(e=>e.value===this.value)}get usesAsyncSearch(){return this.async&&!!this.fetchOptions&&!this.multiple&&!this.usesPopupMode}getSelectedLabel(){return this.getSelectedOption()?.getLabel()??this.selectedOptionMeta?.label??this.value}clearAsyncOptionNodes(){this.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`).forEach(e=>e.remove())}renderAsyncOptionNodes(e){let t=this.mergeAsyncItems(e);this.clearAsyncOptionNodes();for(let e of t){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.handleOptionsMutation({render:!0})}mergeAsyncItems(e){if(!this.value)return e;let t=this.selectedOptionMeta??{value:this.value,label:this.getSelectedOption()?.getLabel()??this.value};return e.some(e=>e.value===t.value)?e:[...e,t]}syncSelectedOptionMeta(){if(!this.value){this.selectedOptionMeta=null;return}let e=this.getSelectedOption();e&&(this.selectedOptionMeta={value:e.value,label:e.getLabel()})}scheduleAsyncFetch(e){this.ensureAsyncFetcher().schedule(e)}ensureAsyncFetcher(){return this.asyncFetcher||=new tr(()=>this.fetchOptions,{errorLabel:`combobox options`,onLoading:()=>{this.asyncLoading=!0,this.asyncError=null},onResults:e=>{this.renderAsyncOptionNodes(e)},onError:e=>{this.asyncError=e},onSettled:()=>{this.asyncLoading=!1},onEmptyQuery:()=>{this.asyncLoading=!1,this.asyncError=null,this.renderAsyncOptionNodes(this.value&&this.selectedOptionMeta?[this.selectedOptionMeta]:[])}}),this.asyncFetcher}getAsyncStatusMessage(){if(!this.usesAsyncSearch||!this.open)return null;if(this.asyncLoading)return this.loadingMessage;if(this.asyncError)return this.asyncError;let e=this.inputValue.trim();return e?this.getEnabledVisibleOptions().length===0&&!this.shouldShowCreateOption()?`No matches for "${e}".`:null:this.value?null:this.startTypingMessage}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}getDisplayInputValue(){return this.usesPopupMode||this.multiple||this.open?this.inputValue:this.hasSelection()?this.getSelectedLabel():``}getTriggerDisplayValue(){return this.hasSelection()?this.getSelectedLabel():this.placeholder}isTriggerPlaceholder(){return!this.hasSelection()}hasSelection(){return this.multiple?this.values.length>0:!!(this.getSelectedOption()||this.selectedOptionMeta||this.value)}shouldShowCreateOption(){if(!this.allowCreate||!this.open||!this.multiple&&!this.hasInputSinceOpening)return!1;let e=this.inputValue.trim();if(!e)return!1;let t=e.toLowerCase();return!this.options.some(e=>e.getLabel().toLowerCase()===t||e.value.toLowerCase()===t)}getListboxNavItems(){let e=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.createOptionElement?[...e,this.createOptionElement]:e}applySelection(){let e=this.getVisibleOptions(),t=this.open?this.getFilterQuery():``;er({host:this,options:this.options,visible:e,listboxId:this.listboxId,filterQuery:t,isSelected:e=>this.isSelected(e)}),this.syncValueInput(),this.open&&(this.syncHighlight(),this.announceFilterResults())}syncValueInput(){this.input&&(this.input.value=this.multiple?this.values.join(`,`):this.value,this.input.required=this.required)}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(!this.value||e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}resetHighlightedIndexOnOpen(){if(this.autoHighlight){if(this.value){this.syncHighlightedIndexToSelection();return}this.highlightedIndex=0;return}this.highlightedIndex=-1}syncHighlight(){let e=this.getEnabledVisibleOptions(),t=this.shouldShowCreateOption(),n=e.length+ +!!t;for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(this.createOptionHighlighted=!1,n===0||this.highlightedIndex<0)return;if(this.highlightedIndex>=n&&(this.highlightedIndex=n-1),t&&this.highlightedIndex===e.length){this.createOptionHighlighted=!0,this.keepsFocusOnInput()||this.createOptionElement?.focus({preventScroll:!0}),Oe(this.createOptionElement,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus();return}let r=e[this.highlightedIndex];r&&(r.highlighted=!0,r.focusIndex=this.keepsFocusOnInput()?-1:0,Oe(r,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus())}getActiveDescendantId(){let e=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.highlightedIndex===e.length?this.createOptionId:e[this.highlightedIndex]?.optionId||null}announceFilterResults(){this.liveRegion||=new Me(`polite`);let e=this.getEnabledVisibleOptions().length,t=this.getFilterQuery();if(t){if(this.shouldShowCreateOption()){this.liveRegion.announce(`Create ${t}`);return}this.liveRegion.announce(e===0?`${this.emptyMessage}`:`${e} ${e===1?`result`:`results`} available`)}}async show(){this.open||this.closing||this.disabled||await this.openPanel()}async hide(e=`api`){this.open&&!this.closing&&await this.closePanel(e)}openPanel(){let e=this.controlElement;if(!e)return Promise.resolve();if(this.open)return this.activeInput?.focus({preventScroll:!0}),Promise.resolve();if(this.closing)return Promise.resolve();this.dispatchEvent(new Se),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.applySelection(),this.resetHighlightedIndexOnOpen(),this.usesAsyncSearch&&(this.syncSelectedOptionMeta(),this.asyncError=null,this.asyncLoading=!1,this.renderAsyncOptionNodes(this.selectedOptionMeta?[this.selectedOptionMeta]:[]));let t=e.getBoundingClientRect().width;return this.style.setProperty(`--pk-combobox-anchor-width`,`${t}px`),this.popupElement.active=!0,this.panelElement&&(this.panelElement.hidden=!1,Je(this.panelElement,this.placement)),this.registerDismissHandlers(),this.syncHighlight(),this.usesPopupMode?this.popupTrigger?.blur():this.activeInput?.focus({preventScroll:!0}),this.updateComplete.then(async()=>{let e=await Ye(this.popupElement,this.placement,300,{requireEvent:!0});if(this.panelElement&&Je(this.panelElement,e),this.panelAnimated=!0,this.bindPanelEvents(),this.refreshOptions(),this.activeInput?.focus({preventScroll:!0}),this.highlightedIndex>=0&&!this.keepsFocusOnInput()){let e=this.getEnabledVisibleOptions(),t=this.highlightedIndex;this.shouldShowCreateOption()&&t===e.length?this.createOptionElement?.focus({preventScroll:!0}):e[t]?.focusControl()}this.dispatchEvent(new De),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))})}commitCustomValueIfAllowed(){if(this.multiple||!this.allowCustomValue)return!1;let e=this.inputValue.trim();if(!e)return!1;let t=this.options.find(t=>t.getLabel().toLowerCase()===e.toLowerCase()||t.value.toLowerCase()===e.toLowerCase())?.value??e;return this.value!==t&&(this.value=t,!0)}commitInputOnClose(e){return this.multiple||this.usesPopupMode?!1:this.hasInputSinceOpening?this.inputValue.trim()?this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1:this.value?(this.value=``,!0):!1:this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1}shouldCommitCustomValueOnClose(e){return e===`light-dismiss`||e===`pointer-dismiss`}async closePanel(e=`unknown`){if(!this.open||this.closing)return;let t=new we(e);if(!this.dispatchEvent(t))return;let n=this.commitInputOnClose(e);this.unbindPanelEvents(),this.closing=!0,this.panelAnimated=!1,await $n(this.panelElement),this.open=!1,this.closing=!1,this.panelAnimated=!1,this.hasInputSinceOpening=!1,this.inputValue=``,this.panelElement&&(this.panelElement.hidden=!0,this.panelElement.removeAttribute(`data-side`)),this.popupElement.active=!1,this.unregisterDismissHandlers(),this.applySelection(),this.usesAsyncSearch&&(this.asyncFetcher?.cancel(),this.asyncLoading=!1,this.asyncError=null,this.renderAsyncOptionNodes(this.selectedOptionMeta?[this.selectedOptionMeta]:[])),n&&(this.syncHasValueAttribute(),this.emitValueChange()),this.shouldReturnFocusToInput(e)?this.usesPopupMode?this.popupTrigger?.focus({preventScroll:!0}):this.activeInput?.focus({preventScroll:!0}):(this.activeInput?.blur(),this.popupTrigger?.blur()),this.dispatchEvent(new Ee),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}shouldReturnFocusToInput(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){Ae(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&=(Ce(this),!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return or(e,{anchor:this.controlElement,panel:this.panelElement})}handleCreateOption(){let e=this.inputValue.trim();if(!e)return;let t=new cr(e);if(!this.dispatchEvent(t))return;let n=document.createElement(`pk-option`);if(n.value=e,n.textContent=e,this.append(n),this.multiple){this.values.includes(e)||(this.values=[...this.values,e]),this.inputValue=``,this.applySelection(),this.emitValueChange(),this.activeInput?.focus({preventScroll:!0});return}this.value=e,this.applySelection(),this.closePanel(`api`),this.emitValueChange()}removeTag(e,t){t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange(),this.activeInput?.focus({preventScroll:!0})}handleClear(e){e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.inputValue=``,this.selectedOptionMeta=null,this.usesAsyncSearch&&this.renderAsyncOptionNodes([]),this.applySelection(),this.dispatchEvent(new se),this.emitValueChange(),this.activeInput?.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleInput(e){this.hasInputSinceOpening=!0,this.inputValue=e.target.value,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection(),this.usesAsyncSearch&&(this.asyncError=null,this.scheduleAsyncFetch(this.inputValue.trim())),this.open||this.openPanel()}handleInputKeyDown(e){if(e.key===`Backspace`&&this.multiple&&!this.inputValue&&this.values.length>0){e.preventDefault(),this.values=this.values.slice(0,-1),this.applySelection(),this.emitValueChange();return}if(e.key===`Escape`&&this.open){if(e.preventDefault(),this.hasInputSinceOpening&&this.inputValue){this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection();return}this.closePanel(`escape`);return}if(e.key===`ArrowDown`&&!this.open){e.preventDefault(),this.openPanel();return}if(e.key===`Tab`&&this.open){let e=!1;this.multiple||(e=this.commitCustomValueIfAllowed()),this.closePanel(`api`),e&&(this.syncHasValueAttribute(),this.emitValueChange());return}if(this.open&&e.key===`Enter`&&!this.multiple&&this.getEnabledVisibleOptions().length===0&&this.allowCustomValue&&this.inputValue.trim()&&!this.shouldShowCreateOption()){e.preventDefault();let t=this.commitCustomValueIfAllowed();this.closePanel(`api`),t&&(this.syncHasValueAttribute(),this.emitValueChange());return}this.open&&this.onListboxKeyDown(e)}onListboxKeyDown(e){let t=this.getListboxNavItems(),n=this.getEnabledVisibleOptions();if(this.highlightedIndex<0){if(e.key===`ArrowDown`||e.key===`ArrowRight`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=0,this.syncHighlight());return}if(e.key===`ArrowUp`||e.key===`ArrowLeft`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=this.shouldShowCreateOption()?n.length:Math.max(n.length-1,0),this.syncHighlight());return}if(e.key===`Enter`||e.key===` `)return}if(e.key===`Enter`&&this.shouldShowCreateOption()&&this.highlightedIndex===n.length){e.preventDefault(),this.handleCreateOption();return}if(this.multiple&&(e.key===`Enter`||e.key===` `)){let t=n[this.highlightedIndex];t&&(e.preventDefault(),t.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:t.value},bubbles:!0,composed:!0})));return}this.highlightedIndex=Yn(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{if(!this.keepsFocusOnInput()){if(this.shouldShowCreateOption()&&e===n.length){this.createOptionElement?.focus({preventScroll:!0});return}n[e]?.focusControl()}},onClose:()=>{this.closePanel(`escape`)}})}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?T`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:T`<slot name=${e} hidden></slot>`}renderChevronButton(){return T`
            <button
                type="button"
                class="icon-button expand-button"
                part="expand-button"
                aria-label="Toggle options"
                ?disabled=${this.disabled}
                @click=${this.togglePanel}
            >
                <span class="icon" aria-hidden="true">${D(ur)}</span>
            </button>
        `}renderTags(){return this.getSelectedOptions().map(e=>T`
            <span class="tag" part="tag">
                <span class="tag-label">${e.getLabel()}</span>
                <button
                    type="button"
                    class="tag-remove"
                    part="tag-remove"
                    aria-label=${`Remove ${e.getLabel()}`}
                    ?disabled=${this.disabled}
                    @click=${t=>this.removeTag(e.value,t)}
                >
                    <span class="tag-remove-icon" aria-hidden="true">${D(dr)}</span>
                </button>
            </span>
        `)}shouldShowPlaceholder(){return!this.inputValue.trim()&&!this.hasSelection()}renderInput(){let t=this.open?this.getActiveDescendantId():null,n=this.shouldShowPlaceholder();return T`
            <input
                part="input"
                class=${e({"combobox-input":!0,"control-input":!0,"combobox-input--inline":this.multiple})}
                type="text"
                role="combobox"
                id=${this.inputId}
                .value=${this.getDisplayInputValue()}
                placeholder=${n?this.placeholder:y}
                ?disabled=${this.disabled}
                aria-label=${this.ariaLabel??y}
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                aria-autocomplete="list"
                aria-activedescendant=${t??y}
                @input=${this.handleInput}
                @keydown=${this.handleInputKeyDown}
            />
        `}renderPanelInput(){let e=this.open?this.getActiveDescendantId():null;return T`
            <div part="panel-search" class="panel-search">
                <input
                    part="panel-input"
                    class="combobox-input panel-input"
                    type="text"
                    role="combobox"
                    id=${this.inputId}
                    .value=${this.inputValue}
                    placeholder=${this.searchPlaceholder}
                    ?disabled=${this.disabled}
                    aria-label=${this.ariaLabel??this.searchPlaceholder}
                    aria-expanded="true"
                    aria-controls=${this.listboxId}
                    aria-autocomplete="list"
                    aria-activedescendant=${e??y}
                    @input=${this.handleInput}
                    @keydown=${this.handleInputKeyDown}
                />
            </div>
        `}renderPopupTrigger(){return T`
            <button
                type="button"
                part="trigger"
                class="popup-trigger"
                ?disabled=${this.disabled}
                aria-label=${this.ariaLabel??y}
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                @click=${this.togglePanel}
                @keydown=${this.handleTriggerKeyDown}
            >
                <span
                    class=${e({"popup-trigger-value":!0,"is-placeholder":this.isTriggerPlaceholder()})}
                >
                    ${this.getTriggerDisplayValue()}
                </span>
                <span class="icon popup-trigger-icon" aria-hidden="true">${D(ur)}</span>
            </button>
        `}renderControlContent(){if(this.usesPopupMode)return this.renderPopupTrigger();let e=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return this.multiple?T`
                ${this.renderHostDecorationSlot(`start`)}
                <div class="chips" part="tags">
                    ${this.renderTags()}
                    ${this.renderInput()}
                </div>
                ${this.renderHostDecorationSlot(`end`)}
                ${e?T`
                        <button
                            type="button"
                            class="clear-button"
                            part="clear-button"
                            aria-label="Clear selection"
                            ?disabled=${this.disabled}
                            @click=${this.handleClear}
                        >
                            <span class="clear-button-icon" aria-hidden="true">${D(dr)}</span>
                        </button>
                    `:y}
            `:T`
            ${this.renderHostDecorationSlot(`start`)}
            ${this.renderInput()}
            ${this.renderHostDecorationSlot(`end`)}
            ${e?T`
                    <button
                        type="button"
                        class="clear-button"
                        part="clear-button"
                        aria-label="Clear selection"
                        ?disabled=${this.disabled}
                        @click=${this.handleClear}
                    >
                        <span class="clear-button-icon" aria-hidden="true">${D(dr)}</span>
                    </button>
                `:y}
            ${this.renderChevronButton()}
        `}render(){let t=this.getEnabledVisibleOptions(),n=this.shouldShowCreateOption(),r=this.open&&!this.usesAsyncSearch&&t.length===0&&!n,i=this.getAsyncStatusMessage(),a=this.inputValue.trim();return T`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.multiple?this.values.join(`,`):this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            <div
                part="control"
                class=${e({control:!0,"is-disabled":this.disabled,"control--multiple":this.multiple,"control--popup":this.usesPopupMode})}
                data-popup-open=${this.open?``:y}
                @mousedown=${this.handleControlMouseDown}
            >
                ${this.renderControlContent()}
            </div>
            <pk-popup
                .active=${this.open||this.closing}
                .anchor=${this.controlElement??``}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                .sync=${`width`}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${e({panel:!0,"pk-popup-content":!0,closing:this.closing,"panel--popup":this.usesPopupMode})}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:y}
                >
                    ${this.usesPopupMode?this.renderPanelInput():y}
                    <div
                        part="panel-body"
                        class="panel-body"
                        id=${this.listboxId}
                        role="listbox"
                        aria-multiselectable=${this.multiple?`true`:`false`}
                        aria-busy=${this.usesAsyncSearch&&this.asyncLoading?`true`:y}
                        @slotchange=${this.syncOptions}
                    >
                        <slot></slot>
                        ${i?T`
                                <div part="async-status" class="async-status" role="status">${i}</div>
                            `:y}
                        ${n?T`
                                <button
                                    type="button"
                                    part="create-option"
                                    class=${e({"create-option":!0,"is-highlighted":this.createOptionHighlighted})}
                                    id=${this.createOptionId}
                                    role="option"
                                    aria-selected="false"
                                    tabindex="-1"
                                    @click=${this.handleCreateOption}
                                    @mouseenter=${this.handleCreateMouseEnter}
                                    @keydown=${this.handleCreateKeyDown}
                                >
                                    Create "${a}"
                                </button>
                            `:y}
                        ${r?T`
                                <div part="empty" class="empty">${this.emptyMessage}</div>
                            `:y}
                    </div>
                </div>
            </pk-popup>
        `}};_([E({type:Boolean,reflect:!0})],R.prototype,`open`,void 0),_([E({type:Boolean,reflect:!0})],R.prototype,`multiple`,void 0),_([E({reflect:!0})],R.prototype,`placement`,void 0),_([E({attribute:`side-offset`,type:Number})],R.prototype,`sideOffset`,void 0),_([E({type:Boolean,reflect:!0})],R.prototype,`clearable`,void 0),_([E({attribute:`with-clear`,type:Boolean})],R.prototype,`withClear`,void 0),_([E({attribute:`allow-create`,type:Boolean})],R.prototype,`allowCreate`,void 0),_([E({attribute:`allow-custom-value`,type:Boolean})],R.prototype,`allowCustomValue`,void 0),_([E({attribute:`auto-highlight`,type:Boolean})],R.prototype,`autoHighlight`,void 0),_([E({attribute:`popup-mode`,type:Boolean,reflect:!0})],R.prototype,`popupMode`,void 0),_([E({attribute:`search-placeholder`})],R.prototype,`searchPlaceholder`,void 0),_([E({type:Boolean,reflect:!0})],R.prototype,`invalid`,void 0),_([E({reflect:!0})],R.prototype,`size`,void 0),_([E({reflect:!0})],R.prototype,`width`,void 0),_([E()],R.prototype,`placeholder`,void 0),_([E({attribute:`empty-message`})],R.prototype,`emptyMessage`,void 0),_([E()],R.prototype,`value`,void 0),_([E({attribute:`default-value`})],R.prototype,`defaultValue`,void 0),_([E({type:Array,attribute:!1})],R.prototype,`values`,void 0),_([E({attribute:!1})],R.prototype,`defaultValues`,void 0),_([E()],R.prototype,`label`,void 0),_([E()],R.prototype,`instructions`,void 0),_([E({attribute:`aria-label`})],R.prototype,`ariaLabel`,void 0),_([E({attribute:`loop-focus`,type:Boolean})],R.prototype,`loopFocus`,void 0),_([E({attribute:!1})],R.prototype,`filter`,void 0),_([E({type:Boolean,reflect:!0})],R.prototype,`async`,void 0),_([E({attribute:`loading-message`})],R.prototype,`loadingMessage`,void 0),_([E({attribute:`start-typing-message`})],R.prototype,`startTypingMessage`,void 0),_([E({attribute:!1})],R.prototype,`fetchOptions`,void 0),_([v(`pk-popup`)],R.prototype,`popupElement`,void 0),_([v(`.control`)],R.prototype,`controlElement`,void 0),_([v(`.control-input`)],R.prototype,`controlInput`,void 0),_([v(`.popup-trigger`)],R.prototype,`popupTrigger`,void 0),_([v(`.create-option`)],R.prototype,`createOptionElement`,void 0),_([v(`.value-input`)],R.prototype,`input`,void 0),_([C()],R.prototype,`inputValue`,void 0),_([C()],R.prototype,`highlightedIndex`,void 0),_([C()],R.prototype,`createOptionHighlighted`,void 0),_([C()],R.prototype,`closing`,void 0),_([C()],R.prototype,`panelAnimated`,void 0),_([C()],R.prototype,`asyncLoading`,void 0),_([C()],R.prototype,`asyncError`,void 0),R=_([w(`pk-combobox`)],R);var fr=x`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .textarea {
            display: block;
            width: 100%;
            min-height: 5rem;
            margin: 0;
            padding: 7px 10px;
            border: var(--pk-input-border);
            border-radius: var(--pk-textarea-border-radius, var(--pk-radius-md));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: 1.4;
            resize: vertical;
            appearance: none;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .textarea::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /* Craft: focus is box-shadow only — do not also flip border-color (double ring). */
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .textarea:disabled {
            cursor: not-allowed;
            opacity: 0.5;
            background: var(--pk-color-gray-50);
        }

        :host([invalid]) .textarea,
        :host(:state(user-invalid)) .textarea {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .textarea:focus,
        :host([invalid]) .textarea:focus-visible,
        :host([invalid][data-state='focus-visible']) .textarea,
        :host(:state(user-invalid)) .textarea:focus,
        :host(:state(user-invalid)) .textarea:focus-visible {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        /* Editable-table cells (v1): flush into the row and fill cell height.
         * Chain height through form-control — percentage on .textarea alone
         * doesn't resolve when the wrapper sizes to content (rows / min-height). */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]) .textarea,
        :host([data-editable-table-input]) .textarea {
            flex: 1 1 auto;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            height: 100%;
            min-height: 0;
            max-height: 100%;
            /* Match text-cell inset (v1 py-1.5 / px-2). 0.5rem block padding +
             * line-height 1.4 overflows the 34px et cell and shows a scrollbar
             * even for empty / single-line notes. */
            padding: 0.375rem 0.5rem;
            line-height: 1.25;
            overflow-x: hidden;
            overflow-y: auto;
            resize: none;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .textarea,
        :host([fit-cell]:state(user-invalid)) .textarea,
        :host([fit-cell][invalid]) .textarea:focus,
        :host([fit-cell][invalid]) .textarea:focus-visible,
        :host([fit-cell]:state(user-invalid)) .textarea:focus,
        :host([fit-cell]:state(user-invalid)) .textarea:focus-visible,
        :host([data-editable-table-input][invalid]) .textarea,
        :host([data-editable-table-input]:state(user-invalid)) .textarea,
        :host([data-editable-table-input][invalid]) .textarea:focus,
        :host([data-editable-table-input][invalid]) .textarea:focus-visible,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus-visible {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }
    }
`,z=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new je(this,`instructions`,`hint`,`label`),this.controlId=Ne(`pk-textarea`),this.placeholder=``,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.withLabel=!1,this.withInstructions=!1}static{this.styles=[Pe,fr]}static get validators(){return[...super.validators,ce(),ge()]}get value(){return this.valueHasChanged?this._value??``:this._value??this.defaultValue??``}set value(e){let t=e??``;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=ye(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=this.defaultValue??``),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=this.hasLabelContent(),t=this.hasInstructionsContent();ue({control:this.input,labelId:`${this.controlId}-label`,instructionsId:`${this.controlId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return fe((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent();return T`
            <div part="form-control" class="form-control">
                ${e?T`
                        <label
                            part="label"
                            class="form-control__label"
                            id=${`${this.controlId}-label`}
                            for=${`${this.controlId}-control`}
                        >
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:y}

                ${t?T`
                        <p
                            part="instructions"
                            class="form-control__instructions"
                            id=${`${this.controlId}-instructions`}
                        >
                            <slot name="instructions">${this.instructions}</slot>
                            <slot name="hint"></slot>
                        </p>
                    `:y}

                <textarea
                    part="textarea"
                    class="textarea"
                    id=${e?`${this.controlId}-control`:y}
                    rows=${oe(this.fitCell?this.rows??1:this.rows)}
                    .value=${me(this.value)}
                    placeholder=${this.placeholder||y}
                    maxlength=${oe(this.maxlength)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                    @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                ></textarea>
            </div>
        `}};_([v(`textarea`)],z.prototype,`input`,void 0),_([E()],z.prototype,`placeholder`,void 0),_([C()],z.prototype,`value`,null),_([E({attribute:`value`,reflect:!0})],z.prototype,`defaultValue`,void 0),_([E({reflect:!0})],z.prototype,`size`,void 0),_([E()],z.prototype,`label`,void 0),_([E()],z.prototype,`instructions`,void 0),_([E({type:Boolean,reflect:!0})],z.prototype,`readonly`,void 0),_([E({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),_([E({type:Boolean,reflect:!0,attribute:`fit-cell`})],z.prototype,`fitCell`,void 0),_([E({type:Number})],z.prototype,`rows`,void 0),_([E({type:Number,attribute:`max-length`})],z.prototype,`maxlength`,void 0),_([E({attribute:`with-label`,type:Boolean})],z.prototype,`withLabel`,void 0),_([E({attribute:`with-instructions`,type:Boolean})],z.prototype,`withInstructions`,void 0),z=_([w(`pk-textarea`)],z);var pr=x`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
            --pk-lightswitch-border-color: var(--pk-color-slate-800);
            --pk-lightswitch-track-off: var(--pk-color-gray-200);
            --pk-lightswitch-track-on: var(--pk-color-teal-550);
            --pk-lightswitch-track-on-border: var(--pk-color-teal-550-border);
            --pk-lightswitch-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-sky-600),
                0 0 6px 1px hsl(from var(--pk-color-sky-600) h s l / 0.8);
            --pk-lightswitch-invalid-shadow: 0 0 0 1px #fff, 0 0 0 2.5px var(--pk-color-rose-600);
            --pk-lightswitch-invalid-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-rose-600),
                0 0 6px 1px hsl(from var(--pk-color-rose-600) h s l / 0.8);
        }

        :host([disabled]) {
            cursor: not-allowed;
        }

        .base {
            display: inline-flex;
            align-items: flex-start;
            gap: 0.5rem;
        }

        :host([disabled]) .base {
            opacity: 0.5;
        }

        .content {
            min-width: 0;
            cursor: pointer;
            user-select: none;
        }

        :host([disabled]) .content {
            cursor: not-allowed;
        }

        .label {
            display: block;
            /* Match checkbox / radio option labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            line-height: 1rem;
        }

        .label:empty {
            display: none;
        }

        .instructions:empty,
        .hint:empty {
            display: none;
        }

        .switch {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 11px;
            background: var(--pk-lightswitch-track-off, #d8dee7);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            cursor: pointer;
            user-select: none;
            appearance: none;
            transition: background-color 0.15s ease, box-shadow 0.15s ease;
        }

        .switch:focus {
            outline: none;
        }

        .switch:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        .switch[aria-checked='true'] {
            background: var(--pk-lightswitch-track-on, #0f9d8a);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .switch[aria-checked='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        :host([invalid]) .switch,
        :host(:state(user-invalid)) .switch,
        .switch[aria-invalid='true'] {
            box-shadow: var(--pk-lightswitch-invalid-shadow);
        }

        :host([invalid]) .switch[aria-checked='true'],
        :host(:state(user-invalid)) .switch[aria-checked='true'],
        .switch[aria-invalid='true'][aria-checked='true'] {
            background: var(--pk-lightswitch-track-on);
        }

        :host([invalid]) .switch:focus-visible,
        :host(:state(user-invalid)) .switch:focus-visible,
        .switch[aria-invalid='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-invalid-focus-shadow);
        }

        .switch:disabled {
            cursor: not-allowed;
        }

        :host([size='default']) .switch {
            width: 34px;
            height: 22px;
        }

        :host([size='sm']) .switch {
            width: 28px;
            height: 18px;
            border-radius: 9px;
        }

        :host([size='xs']) .switch {
            width: 24px;
            height: 16px;
            border-radius: 8px;
        }

        :host([size='xxs']) .switch {
            width: 24px;
            height: 14px;
            border-radius: 7px;
        }

        .thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--pk-color-white, #fff);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            pointer-events: none;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        :host([size='default']) .thumb {
            width: 18px;
            height: 18px;
            transform: translateX(2px);
        }

        :host([size='default']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 4px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='sm']) .thumb {
            width: 14px;
            height: 14px;
            transform: translateX(2px);
        }

        :host([size='sm']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xs']) .thumb {
            width: 12px;
            height: 12px;
            transform: translateX(2px);
        }

        :host([size='xs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xxs']) .thumb {
            width: 10px;
            height: 10px;
            transform: translateX(2px);
        }

        :host([size='xxs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(12px);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .thumb svg {
            width: 14px;
            height: 14px;
            color: var(--pk-lightswitch-track-on);
            opacity: 0;
            transform: translateY(1px);
            transition: opacity 0.15s ease;
        }

        .switch[aria-checked='true'] .thumb svg {
            opacity: 1;
        }

        :host([size='sm']) .thumb svg {
            width: 10px;
            height: 10px;
        }

        :host([size='xs']) .thumb svg,
        :host([size='xxs']) .thumb svg {
            display: none;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
        }
    }
`,mr=T`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
        <path fill="currentColor" d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z" />
    </svg>
`,B=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new je(this,`instructions`,`hint`),this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.size=`default`,this.value=`on`,this.label=``,this.instructions=``}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=[Pe,pr]}static get validators(){return[...super.validators,ce(),ge({validationProperty:`checked`})]}connectedCallback(){this.instructions=ye(this,this.instructions),super.connectedCallback()}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.value:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked}restoreFormState(e){this.checked=e===`on`||e===this.value}updated(e){this.input&&e.has(`checked`)&&(this.input.checked=this.checked),super.updated(e)}click(){this.switchElement?.click()}focus(e){this.switchElement?.focus(e)}blur(){this.switchElement?.blur()}toggle(){this.disabled||(this.checked=!this.checked,this.emitCheckedChange())}handleKeyDown(e){let t=this.matches(`:dir(rtl)`);if(e.key===` `||e.key===`Enter`){e.preventDefault(),this.toggle();return}if(e.key===`ArrowLeft`){e.preventDefault(),this.checked=t,this.emitCheckedChange();return}e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.emitCheckedChange())}emitCheckedChange(){this.hasInteracted=!0,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleLabelClick(e){this.disabled||e.target===this.switchElement||this.toggle()}hasLabelContent(){if(this.label)return!0;let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e?e.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE):!1}render(){let e=fe((e,t)=>this.hasSlotController.test(e,t),this.instructions),t=this.hasLabelContent();return T`
            <div part="base" class="base">
                <button
                    part="switch"
                    class="switch"
                    type="button"
                    role="switch"
                    ?disabled=${this.disabled}
                    aria-checked=${this.checked?`true`:`false`}
                    aria-invalid=${this.invalid?`true`:y}
                    aria-describedby=${e?`instructions`:y}
                    aria-labelledby=${t?`label`:y}
                    @click=${this.toggle}
                    @keydown=${this.handleKeyDown}
                >
                    <span part="thumb" class="thumb">${mr}</span>
                </button>
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    tabindex="-1"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    value=${this.value}
                    aria-invalid=${this.invalid?`true`:y}
                    @change=${e=>e.stopPropagation()}
                />
                ${t||e?T`
                        <div class="content" @click=${this.handleLabelClick}>
                            ${t?T`
                                    <span part="label" class="label" id="label">
                                        <slot></slot>${this.label}
                                    </span>
                                `:y}
                            ${e?T`
                                    <span part="instructions" class="instructions form-control__instructions" id="instructions">
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </span>
                                `:y}
                        </div>
                    `:y}
            </div>
        `}};_([E({type:Boolean,reflect:!0})],B.prototype,`checked`,void 0),_([E({attribute:`default-checked`,type:Boolean})],B.prototype,`defaultChecked`,void 0),_([E({type:Boolean,reflect:!0})],B.prototype,`invalid`,void 0),_([E({reflect:!0})],B.prototype,`size`,void 0),_([E()],B.prototype,`value`,void 0),_([E()],B.prototype,`label`,void 0),_([E()],B.prototype,`instructions`,void 0),_([v(`.input`)],B.prototype,`input`,void 0),_([v(`[part="switch"]`)],B.prototype,`switchElement`,void 0),B=_([w(`pk-lightswitch`)],B);var V={default:x`
        --pk-dropdown-item-padding-block: 8px;
        --pk-dropdown-item-padding-inline: 12px;
        --pk-dropdown-item-gap: 0.625rem;
        --pk-dropdown-item-font-size: var(--pk-font-size-base);
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 12px;
        --pk-dropdown-label-font-size: 13px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xs:x`
        --pk-dropdown-item-padding-block: 3px;
        --pk-dropdown-item-padding-inline: 8px;
        --pk-dropdown-item-gap: 0.375rem;
        --pk-dropdown-item-font-size: 12px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 10px;
        --pk-dropdown-label-padding-inline: 8px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 11px;
    `,sm:x`
        --pk-dropdown-item-padding-block: 4px;
        --pk-dropdown-item-padding-inline: 10px;
        --pk-dropdown-item-gap: 0.4375rem;
        --pk-dropdown-item-font-size: 13px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 10px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 12px;
    `,lg:x`
        --pk-dropdown-item-padding-block: 10px;
        --pk-dropdown-item-padding-inline: 14px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 16px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 14px;
        --pk-dropdown-label-padding-inline: 14px;
        --pk-dropdown-label-font-size: 14px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xl:x`
        --pk-dropdown-item-padding-block: 12px;
        --pk-dropdown-item-padding-inline: 16px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 18px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 16px;
        --pk-dropdown-label-padding-inline: 16px;
        --pk-dropdown-label-font-size: 15px;
        --pk-dropdown-details-font-size: var(--pk-font-size-base);
    `},hr=x`
    @layer pk-component {
        :host {
            ${V.default}
        }

        :host([size='xs']) {
            ${V.xs}
        }

        :host([size='sm']) {
            ${V.sm}
        }

        :host([size='lg']) {
            ${V.lg}
        }

        :host([size='xl']) {
            ${V.xl}
        }
    }
`,gr=x`
    @layer pk-component {
        .panel[data-size='default'],
        .submenu-panel[data-size='default'] {
            ${V.default}
        }

        .panel[data-size='xs'],
        .submenu-panel[data-size='xs'] {
            ${V.xs}
        }

        .panel[data-size='sm'],
        .submenu-panel[data-size='sm'] {
            ${V.sm}
        }

        .panel[data-size='lg'],
        .submenu-panel[data-size='lg'] {
            ${V.lg}
        }

        .panel[data-size='xl'],
        .submenu-panel[data-size='xl'] {
            ${V.xl}
        }
    }
`;x`
    ${hr}
    ${gr}
`;var _r=[sr,gr,x`
    @layer pk-component {
        :host {
            display: block;
            position: relative;
            /*
             * Slotted label text inherits from this host (light DOM), not from
             * shadow .item — pin size-token metrics so Craft CP / Tailwind /
             * bare hosts all get the same item rhythm.
             */
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .item {
            display: flex;
            align-items: center;
            gap: var(--pk-dropdown-item-gap, 0.625rem);
            width: 100%;
            margin: 0;
            padding: var(--pk-dropdown-item-padding-block, 8px) var(--pk-dropdown-item-padding-inline, 12px);
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            /* Explicit — do not let font:inherit re-leak page line-height. */
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([data-highlighted]) .item,
        :host([submenu-open]) .item {
            background: var(--pk-color-slate-100);
        }

        .item:focus-visible {
            background: var(--pk-color-slate-100);
        }

        .item[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .label {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .prefix {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            line-height: 0;
        }

        .prefix--empty {
            display: none;
        }

        .prefix ::slotted(*) {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            /* Kill pk-icon text-baseline nudge inside the padded flex row. */
            vertical-align: 0;
        }

        .prefix ::slotted(svg),
        .prefix ::slotted(*) svg,
        .prefix ::slotted(.pk-dropdown-item__prefix-icon) {
            display: block;
            width: var(--pk-dropdown-item-icon-size, 12px) !important;
            height: var(--pk-dropdown-item-icon-size, 12px) !important;
            max-width: var(--pk-dropdown-item-icon-size, 12px);
            max-height: var(--pk-dropdown-item-icon-size, 12px);
            flex-shrink: 0;
            pointer-events: none;
        }

        .details {
            margin-left: auto;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-dropdown-details-font-size, var(--pk-font-size-sm));
            letter-spacing: 0.04em;
        }

        .details:empty {
            display: none;
        }

        .check {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            color: var(--pk-color-gray-700);
        }

        .check svg {
            display: block;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            pointer-events: none;
        }

        .submenu-icon {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 1rem;
            color: var(--pk-color-gray-700);
        }

        .submenu-icon svg {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
        }

        .check {
            opacity: 0;
        }

        :host([checked]) .check {
            opacity: 1;
        }

        :host([type='checkbox']) .check,
        :host([type='radio']) .check {
            margin-left: auto;
        }

        :host([type='checkbox'][checked]) .check,
        :host([type='radio'][checked]) .check {
            opacity: 1;
        }

        .submenu-icon:empty {
            display: none;
        }

        :host([destructive]) .item {
            color: var(--pk-color-error);
        }

        :host([destructive]) .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([destructive]) .item:focus-visible {
            color: var(--pk-color-error);
        }

        .submenu-panel {
            width: max-content;
            min-width: 8rem;
            max-height: var(--pk-popup-available-height, calc(100dvh - 20px));
            overflow: auto;
            overscroll-behavior: contain;
            padding: 4px 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            /* Match root menu panel — Craft body text, not gray-900. */
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .submenu-panel ::slotted(pk-dropdown-item),
        .submenu-panel ::slotted(pk-dropdown-separator),
        .submenu-panel ::slotted(pk-dropdown-label) {
            display: block;
        }

        .submenu-panel[hidden] {
            display: none !important;
        }
    }
`],vr,yr=s(r),br=s(f),H=class extends S{static{vr=this}constructor(...e){super(...e),this.value=``,this.type=`normal`,this.radioGroup=``,this.disabled=!1,this.destructive=!1,this.checked=!1,this.submenuOpen=!1,this.active=!1,this.submenuAnimated=!1,this.hasSlotController=new je(this,`submenu`,`details`,`start`,`prefix`),this.handleMouseEnter=()=>{this.hasSubmenu()&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.styles=_r}connectedCallback(){super.connectedCallback(),this.syncRole(),this.syncSubmenuAria(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseenter`,this.handleMouseEnter)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseenter`,this.handleMouseEnter),this.closeSubmenu(),super.disconnectedCallback()}updated(e){(e.has(`type`)||e.has(`checked`))&&this.syncRole(),(e.has(`submenuOpen`)||e.size===0)&&this.syncSubmenuAria(),e.has(`submenuOpen`)&&(this.submenuOpen?this.ensureSubmenuSurface():this.submenuAnimated=!1)}hasSubmenu(){return this.hasSlotController.test(`submenu`)}syncSubmenuAria(){let e=this.hasSubmenu();e?this.setAttribute(`aria-haspopup`,`menu`):this.removeAttribute(`aria-haspopup`),this.setAttribute(`aria-expanded`,e&&this.submenuOpen?`true`:`false`)}focusControl(){this.shadowRoot?.querySelector(`.item`)?.focus({preventScroll:!0})}focus(e){let t=this.shadowRoot?.querySelector(`.item`);if(t){t.focus(e);return}super.focus(e)}get submenuElement(){return this.submenuPanelElement??null}closeSubmenu(){this.submenuAnimated=!1,this.submenuOpen=!1}openSubmenu(){this.hasSubmenu()&&!this.disabled&&this.isConnected&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}notifyParentOfOpening(){this.dispatchEvent(new CustomEvent(`pk-submenu-open`,{bubbles:!0,composed:!0,detail:{item:this}}));let e=this.parentElement;if(e)for(let t of e.children)t!==this&&t instanceof vr&&t.getAttribute(`slot`)===this.getAttribute(`slot`)&&t.submenuOpen&&(t.submenuOpen=!1)}ensureSubmenuSurface(){this.hasSubmenu()&&!this.disabled&&(this.submenuAnimated=!0,this.updateComplete.then(()=>{this.submenuOpen&&this.submenuPanelElement&&(this.submenuPanelElement.hidden=!1,Je(this.submenuPanelElement,`right-start`),Ye(this.submenuPopupElement,`right-start`).then(e=>{Je(this.submenuPanelElement,e)}))}))}syncRole(){if(this.type===`checkbox`){this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}if(this.type===`radio`){this.setAttribute(`role`,`menuitemradio`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}this.hasSubmenu()&&(e.preventDefault(),this.openSubmenu())}render(){let e=this.hasSubmenu(),t=this.type===`checkbox`||this.type===`radio`,n=this.hasSlotController.test(`start`)||this.hasSlotController.test(`prefix`);return T`
            <button
                part="item"
                type="button"
                class="item"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:y}
                @click=${this.handleClick}
            >
                <span
                    part="prefix"
                    class=${n?`prefix`:`prefix prefix--empty`}
                >
                    <slot name="start"></slot>
                    <slot name="prefix"></slot>
                </span>
                <span part="label" class="label"><slot></slot></span>
                <span class="details"><slot name="details"></slot></span>
                ${t?T`<span part="check" class="check" aria-hidden="true">${D(yr)}</span>`:y}
                ${e?T`<span class="submenu-icon" aria-hidden="true">${D(br)}</span>`:y}
            </button>
            ${e?T`
                <pk-popup
                    .active=${this.submenuOpen}
                    .anchor=${this}
                    placement="right-start"
                    .distance=${0}
                    .skidding=${-4}
                    flip
                    shift
                    auto-size="vertical"
                    .autoSizePadding=${10}
                    hover-bridge
                    style="--pk-popup-z-index: 1001"
                >
                    <div
                        part="submenu"
                        class="submenu-panel pk-popup-content"
                        role="menu"
                        data-size=${xr(this)}
                        ?hidden=${!this.submenuOpen}
                        data-open=${this.submenuAnimated?``:y}
                        aria-orientation="vertical"
                    >
                        <slot name="submenu"></slot>
                    </div>
                </pk-popup>
            `:y}
        `}};_([E()],H.prototype,`value`,void 0),_([E({reflect:!0})],H.prototype,`type`,void 0),_([E({attribute:`radio-group`})],H.prototype,`radioGroup`,void 0),_([E({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),_([E({type:Boolean,reflect:!0})],H.prototype,`destructive`,void 0),_([E({type:Boolean,reflect:!0})],H.prototype,`checked`,void 0),_([E({attribute:`submenu-open`,type:Boolean,reflect:!0})],H.prototype,`submenuOpen`,void 0),_([E({type:Boolean})],H.prototype,`active`,void 0),_([C()],H.prototype,`submenuAnimated`,void 0),_([v(`.submenu-panel`)],H.prototype,`submenuPanelElement`,void 0),_([v(`pk-popup`)],H.prototype,`submenuPopupElement`,void 0),H=vr=_([w(`pk-dropdown-item`)],H);function xr(e){let t=e.parentElement?.getAttribute(`data-size`);if(t===`xs`||t===`sm`||t==="default"||t===`lg`||t===`xl`)return t;let n=e.closest(`pk-dropdown-menu`)?.getAttribute(`size`);return n===`xs`||n===`sm`||n===`lg`||n===`xl`?n:`default`}var Sr=[be(),hr,gr,x`
        @layer pk-component {
            /* Standalone: keep a real box so the trigger is not a flex-stretched
               child of the page (display:contents flattened pk-button to full card width).
               Button groups override below — same as legacy + React MenuButton inline-flex wrap. */
            :host {
                display: inline-block;
                position: relative;
                width: fit-content;
                max-width: 100%;
                align-self: flex-start;
                vertical-align: middle;
            }

            :host([data-pk-group-orientation]) {
                display: inline-flex;
                vertical-align: middle;
                flex: 0 0 auto;
                width: auto;
                max-width: none;
                align-self: auto;
            }

            /* Belt-and-suspenders if a parent still flattens layout onto the trigger. */
            ::slotted([slot='trigger']) {
                width: fit-content;
                max-width: 100%;
                flex: 0 0 auto;
                align-self: flex-start;
            }

            :host([data-pk-group-orientation]) ::slotted([slot='trigger']) {
                --pk-bg-start-start-radius: inherit;
                --pk-bg-start-end-radius: inherit;
                --pk-bg-end-start-radius: inherit;
                --pk-bg-end-end-radius: inherit;
                align-self: auto;
                max-width: none;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]) {
                margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]) {
                margin-block-start: var(--pk-bg-vertical-indent, 0);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            }

            /* Menu panel — hug content; do not stretch to trigger/anchor width. */
            .panel {
                display: flex;
                flex-direction: column;
                width: max-content;
                min-width: 8rem;
                max-height: var(--pk-popup-available-height, calc(100dvh - 20px));
                margin: 0;
                overflow: auto;
                overscroll-behavior: contain;
                padding: 4px 0;
                border: 0;
                border-radius: var(--pk-radius-md);
                background: var(--pk-color-white);
                box-shadow: var(--pk-shadow-popup);
                /* v1 DropdownMenuItem had no face color — inherited Craft body
                 * (--text-color ≈ gray-700). Do not force gray-900 (too dark). */
                color: var(--text-color, var(--pk-color-gray-700));
                outline: none;
                text-align: start;
                user-select: none;
                /* Match v1 Base UI: popup writes --pk-transform-origin from the
                 * anchor center on the connecting edge (e.g. top-right for
                 * bottom-end). Keyword edge centers made end-aligned menus
                 * scale from the middle of the panel. */
                transform-origin: var(--pk-transform-origin, top);
            }

            .panel.show {
                animation: pk-dropdown-menu-show 100ms ease;
            }

            .panel.hide {
                animation: pk-dropdown-menu-show 100ms ease reverse;
            }

            .panel[hidden] {
                display: none !important;
            }

            ::slotted(pk-dropdown-item),
            ::slotted(pk-dropdown-separator),
            ::slotted(pk-dropdown-label),
            .panel > pk-dropdown-item,
            .panel > pk-dropdown-separator,
            .panel > pk-dropdown-label {
                display: block;
            }

            ::slotted([data-menu-item]) {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                width: 100%;
                margin: 0;
                padding: 8px 12px;
                border: 0;
                background: transparent;
                color: inherit;
                font: inherit;
                font-size: var(--pk-font-size-base);
                text-align: left;
                white-space: nowrap;
                cursor: default;
                user-select: none;
                outline: none;
                box-sizing: border-box;
            }

            ::slotted([data-menu-item]:hover:not([disabled])) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item]:focus-visible) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item][disabled]) {
                pointer-events: none;
                opacity: 0.5;
            }

            ::slotted(pk-dropdown-item[destructive]),
            ::slotted([data-destructive]) {
                color: var(--pk-color-error);
            }

            ::slotted([data-menu-separator]) {
                display: block;
                height: 1px;
                margin: 4px 0;
                background: var(--pk-color-slate-200);
                border: 0;
                padding: 0;
            }
        }

        /* Outside @layer so constructed stylesheets resolve the name reliably. */
        @keyframes pk-dropdown-menu-show {
            from {
                scale: 0.9;
                opacity: 0;
            }

            to {
                scale: 1;
                opacity: 1;
            }
        }
    `],Cr=new Set,U=class extends S{constructor(...e){super(...e),this.open=!1,this.size=`default`,this.placement=`bottom-start`,this.sideOffset=4,this.distance=4,this.skidding=0,this.for=``,this.userTypedQuery=``,this.userTypedTimeout=0,this.openSubmenuStack=[],this.openedByKeyboard=!1,this.triggerElement=null,this.handleMenuClick=e=>{let t=this.resolveMenuItem(e);if(t&&!t.disabled){if(t.hasSubmenu()){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.openSubmenu()),e.stopPropagation();return}this.makeSelection(t)}},this.handleSubmenuOpening=e=>{let t=e.detail?.item;t instanceof H&&(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t))},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement,r=e.composedPath(),i=t.matches(`:hover`),a=!!n.matches(`:hover`),o=i||r.some(e=>e===t),s=a||r.some(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===n);!o&&!s&&window.setTimeout(()=>{!i&&!a&&(t.submenuOpen=!1)},100)},this.handleTriggerClick=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open)},this.handleExternalTriggerClick=e=>{e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open},this.handleTriggerKeyDown=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(this.open||(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!0,this.open=!0))},this.handleDocumentKeyDown=e=>{let t=this.isRtl();if(e.key===`Escape`&&this.open&&Te(this)){e.preventDefault(),e.stopPropagation(),this.open=!1,this.getTrigger()?.focus({preventScroll:!0});return}if(!this.open)return;let n=[...Ge()].find(e=>e.localName===`pk-dropdown-item`),r=n?.localName===`pk-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a&&i?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu()){e.preventDefault(),e.stopPropagation(),this.closeSiblingSubmenus(s),s.openSubmenu(),this.addToSubmenuStack(s),window.setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&this.setActiveItem(e,e[0])},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,window.setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`&&t.parentElement instanceof H?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`){this.open=!1;return}if(e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)){window.clearTimeout(this.userTypedTimeout),this.userTypedTimeout=window.setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key;let t=this.userTypedQuery.trim().toLowerCase();l=o.find(e=>(e.textContent||``).trim().toLowerCase().startsWith(t))}if(l){e.preventDefault(),e.stopPropagation(),this.setActiveItem(o,l);return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu()?(this.closeSiblingSubmenus(s),s.openSubmenu(),this.addToSubmenuStack(s),window.setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&this.setActiveItem(e,e[0])},0)):this.makeSelection(s))},this.handleDocumentPointerDown=e=>{let t=e.composedPath(),n=this.getTrigger();t.some(e=>e===this||e===n)||(this.open=!1)}}static{this.styles=Sr}get panelElement(){return this.menuElement??null}get popup(){return this.popupElement??null}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleTriggerClick,!0),this.addEventListener(`keydown`,this.handleTriggerKeyDown)}firstUpdated(){let e=()=>{if(this.for){this.resolveExternalTrigger();return}this.syncSlottedTrigger()};queueMicrotask(e),requestAnimationFrame(e)}disconnectedCallback(){window.clearTimeout(this.userTypedTimeout),this.removeEventListener(`click`,this.handleTriggerClick,!0),this.removeEventListener(`keydown`,this.handleTriggerKeyDown),this.unbindTrigger(this.triggerElement),this.triggerElement=null,this.closeAllSubmenus(),this.popupElement&&(this.popupElement.active=!1),this.menuElement?.classList.remove(`show`,`hide`),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),Ce(this),Cr.delete(this),super.disconnectedCallback()}async updated(e){if(super.updated(e),e.has(`for`)&&this.resolveExternalTrigger(),e.has(`open`)&&this.syncTriggerExpanded(),!e.has(`open`))return;let t=e.get(`open`);t!==this.open&&(t!==void 0||this.open!==!1)&&(this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu(`unknown`)))}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`pk-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=((e.shadowRoot?.querySelector(`slot[name="submenu"]`))?.assignedElements({flatten:!0})??[...e.children].filter(e=>e.getAttribute(`slot`)===`submenu`)).filter(e=>e.localName===`pk-dropdown-item`);return t?n:n.filter(e=>!e.disabled)}getTrigger(){return this.for?Rn(this,this.for)??this.triggerElement:this.querySelector(`[slot="trigger"]`)??this.triggerElement}getAnchor(){return this.getTrigger()??``}resolveExternalTrigger(){this.unbindTrigger(this.triggerElement),this.triggerElement=this.for?Rn(this,this.for):null,this.bindTrigger(this.triggerElement),this.requestUpdate()}onTriggerSlotChange(e){if(this.for)return;let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t??null,this.bindTrigger(this.triggerElement),this.requestUpdate()}syncSlottedTrigger(){let e=this.renderRoot.querySelector(`slot[name="trigger"]`);e&&this.onTriggerSlotChange({target:e})}bindTrigger(e){e&&(e.setAttribute(`aria-haspopup`,`menu`),this.for&&(e.addEventListener(`click`,this.handleExternalTriggerClick),e.addEventListener(`keydown`,this.handleTriggerKeyDown)),this.syncTriggerExpanded())}unbindTrigger(e){e?.removeEventListener(`click`,this.handleExternalTriggerClick),e?.removeEventListener(`keydown`,this.handleTriggerKeyDown)}syncTriggerExpanded(){this.getTrigger()?.setAttribute(`aria-expanded`,this.open?`true`:`false`)}closeAfterSelect(e=`api`){this.open=!1}makeSelection(e){let t=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked),e.type===`radio`&&!e.checked&&(e.checked=!0);let n={value:e.value,type:e.type,checked:e.checked,radioGroup:e.radioGroup};e.dispatchEvent(new CustomEvent(`pk-select`,{detail:n,bubbles:!1,composed:!1,cancelable:!0}));let r=new CustomEvent(`pk-select`,{detail:n,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r),r.defaultPrevented||(this.open=!1,t?.focus({preventScroll:!0}))}resolveMenuItem(e){let t=e.target;if(t instanceof H)return t;if(t instanceof Element){let e=t.closest(`pk-dropdown-item`);if(e instanceof H)return e}return e.composedPath().find(e=>e instanceof H)??null}whenClosed(){return this.open?new Promise(e=>{this.addEventListener(`pk-after-hide`,()=>{this.popupElement.stop().then(()=>e())},{once:!0})}):this.popupElement?.active?this.popupElement.stop():Promise.resolve()}forceDismissCleanup(){this.open=!1,this.popupElement.active=!1,this.menuElement?.classList.remove(`show`,`hide`),this.closeAllSubmenus(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),Ce(this),Cr.delete(this)}isRtl(){return getComputedStyle(this).direction===`rtl`}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1,e.active=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`pk-dropdown-item:not([slot="submenu"])`);(t instanceof H?this.getSubmenuItems(t,!0):this.getItems(!0)).forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}setActiveItem(e,t){e.forEach(e=>{e.active=e===t,e===t?e.setAttribute(`data-highlighted`,``):e.removeAttribute(`data-highlighted`)}),t.focus({preventScroll:!0}),t.scrollIntoView({block:`nearest`})}async showMenu(){if(!this.popupElement||!this.menuElement)return;this.for&&!this.triggerElement?.isConnected&&this.resolveExternalTrigger();let e=new Se;if(!this.dispatchEvent(e)){this.open=!1;return}if(this.popupElement.active&&(this.popupElement.active=!1,this.menuElement.classList.remove(`show`,`hide`),await this.updateComplete),Cr.forEach(e=>{e!==this&&(e.open=!1)}),this.popupElement.active=!0,this.open=!0,Cr.add(this),Ae(this),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),await this.updateComplete,await Ye(this.popupElement,this.placement,100,{requireEvent:!0}),!this.open){this.popupElement.active=!1,Cr.delete(this),Ce(this),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove);return}this.menuElement.classList.remove(`hide`),await ke(this.menuElement,`show`);let t=this.getItems();t.length>0&&(this.openedByKeyboard?this.setActiveItem(t,t[0]):(t.forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),this.menuElement.focus({preventScroll:!0}))),this.openedByKeyboard=!1,this.dispatchEvent(new De),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))}async hideMenu(e){if(!this.popupElement||!this.menuElement)return;let t=new we(e);if(!this.dispatchEvent(t)){this.open=!0;return}this.open=!1,Cr.delete(this),Ce(this),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.userTypedQuery=``,window.clearTimeout(this.userTypedTimeout),this.getItems(!0).forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),this.menuElement.classList.remove(`show`),await ke(this.menuElement,`hide`),this.popupElement.active=!1,this.dispatchEvent(new Ee),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}render(){let e=this.hasUpdated?this.popupElement?.active:this.open;return T`
            <pk-popup
                .anchor=${this.for?this.getAnchor():``}
                placement=${this.placement}
                .distance=${this.distance||this.sideOffset}
                .skidding=${this.skidding}
                ?active=${e}
                flip
                shift
                .shiftPadding=${10}
                auto-size="vertical"
                .autoSizePadding=${10}
            >
                <slot
                    name="trigger"
                    slot="anchor"
                    @slotchange=${this.onTriggerSlotChange}
                ></slot>

                <div
                    id="menu"
                    part="panel"
                    class="panel"
                    role="menu"
                    tabindex="-1"
                    aria-orientation="vertical"
                    data-size=${this.size}
                    @click=${this.handleMenuClick}
                    @pk-submenu-open=${this.handleSubmenuOpening}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}};_([E({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),_([E({reflect:!0})],U.prototype,`size`,void 0),_([E({reflect:!0})],U.prototype,`placement`,void 0),_([E({attribute:`side-offset`,type:Number})],U.prototype,`sideOffset`,void 0),_([E({type:Number})],U.prototype,`distance`,void 0),_([E({type:Number})],U.prototype,`skidding`,void 0),_([E({reflect:!0})],U.prototype,`for`,void 0),_([v(`slot:not([name])`)],U.prototype,`defaultSlot`,void 0),_([v(`#menu`)],U.prototype,`menuElement`,void 0),_([v(`pk-popup`)],U.prototype,`popupElement`,void 0),U=_([w(`pk-dropdown-menu`)],U);var wr=x`
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            /* Former lg min-width — default now matches input default chrome. */
            min-width: 6.75rem;
            font-family: var(--pk-font-family);
            vertical-align: middle;
        }

        :host([size='xs']) {
            min-width: 5.5rem;
        }

        :host([size='sm']) {
            min-width: 6.125rem;
        }

        :host([size='lg']),
        :host([size='xl']) {
            min-width: 7.375rem;
        }

        :host([fit-cell]) {
            display: block;
            width: 100%;
            min-width: 0;
            max-width: 100%;
            height: 100%;
        }

        :host([fit-cell]) .root {
            display: block;
            width: 100%;
            height: 100%;
        }

        .root {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .swatch {
            position: absolute;
            top: 50%;
            left: 0.5rem;
            z-index: 2;
            width: 1.25rem;
            height: 1.25rem;
            transform: translateY(-50%);
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xs']) .swatch {
            left: 0.375rem;
            width: 1rem;
            height: 1rem;
        }

        :host([size='sm']) .swatch {
            left: 0.375rem;
            width: 1.25rem;
            height: 1.25rem;
        }

        :host([size='lg']) .swatch,
        :host([size='xl']) .swatch {
            left: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
        }

        :host([fit-cell]) .swatch {
            left: 0.5rem;
            width: 1rem;
            height: 1rem;
        }

        .swatch-preview {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.15);
        }

        .swatch-preview.is-transparent {
            background-color: #fff;
            background-image:
                linear-gradient(45deg, #d1d5db 25%, transparent 25%),
                linear-gradient(-45deg, #d1d5db 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #d1d5db 75%),
                linear-gradient(-45deg, transparent 75%, #d1d5db 75%);
            background-size: 8px 8px;
            background-position: 0 0, 0 4px, 4px -4px, -4px 0;
        }

        .swatch-picker {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            opacity: 0;
            cursor: pointer;
            appearance: none;
        }

        .swatch-picker:disabled {
            cursor: not-allowed;
        }

        .hash {
            position: absolute;
            top: 50%;
            left: 2.125rem;
            z-index: 1;
            transform: translateY(-50%);
            color: var(--pk-color-gray-300);
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
            pointer-events: none;
            user-select: none;
        }

        :host([size='xs']) .hash {
            left: 1.625rem;
        }

        :host([size='sm']) .hash {
            left: 2rem;
        }

        :host([size='lg']) .hash,
        :host([size='xl']) .hash {
            left: 2.5rem;
        }

        :host([fit-cell]) .hash {
            left: 1.75rem;
        }

        .hex-input {
            display: block;
            width: 100%;
            /* Former lg — matches pk-input default chrome (~34px). */
            height: 2.125rem;
            margin: 0;
            padding-inline: 3rem 0.75rem;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: var(--pk-input-bg);
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([size='xs']) .hex-input {
            height: 1.625rem;
            padding-inline: 2.25rem 0.625rem;
        }

        :host([size='sm']) .hex-input {
            height: 1.875rem;
            padding-inline: 2.75rem 0.75rem;
        }

        :host([size='lg']) .hex-input,
        :host([size='xl']) .hex-input {
            height: 2.375rem;
            padding-inline: 3.25rem 0.875rem;
        }

        :host([fit-cell]) .hex-input {
            width: 100%;
            max-width: 100%;
            height: 100%;
            padding-inline: 2.25rem 0.5rem;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        .hex-input:focus,
        .hex-input:focus-visible {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host([invalid]) .hex-input:focus,
        :host([invalid]) .hex-input:focus-visible {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([fit-cell]:not([invalid])) .hex-input:focus,
        :host([fit-cell]:not([invalid])) .hex-input:focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .hex-input,
        :host([fit-cell][invalid]) .hex-input:focus,
        :host([fit-cell][invalid]) .hex-input:focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        .hex-input:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        :host([invalid]) .hex-input {
            border-color: var(--pk-color-rose-600);
        }

        :host([disabled]) .swatch {
            opacity: 0.5;
        }
    }
`,Tr=`#000000`;function Er(e){return String(e||``).replace(/^#/,``).replace(/[^0-9a-fA-F]/g,``).slice(0,6).toLowerCase()}function Dr(e){return e.length===3||e.length===6}function Or(e){return e.length===3?e.split(``).map(e=>`${e}${e}`).join(``):e}function kr(e){return e.length===6?`#${e}`:e.length===3?`#${Or(e)}`:Tr}var W=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.size=`default`,this.fitCell=!1,this.readonly=!1,this.invalid=!1,this.value=``,this.defaultValue=``,this.ariaLabel=null,this.hexValue=``}static{this.styles=wr}static get validators(){return[...super.validators,ce(),ge()]}connectedCallback(){super.connectedCallback(),this.syncHexFromValue()}willUpdate(e){e.has(`value`)&&this.syncHexFromValue(),super.willUpdate(e)}syncHexFromValue(){this.hexValue=Er(this.value)}get validationTarget(){return this.input}syncFormValue(){let e=this.hexValue?`#${this.hexValue}`:``;this.setFormValue(e,e)}resetToDefaultValue(){this.value=this.defaultValue,this.hexValue=Er(this.defaultValue)}restoreFormState(e){typeof e==`string`&&(this.value=e,this.hexValue=Er(e))}emitChange(){let e=this.hexValue?`#${this.hexValue}`:``;this.value=e,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleHexInput(e){if(this.disabled||this.readonly)return;let t=Er(e.target.value);this.hexValue=t,this.emitChange()}handlePickerChange(e){if(this.disabled||this.readonly)return;let t=Er(e.target.value);this.hexValue=t,this.emitChange()}render(){let t=kr(this.hexValue),n=!Dr(this.hexValue);return T`
            <div class="root">
                <div part="swatch" class="swatch">
                    <div
                        class=${e({"swatch-preview":!0,"is-transparent":n})}
                        style=${n?y:`background-color: ${t}`}
                    ></div>
                    <input
                        part="picker"
                        class="swatch-picker"
                        type="color"
                        .value=${t}
                        ?disabled=${this.disabled||this.readonly}
                        aria-label="Color picker"
                        @input=${this.handlePickerChange}
                    />
                </div>
                <span class="hash" aria-hidden="true">#</span>
                <input
                    part="input"
                    class="hex-input"
                    type="text"
                    inputmode="text"
                    autocomplete="off"
                    maxlength="6"
                    .value=${this.hexValue}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-label=${this.ariaLabel??y}
                    aria-invalid=${this.invalid?`true`:y}
                    @input=${this.handleHexInput}
                />
            </div>
        `}};_([E({reflect:!0})],W.prototype,`size`,void 0),_([E({type:Boolean,reflect:!0,attribute:`fit-cell`})],W.prototype,`fitCell`,void 0),_([E({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),_([E({type:Boolean,reflect:!0})],W.prototype,`invalid`,void 0),_([E()],W.prototype,`value`,void 0),_([E({attribute:`default-value`})],W.prototype,`defaultValue`,void 0),_([E({attribute:`aria-label`})],W.prototype,`ariaLabel`,void 0),_([v(`.hex-input`)],W.prototype,`input`,void 0),_([C()],W.prototype,`hexValue`,void 0),W=_([w(`pk-color-input`)],W);var Ar=/^(\d{4})-(\d{2})-(\d{2})$/;function G(e){if(e==null||e===``)return null;if(e instanceof Date)return jr(e);if(typeof e!=`string`)return null;let t=Ar.exec(e.trim());if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=Number(t[3]);if(r<1||r>12||i<1||i>31)return null;let a=new Date(n,r-1,i);return a.getFullYear()!==n||a.getMonth()!==r-1||a.getDate()!==i?null:a}function K(e){return!e||Number.isNaN(e.getTime())?``:`${String(e.getFullYear()).padStart(4,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function jr(e){return e==null?null:e instanceof Date?Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate()):G(String(e))}function Mr(e){if(!e)return{from:null,to:null};let t=e.split(`/`);if(t.length===1)return{from:G(t[0]),to:null};let n=G(t[0]),r=G(t[1]);return!n||!r||n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n}}function Nr(e){if(!e)return``;let{from:t,to:n}=e;return!t&&!n?``:t&&!n?K(t):!t&&n?K(n):`${K(t)}/${K(n)}`}function Pr(e){if(!e)return[];let t=new Set,n=[];for(let r of e.split(`,`)){let e=G(r.trim());if(!e)continue;let i=K(e);t.has(i)||(t.add(i),n.push(e))}return n.sort((e,t)=>e.getTime()-t.getTime()),n}function Fr(e){let t=new Set;for(let n of e){let e=K(n??null);e&&t.add(e)}return[...t].sort().join(`,`)}function Ir(e,t){if(!K(t))return e??``;let n=Pr(e);return Fr(n.some(e=>q(e,t))?n.filter(e=>!q(e,t)):[...n,t])}function q(e,t){return!e||!t?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Lr(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function Rr(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function zr(e,t){let n=new Date(e.getFullYear(),e.getMonth()+t,1),r=Vr(n.getFullYear(),n.getMonth());return new Date(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))}function Br(e,t){return zr(e,t*12)}function Vr(e,t){return new Date(e,t+1,0).getDate()}function Hr(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Ur(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Wr(e,t){let n=e.getTime()-t.getTime();return Math.round(n/864e5)}function Gr(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=(t.getDay()+6)%7;t.setDate(t.getDate()-n+3);let r=new Date(t.getFullYear(),0,4),i=(r.getDay()+6)%7;return r.setDate(r.getDate()-i+3),1+Math.round((t.getTime()-r.getTime())/6048e5)}function Kr(e,t){return new Intl.DateTimeFormat(t||void 0,{year:`numeric`,month:`short`,day:`numeric`}).format(e)}function qr(e){let{min:t,max:n,disabledDates:r=[],disabledDaysOfWeek:i=[],disablePast:a=!1,disableFuture:o=!1,today:s,isDateDisabled:c}=e,l=t?.getTime()??-1/0,u=n?.getTime()??1/0,d=s.getTime(),f=new Set(i),p=new Set(r.map(e=>e.getTime()));return function(e){let t=e.getTime();return!!(t<l||t>u||a&&t<d||o&&t>d||f.size&&f.has(e.getDay())||p.size&&p.has(t)||c?.(e))}}function Jr(e){if(e==null||e===``)return[];let t=Array.isArray(e)?e:e.split(/\s+/),n=[];for(let e of t){if(e instanceof Date){Number.isNaN(e.getTime())||n.push(new Date(e.getFullYear(),e.getMonth(),e.getDate()));continue}let t=G(String(e).trim());t&&n.push(t)}return n}var Yr={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function Xr(e){if(e==null||e===``)return[];let t=String(e).toLowerCase().split(/\s+/).filter(Boolean),n=new Set;for(let e of t)e in Yr&&n.add(Yr[e]);return[...n]}function Zr(e,t,n){let r=e.getTime()<=t.getTime()?e:t,i=e.getTime()<=t.getTime()?t:e,a=new Date(r.getFullYear(),r.getMonth(),r.getDate());for(;a.getTime()<=i.getTime();){if(!n(a))return!1;a.setDate(a.getDate()+1)}return!0}var Qr=new Set(`US.CA.MX.BR.JP.PH.IL.AU.NZ.ZA.CO.VE.PE.EC.GT.HN.NI.SV.CR.PA.DO.PR.JM.TT.BS.BB.BZ.BO.BM.TW.HK.MO.SG.TH.ET.KE`.split(`.`)),$r=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`SY`,`IQ`,`EG`,`SD`,`DZ`,`LY`]),ei=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`EG`,`SD`,`DZ`,`LY`,`SY`,`IQ`,`IL`]);function ti(e){try{return new Intl.Locale(e).maximize().region??null}catch{return null}}function ni(e){let t=ti(e),n=1;t&&Qr.has(t)?n=7:t&&$r.has(t)&&(n=6);let r=t&&ei.has(t)?[5,6]:[6,7];return{firstDay:n,weekend:r}}function ri(e){try{let t=new Intl.Locale(e),n=typeof t.getWeekInfo==`function`?t.getWeekInfo():t.weekInfo;if(n&&typeof n.firstDay==`number`&&Array.isArray(n.weekend))return{firstDay:n.firstDay,weekend:n.weekend}}catch{}return ni(e)}function ii(e){return e===7?0:e}function ai(e){return e.map(ii)}function oi(e,t){return e===`auto`?ii(ri(t).firstDay):{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}[e]}var si=x`
    ${ze}
    @layer pk-component {
        :host {
            display: inline-block;
            width: fit-content;
            max-width: 100%;
            color: var(--pk-color-gray-900);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: 1;
            --pk-date-cell-size: 1.75rem;
            --pk-date-cell-radius: 100%;
            --pk-date-gap: 0.25rem;
            --pk-date-column-min: var(--pk-date-cell-size);
            --pk-date-column-gap: 0;
        }

        :host([weekday-format='short']) {
            --pk-date-column-min: 2.125rem;
            --pk-date-column-gap: 0.125rem;
        }

        :host([weekday-format='long']) {
            --pk-date-column-min: 3.375rem;
            --pk-date-column-gap: 0.125rem;
        }

        :host([weekday-format='long']) .weekday {
            font-size: 0.7rem;
        }

        :host([size='xs']) {
            --pk-date-cell-size: 1.5rem;
            font-size: 11px;
        }

        :host([size='sm']) {
            --pk-date-cell-size: 1.625rem;
            font-size: 12px;
        }

        :host([size='lg']) {
            --pk-date-cell-size: 2rem;
            font-size: 14px;
        }

        :host([size='xl']) {
            --pk-date-cell-size: 2.25rem;
            font-size: 15px;
        }

        :host([disabled]) {
            opacity: 0.5;
            pointer-events: none;
        }

        .base {
            display: flex;
            flex-direction: column;
            gap: var(--pk-date-gap);
            width: fit-content;
            padding: 0.5rem;
            border: var(--pk-calendar-border, var(--pk-input-border));
            border-radius: var(--pk-radius-md);
            background: var(--pk-calendar-background, var(--pk-color-white));
        }

        :host(:not([bordered])) {
            --pk-calendar-border: 0;
            --pk-calendar-background: transparent;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.25rem;
            min-height: var(--pk-date-cell-size);
            padding-inline: 0.125rem;
        }

        .title {
            flex: 1;
            margin: 0;
            padding: 0.25rem 0.5rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.2;
            text-align: center;
            cursor: pointer;
            user-select: none;
        }

        .title:hover:not(:disabled) {
            background: var(--pk-color-slate-100);
        }

        .nav-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: var(--pk-date-cell-size);
            height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0.25rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
        }

        .nav-button:hover:not(:disabled) {
            background: var(--pk-color-slate-100);
            color: var(--pk-color-gray-900);
        }

        .nav-button:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }

        .nav-button .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
        }

        .nav-button .icon svg {
            display: block;
            width: 12px;
            height: 12px;
        }

        .months {
            display: flex;
            gap: 1rem;
        }

        .month {
            display: flex;
            flex-direction: column;
            width: fit-content;
            min-width: calc(var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6);
        }

        :host([data-week-numbers]) .month {
            min-width: calc(
                var(--pk-date-cell-size) + var(--pk-date-column-gap) + var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6
            );
        }

        .month-label {
            margin-bottom: 0.5rem;
            font-size: 12px;
            font-weight: 500;
            text-align: center;
            color: var(--pk-color-gray-700);
        }

        .weekdays,
        .week {
            display: grid;
            grid-template-columns: repeat(7, minmax(var(--pk-date-column-min), 1fr));
            column-gap: var(--pk-date-column-gap);
            align-items: center;
            width: 100%;
        }

        :host([data-week-numbers]) .weekdays,
        :host([data-week-numbers]) .week {
            grid-template-columns: var(--pk-date-cell-size) repeat(7, minmax(var(--pk-date-column-min), 1fr));
        }

        .grid {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            margin-top: 0.2rem;
        }

        .weeknumber-header,
        .weeknumber {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--pk-date-cell-size);
            color: var(--pk-color-gray-500);
            font-size: 0.8rem;
            font-weight: 400;
            user-select: none;
        }

        .weekday {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: var(--pk-date-column-min);
            height: var(--pk-date-cell-size);
            padding-inline: 0.125rem;
            color: var(--pk-color-gray-500);
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.1;
            text-align: center;
            white-space: nowrap;
            user-select: none;
        }

        .day,
        .day.is-placeholder {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: center;
            width: var(--pk-date-cell-size);
            min-width: var(--pk-date-cell-size);
            max-width: var(--pk-date-cell-size);
            height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            font-weight: 400;
            line-height: 1;
            cursor: pointer;
        }

        .day.is-range-start,
        .day.is-range-end,
        .day.is-range-inner,
        .day.is-range-preview {
            justify-self: stretch;
            width: 100%;
            min-width: 0;
            max-width: none;
        }

        .day.is-range-start.is-range-end {
            justify-self: center;
            width: var(--pk-date-cell-size);
            min-width: var(--pk-date-cell-size);
            max-width: var(--pk-date-cell-size);
        }

        .day:focus-visible {
            outline: 2px solid var(--pk-color-blue-500);
            outline-offset: 1px;
            z-index: 1;
        }

        .day.is-outside {
            opacity: 0.6;
        }

        .day.is-disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        /* Day grid — circular today ring (fixed cell size, not column width) */
        .day.is-today:not(.is-range-start):not(.is-range-end):not(.is-range-inner)::after {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid var(--pk-color-blue-500);
            border-radius: var(--pk-date-cell-radius);
            pointer-events: none;
        }

        .day.is-selected:not(.is-range-start):not(.is-range-end):not(.is-range-inner) {
            background: var(--pk-color-gray-200);
            border-radius: var(--pk-date-cell-radius);
            color: var(--pk-color-gray-900);
            font-weight: 400;
        }

        .day.is-range-start,
        .day.is-range-end {
            background: var(--pk-color-gray-200);
            color: var(--pk-color-gray-900);
            font-weight: 400;
        }

        .day.is-range-start.is-range-end {
            border-radius: var(--pk-date-cell-radius);
        }

        .day.is-range-start:not(.is-range-end) {
            border-radius: var(--pk-date-cell-radius) 0 0 var(--pk-date-cell-radius);
        }

        .day.is-range-end:not(.is-range-start) {
            border-radius: 0 var(--pk-date-cell-radius) var(--pk-date-cell-radius) 0;
        }

        .day.is-range-inner {
            background: var(--pk-color-gray-200);
            border-radius: 0;
        }

        .day.is-range-preview:not(.is-range-start):not(.is-range-end) {
            background: var(--pk-color-gray-200);
            opacity: 0.7;
        }

        .day.is-placeholder {
            visibility: hidden;
            pointer-events: none;
        }

        .live-region {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        slot[name='footer']::slotted(*) {
            display: block;
            padding-top: 0.25rem;
        }

        .view-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(var(--pk-date-cell-size), 1fr));
            gap: 0.25rem;
            width: 100%;
            min-width: calc(var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6);
        }

        .view-row {
            display: contents;
        }

        .view-cell {
            display: contents;
        }

        .view-item {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0.375rem 0.5rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            cursor: pointer;
        }

        .view-item.is-selected {
            background: var(--pk-color-gray-200);
            font-weight: 500;
        }

        /* Month/year grid — rectangular today outline */
        .view-item.is-today:not(.is-selected) {
            box-shadow: inset 0 0 0 1px var(--pk-color-blue-500);
            border-radius: var(--pk-radius-sm);
        }

        .view-item.is-disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .view-item:focus-visible {
            outline: 2px solid var(--pk-color-blue-500);
            outline-offset: 1px;
        }
    }
`,ci=s(u.chevronLeft),li=s(u.chevronRight),J=class extends S{constructor(...e){super(...e),this.hasSlotController=new je(this,`footer`,`previous-icon`,`next-icon`),this.mode=`single`,this.size=`default`,this.value=``,this.min=``,this.max=``,this.today=``,this.view=`days`,this.months=1,this.pageBy=`months`,this.focusedDate=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.weekdayFormat=`narrow`,this.disabled=!1,this.readonly=!1,this.bordered=!0,this.disabledDatesRaw=``,this.disabledDaysOfWeek=``,this.disablePast=!1,this.disableFuture=!1,this.minRange=0,this.maxRange=0,this.locale=``,this.viewAnchor=Hr(Ur()),this.rangeAnchor=null,this.hoverDate=null,this.liveAnnouncement=``,this.focusedMonth=null,this.focusedYear=null,this.daySlotNames=[],this.handlePrevious=()=>{if(this.view===`days`){this.viewAnchor=zr(this.viewAnchor,-this.pageStep);return}if(this.view===`months`){this.viewAnchor=Br(this.viewAnchor,-1);return}this.viewAnchor=Br(this.viewAnchor,-12)},this.handleNext=()=>{if(this.view===`days`){this.viewAnchor=zr(this.viewAnchor,this.pageStep);return}if(this.view===`months`){this.viewAnchor=Br(this.viewAnchor,1);return}this.viewAnchor=Br(this.viewAnchor,12)},this.handleTitleClick=()=>{if(!this.disabled){if(this.view===`days`){this.setView(`months`),this.focusedMonth=this.resolvedFocusedDate.getMonth();return}this.view===`months`&&(this.setView(`years`),this.focusedYear=this.resolvedFocusedDate.getFullYear())}},this.handleGridMouseLeave=()=>{this.hoverDate=null}}static{this.styles=si}connectedCallback(){super.connectedCallback(),this.syncViewAnchor(),this.syncCustomStates(),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){this.childrenObserver?.disconnect(),super.disconnectedCallback()}willUpdate(e){(e.has(`value`)||e.has(`focusedDate`)||e.has(`mode`))&&this.syncViewAnchor(),(e.has(`disabled`)||e.has(`readonly`)||e.has(`mode`)||e.has(`withWeekNumbers`))&&this.syncCustomStates(),e.has(`view`)&&this.emitViewChange(),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!e?.startsWith(`day-`));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}syncCustomStates(){this.toggleAttribute(`data-range`,this.mode===`range`),this.toggleAttribute(`data-multiple`,this.mode===`multiple`),this.toggleAttribute(`data-week-numbers`,this.withWeekNumbers)}get resolvedLocale(){return this.locale||this.lang||document.documentElement.lang||`en`}get resolvedToday(){return G(this.today)??Ur()}get primarySelectedDate(){return this.mode===`single`?G(this.value):this.mode===`multiple`?Pr(this.value)[0]??null:Mr(this.value).from}get resolvedFocusedDate(){return G(this.focusedDate)??jr(this.primarySelectedDate)??this.resolvedToday}get isDisabledMatcher(){return qr({min:G(this.min),max:G(this.max),disabledDates:Jr(this.disabledDatesRaw),disabledDaysOfWeek:Xr(this.disabledDaysOfWeek),disablePast:this.disablePast,disableFuture:this.disableFuture,today:this.resolvedToday,isDateDisabled:this.isDateDisabled})}get weekendDays(){return new Set(ai(ri(this.resolvedLocale).weekend))}get pageStep(){return this.pageBy===`single`?1:this.months}get visibleMonthAnchors(){let e=[this.viewAnchor];return this.months===2&&e.push(Hr(zr(this.viewAnchor,1))),e}syncViewAnchor(){let e=this.resolvedFocusedDate;this.visibleMonthAnchors.some(t=>Lr(e,t))||(this.viewAnchor=Hr(e))}get valueAsDate(){return this.mode===`single`?G(this.value):null}get valueAsRange(){return Mr(this.value)}get valueAsDates(){return this.mode===`multiple`?Pr(this.value):[]}focus(e){let t=this.view===`days`?`.day.is-roving`:(this.view,`.view-item.is-roving`);this.renderRoot.querySelector(t)?.focus(e)}goToDate(e){let t=jr(e);t&&(this.viewAnchor=Hr(t),this.focusedDate=K(t),this.view=`days`)}goToToday(){this.goToDate(this.resolvedToday)}clear(){this.disabled||this.readonly||(this.value=``,this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange())}emitInput(){this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}emitChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitFocusDay(e){this.dispatchEvent(new CustomEvent(`pk-focus-day`,{detail:{date:e},bubbles:!0,composed:!0}))}emitViewChange(){this.dispatchEvent(new CustomEvent(`pk-view-change`,{detail:{view:this.view,date:this.resolvedFocusedDate},bubbles:!0,composed:!0}))}announce(e){this.liveAnnouncement=`${e}\u200B`}setView(e){this.view!==e&&(this.view=e)}handleDayClick(e,t){if(this.disabled||this.readonly||t)return;if(this.mode===`single`){this.value=K(e),this.focusedDate=K(e),this.emitInput(),this.emitChange(),this.announce(Kr(e,this.resolvedLocale));return}if(this.mode===`multiple`){let t=Pr(this.value).some(t=>q(t,e));this.value=Ir(this.value,e),this.focusedDate=K(e),this.emitInput(),this.emitChange(),this.announce(`${t?`Removed`:`Added`} ${Kr(e,this.resolvedLocale)}`);return}if(!this.rangeAnchor){this.rangeAnchor=e,this.value=K(e),this.focusedDate=K(e),this.emitInput();return}let n=this.rangeAnchor,r=e,i=n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n};if(this.minRange>0&&Wr(i.to,i.from)+1<this.minRange){this.announce(`Range must be at least ${this.minRange} days`);return}if(this.maxRange>0&&Wr(i.to,i.from)+1>this.maxRange){this.announce(`Range must be at most ${this.maxRange} days`);return}this.value=Nr(i),this.focusedDate=K(e),this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange(),this.announce(`${Kr(i.from,this.resolvedLocale)} – ${Kr(i.to,this.resolvedLocale)}`)}handleDayHover(e){this.mode===`range`&&this.rangeAnchor&&(this.hoverDate=e,this.emitFocusDay(e))}handleMonthPick(e){if(this.disabled||this.readonly)return;let t=new Date(this.viewAnchor.getFullYear(),e,1);this.isMonthFullyDisabled(t)||(this.viewAnchor=t,this.focusedDate=K(t),this.setView(`days`))}handleYearPick(e){if(this.disabled||this.readonly)return;let t=new Date(e,this.viewAnchor.getMonth(),1);this.isYearFullyDisabled(e)||(this.viewAnchor=t,this.focusedDate=K(t),this.setView(`months`),this.focusedMonth=t.getMonth())}handleDayKeyDown(e,t,n){if(n)return;let r=null;switch(e.key){case`ArrowLeft`:r=Rr(t,-1);break;case`ArrowRight`:r=Rr(t,1);break;case`ArrowUp`:r=Rr(t,-7);break;case`ArrowDown`:r=Rr(t,7);break;case`PageUp`:r=zr(t,-1);break;case`PageDown`:r=zr(t,1);break;case`Home`:r=Hr(t);break;case`End`:r=new Date(t.getFullYear(),t.getMonth()+1,0);break;case`Enter`:case` `:e.preventDefault(),this.handleDayClick(t,n);return;case`Escape`:this.rangeAnchor&&(e.preventDefault(),this.rangeAnchor=null,this.hoverDate=null,this.requestUpdate());return;default:return}e.preventDefault(),r&&(this.focusedDate=K(r),this.visibleMonthAnchors.some(e=>Lr(r,e))||(this.viewAnchor=Hr(r)),this.emitFocusDay(r),this.requestUpdate(),queueMicrotask(()=>this.focus()))}isMonthFullyDisabled(e){return Zr(e,new Date(e.getFullYear(),e.getMonth()+1,0),this.isDisabledMatcher)}isYearFullyDisabled(e){return Zr(new Date(e,0,1),new Date(e,11,31),this.isDisabledMatcher)}formatWeekdayLabel(e){return this.weekdayFormat===`narrow`?new Intl.DateTimeFormat(this.resolvedLocale,{weekday:`short`}).format(e).slice(0,2):new Intl.DateTimeFormat(this.resolvedLocale,{weekday:this.weekdayFormat}).format(e)}buildWeekdayLabels(){let e=oi(this.firstDayOfWeek,this.resolvedLocale),t=[];for(let n=0;n<7;n+=1){let r=(e+n)%7,i=new Date(2024,0,r===0?7:r);t.push(this.formatWeekdayLabel(i))}return t}buildMonthDays(e){let t=oi(this.firstDayOfWeek,this.resolvedLocale),n=Hr(e),r=Rr(n,-((n.getDay()-t+7)%7)),i=[];for(let e=0;e<42;e+=1)i.push(Rr(r,e));return i}computeDayState(e,t){let n=this.isDisabledMatcher(e),r=Mr(this.value),i=this.mode===`single`&&q(G(this.value),e),a=this.mode===`multiple`&&Pr(this.value).some(t=>q(t,e)),o=this.mode===`range`&&q(r.from,e),s=this.mode===`range`&&q(r.to,e),c=this.mode===`range`&&r.from&&r.to&&e.getTime()>r.from.getTime()&&e.getTime()<r.to.getTime(),l=!1;if(this.mode===`range`&&this.rangeAnchor&&this.hoverDate){let t=this.rangeAnchor,n=this.hoverDate,r=t.getTime()<=n.getTime()?t:n,i=t.getTime()<=n.getTime()?n:t;l=e.getTime()>=r.getTime()&&e.getTime()<=i.getTime()}return{date:e,monthAnchor:t,outside:!Lr(e,t),today:q(e,this.resolvedToday),weekend:this.weekendDays.has(e.getDay()),disabled:n,selected:i||a||o||s,rangeStart:o,rangeEnd:s,rangeInner:!!c,rangePreview:l,roving:q(e,this.resolvedFocusedDate)}}renderDayContent(e){let t=`day-${K(e.date)}`;if(this.daySlotNames.includes(t))return T`<slot name=${t}></slot>`;let n=this.dayContent?.(e.date);return n?h(n):T`<span part="day-label">${e.date.getDate()}</span>`}renderDay(t){if(!this.withOutsideDays&&t.outside)return T`<span part="day-placeholder" class="day is-placeholder" aria-hidden="true"></span>`;let n=Kr(t.date,this.resolvedLocale);return T`
            <button
                type="button"
                part="day"
                class=${e({day:!0,"is-outside":t.outside,"is-today":t.today,"is-weekend":t.weekend,"is-disabled":t.disabled,"is-selected":t.selected,"is-range-start":t.rangeStart,"is-range-end":t.rangeEnd,"is-range-inner":t.rangeInner,"is-range-preview":t.rangePreview,"is-roving":t.roving})}
                tabindex=${t.roving?`0`:`-1`}
                ?disabled=${t.disabled}
                aria-label=${n}
                aria-selected=${t.selected?`true`:`false`}
                aria-current=${t.today?`date`:y}
                @click=${()=>this.handleDayClick(t.date,t.disabled)}
                @mouseenter=${()=>this.handleDayHover(t.date)}
                @keydown=${e=>this.handleDayKeyDown(e,t.date,t.disabled)}
            >
                ${this.renderDayContent(t)}
            </button>
        `}getMonthWeeks(e){let t=this.buildMonthDays(e),n=[];for(let e=0;e<t.length;e+=7)n.push(t.slice(e,e+7));return this.withOutsideDays?n:n.filter(t=>t.some(t=>Lr(t,e)))}renderMonth(e,t=!1){let n=this.buildWeekdayLabels(),r=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(e),i=this.getMonthWeeks(e);return T`
            <div part="month" class="month">
                ${t?T`<div part="month-label" class="month-label">${r}</div>`:y}
                <div part="weekdays" class="weekdays" role="row">
                    ${this.withWeekNumbers?T`<span part="weeknumbers" class="weeknumber-header" role="columnheader">#</span>`:y}
                    ${n.map(e=>T`
                        <span part="weekday" class="weekday" role="columnheader">${e}</span>
                    `)}
                </div>
                <div
                    part="grid"
                    class="grid"
                    role="grid"
                    aria-label=${r}
                    @mouseleave=${this.handleGridMouseLeave}
                >
                    ${i.map(t=>T`
                        <div part="week" class="week" role="row">
                            ${this.withWeekNumbers?T`<span part="weeknumber" class="weeknumber" role="gridcell">${Gr(t[0])}</span>`:y}
                            ${t.map(t=>this.renderDay(this.computeDayState(t,e)))}
                        </div>
                    `)}
                </div>
            </div>
        `}renderViewRows(e){let t=[];for(let n=0;n<e.length;n+=3)t.push(T`
                <div part="view-row" class="view-row" role="row">
                    ${e.slice(n,n+3)}
                </div>
            `);return t}renderMonthsView(){let t=this.viewAnchor.getFullYear(),n=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`}),r=this.primarySelectedDate?.getMonth(),i=this.focusedMonth??this.resolvedFocusedDate.getMonth(),a=[];for(let o=0;o<12;o+=1){let s=new Date(t,o,1),c=this.isMonthFullyDisabled(s),l=r===o,u=this.resolvedToday.getFullYear()===t&&this.resolvedToday.getMonth()===o,d=i===o;a.push(T`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${u?`view-item-today`:``} ${l?`view-item-selected`:``} ${c?`view-item-disabled`:``}"
                        class=${e({"view-item":!0,"is-today":u,"is-selected":l,"is-disabled":c,"is-roving":d})}
                        tabindex=${d?`0`:`-1`}
                        ?disabled=${c}
                        @click=${()=>this.handleMonthPick(o)}
                    >
                        ${n.format(s)}
                    </button>
                </div>
            `)}return T`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(a)}
            </div>
        `}renderYearsView(){let t=this.viewAnchor.getFullYear(),n=Math.floor(t/12)*12,r=this.primarySelectedDate?.getFullYear(),i=this.focusedYear??this.resolvedFocusedDate.getFullYear(),a=[];for(let t=0;t<12;t+=1){let o=n+t,s=this.isYearFullyDisabled(o),c=r===o,l=this.resolvedToday.getFullYear()===o,u=i===o;a.push(T`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${l?`view-item-today`:``} ${c?`view-item-selected`:``} ${s?`view-item-disabled`:``}"
                        class=${e({"view-item":!0,"is-today":l,"is-selected":c,"is-disabled":s,"is-roving":u})}
                        tabindex=${u?`0`:`-1`}
                        ?disabled=${s}
                        @click=${()=>this.handleYearPick(o)}
                    >
                        ${o}
                    </button>
                </div>
            `)}return T`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(a)}
            </div>
        `}renderHeaderTitle(){if(this.view===`months`)return String(this.viewAnchor.getFullYear());if(this.view===`years`){let e=this.viewAnchor.getFullYear(),t=Math.floor(e/12)*12;return`${t} – ${t+11}`}return this.months===2?`${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)} – ${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(zr(this.viewAnchor,1))}`:new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)}render(){let e=this.view===`days`&&this.months===2;return T`
            <div part="base" class="base">
                <div part="header" class="header">
                    <button
                        type="button"
                        part="previous"
                        class="nav-button"
                        aria-label="Previous"
                        ?disabled=${this.disabled}
                        @click=${this.handlePrevious}
                    >
                        <slot name="previous-icon">
                            <span class="icon" aria-hidden="true">${D(ci)}</span>
                        </slot>
                    </button>
                    <button
                        type="button"
                        part="title"
                        class="title"
                        ?disabled=${this.disabled}
                        @click=${this.view===`years`?void 0:this.handleTitleClick}
                    >
                        ${this.renderHeaderTitle()}
                    </button>
                    <button
                        type="button"
                        part="next"
                        class="nav-button"
                        aria-label="Next"
                        ?disabled=${this.disabled}
                        @click=${this.handleNext}
                    >
                        <slot name="next-icon">
                            <span class="icon" aria-hidden="true">${D(li)}</span>
                        </slot>
                    </button>
                </div>

                <div part="months" class="months">
                    ${this.view===`days`?this.visibleMonthAnchors.map(t=>this.renderMonth(t,e)):this.view===`months`?this.renderMonthsView():this.renderYearsView()}
                </div>

                ${this.hasSlotController.test(`footer`)?T`<div part="footer"><slot name="footer"></slot></div>`:y}

                <div class="live-region" aria-live="polite" aria-atomic="true">
                    ${this.liveAnnouncement}
                </div>
            </div>
        `}};_([E({reflect:!0})],J.prototype,`mode`,void 0),_([E({reflect:!0})],J.prototype,`size`,void 0),_([E({reflect:!0})],J.prototype,`value`,void 0),_([E({reflect:!0})],J.prototype,`min`,void 0),_([E({reflect:!0})],J.prototype,`max`,void 0),_([E({reflect:!0})],J.prototype,`today`,void 0),_([E({reflect:!0})],J.prototype,`view`,void 0),_([E({type:Number,reflect:!0})],J.prototype,`months`,void 0),_([E({attribute:`page-by`,reflect:!0})],J.prototype,`pageBy`,void 0),_([E({attribute:`focused-date`,reflect:!0})],J.prototype,`focusedDate`,void 0),_([E({attribute:`first-day-of-week`,reflect:!0})],J.prototype,`firstDayOfWeek`,void 0),_([E({attribute:`with-outside-days`,type:Boolean,reflect:!0})],J.prototype,`withOutsideDays`,void 0),_([E({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],J.prototype,`withWeekNumbers`,void 0),_([E({attribute:`weekday-format`,reflect:!0})],J.prototype,`weekdayFormat`,void 0),_([E({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),_([E({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),_([E({type:Boolean,reflect:!0})],J.prototype,`bordered`,void 0),_([E({attribute:`disabled-dates`})],J.prototype,`disabledDatesRaw`,void 0),_([E({attribute:`disabled-days-of-week`,reflect:!0})],J.prototype,`disabledDaysOfWeek`,void 0),_([E({attribute:`disable-past`,type:Boolean,reflect:!0})],J.prototype,`disablePast`,void 0),_([E({attribute:`disable-future`,type:Boolean,reflect:!0})],J.prototype,`disableFuture`,void 0),_([E({attribute:`min-range`,type:Number})],J.prototype,`minRange`,void 0),_([E({attribute:`max-range`,type:Number})],J.prototype,`maxRange`,void 0),_([E({reflect:!0})],J.prototype,`locale`,void 0),_([E({attribute:!1})],J.prototype,`isDateDisabled`,void 0),_([E({attribute:!1})],J.prototype,`dayContent`,void 0),_([C()],J.prototype,`viewAnchor`,void 0),_([C()],J.prototype,`rangeAnchor`,void 0),_([C()],J.prototype,`hoverDate`,void 0),_([C()],J.prototype,`liveAnnouncement`,void 0),_([C()],J.prototype,`focusedMonth`,void 0),_([C()],J.prototype,`focusedYear`,void 0),_([C()],J.prototype,`daySlotNames`,void 0),J=_([w(`pk-calendar`)],J);function ui(){return globalThis.Craft}function di(){return ui()?.locale||document.documentElement.lang||`en-US`}function fi(e,t){let n=ui()?.formatDate;if(typeof n==`function`)try{return n(e)}catch{}let r=t||di();return new Intl.DateTimeFormat(r,{year:`numeric`,month:`numeric`,day:`numeric`}).format(e)}var pi=x`
    ${ze}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-date-picker-height: 2.125rem;
            --pk-date-picker-min-width: 8.125rem;
            --pk-date-picker-padding-inline: 10px;
            --pk-date-picker-font-size: var(--pk-font-size-base);
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .control {
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            width: fit-content;
            min-width: var(--pk-date-picker-min-width);
            max-width: 100%;
            height: var(--pk-date-picker-height);
            min-height: var(--pk-date-picker-height);
            margin: 0;
            padding: 0 var(--pk-date-picker-padding-inline);
            border: 1px solid var(--pk-color-slate-400);
            border-radius: var(--pk-radius-lg);
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-date-picker-font-size);
            font-weight: 400;
            line-height: 1.2;
            cursor: default;
            outline: none;
            box-sizing: border-box;
            transition: background-color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .control[data-popup-open] {
            background: var(--pk-color-slate-150);
            border-color: var(--pk-color-slate-400);
            box-shadow: none;
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled) {
            background: var(--pk-color-slate-50);
        }

        :host(:not([disabled])) .control[data-popup-open]:hover:not(.is-disabled),
        :host(:not([disabled])) .control:active:not(.is-disabled) {
            background: var(--pk-color-slate-150);
        }

        /* Outline-button focus — lighter than --pk-shadow-focus (see React DatePicker trigger). */
        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control[data-popup-open]:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control[data-popup-open] {
            border-color: var(--pk-color-slate-400);
            box-shadow: none;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .control:focus-visible,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .display-value {
            display: inline-flex;
            align-items: center;
            flex: 1;
            min-width: 0;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
            color: inherit;
        }

        .display-value.is-placeholder {
            color: var(--pk-color-gray-400);
        }

        .calendar-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-400);
            pointer-events: none;
        }

        .calendar-icon .icon,
        .calendar-icon svg {
            display: block;
            width: 14px;
            height: 14px;
        }

        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-inline-start: auto;
            width: 1.25rem;
            height: 1.25rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-500);
            cursor: pointer;
        }

        .icon-button:hover:not(:disabled) {
            color: var(--pk-color-gray-800);
            background: var(--pk-color-slate-100);
        }

        .icon-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .icon-button .icon {
            width: 0.875rem;
            height: 0.875rem;
        }

        .panel {
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
        }

        .panel pk-calendar {
            display: block;
        }

        :host([size='xs']) {
            --pk-date-picker-height: 1.5rem;
            --pk-date-picker-padding-inline: 8px;
            --pk-date-picker-font-size: 11px;
        }

        :host([size='sm']) {
            --pk-date-picker-height: 1.625rem;
            --pk-date-picker-padding-inline: 9px;
            --pk-date-picker-font-size: 12px;
        }

        :host([size='lg']) {
            --pk-date-picker-height: 2.125rem;
            --pk-date-picker-padding-inline: 11px;
            --pk-date-picker-font-size: 14px;
        }

        :host([size='xl']) {
            --pk-date-picker-height: 2.375rem;
            --pk-date-picker-padding-inline: 12px;
            --pk-date-picker-font-size: 15px;
        }
    }
`,mi=s(u.calendar),hi=s(u.xmark),Y=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`input`],this.hasSlotController=new je(this,`label`,`instructions`,`hint`,`start`,`end`,`footer`),this.controlId=Ne(`pk-date-picker`),this.open=!1,this.placement=`bottom`,this.sideOffset=4,this.size=`default`,this.mode=`single`,this.value=``,this.defaultValue=``,this.label=``,this.instructions=``,this.placeholder=``,this.withClear=!1,this.readonly=!1,this.invalid=!1,this.min=``,this.max=``,this.locale=``,this.disablePast=!1,this.disableFuture=!1,this.disabledDates=``,this.disabledDaysOfWeek=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.months=1,this.pageBy=`months`,this.minRange=0,this.maxRange=0,this.withLabel=!1,this.withInstructions=!1,this.ariaLabel=null,this.dismissRegistered=!1,this.daySlotNames=[],this.handleDocumentPointerDown=e=>{this.open&&Te(this)&&(this.isPointerInside(e)||this.closePanel(`light-dismiss`))},this.handleDocumentKeyDown=e=>{this.open&&e.key===`Escape`&&(e.preventDefault(),this.closePanel(`escape`))},this.handleControlClick=()=>{if(!this.disabled){if(this.open){this.closePanel(`api`);return}this.openPanel()}},this.handleControlKeyDown=e=>{if(!this.disabled){if(e.key===`ArrowDown`&&e.altKey){e.preventDefault(),this.openPanel(),queueMicrotask(()=>this.calendarElement?.focus());return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.handleControlClick())}},this.handleClearClick=e=>{e.preventDefault(),e.stopPropagation(),this.clear()},this.handleCalendarChange=e=>{let t=e.target;this.value=t.value,this.emitValueChange(),this.mode===`single`&&t.value&&this.closePanel(`api`),this.mode===`range`&&Mr(t.value).from&&Mr(t.value).to&&this.closePanel(`api`)},this.handleCalendarInput=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}}static{this.styles=[Pe,pi]}static get validators(){return[...super.validators,ce(),ge()]}connectedCallback(){this.instructions=ye(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback(),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){this.childrenObserver?.disconnect(),this.closePanel(`api`),super.disconnectedCallback()}willUpdate(e){e.has(`value`)&&(this.value instanceof Date&&(this.value=K(jr(this.value))),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value)),e.has(`open`)&&(this.setState(`open`,this.open),this.controlElement?.toggleAttribute(`data-popup-open`,this.open)),e.has(`mode`)&&(this.setState(`range`,this.mode===`range`),this.setState(`multiple`,this.mode===`multiple`)),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!e?.startsWith(`day-`));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}get valueString(){return this.value instanceof Date?K(jr(this.value)):this.value}syncFormValue(){this.setValue(this.valueString||``)}resetToDefaultValue(){this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}get resolvedLocale(){return this.locale||this.lang||di()}get displayText(){if(!this.value)return this.placeholder;if(this.mode===`multiple`){let e=Pr(this.valueString).length;return e===0?this.placeholder:`${e} date${e===1?``:`s`} selected`}if(this.mode===`range`){let e=Mr(this.valueString);return e.from&&e.to?`${fi(e.from,this.resolvedLocale)} – ${fi(e.to,this.resolvedLocale)}`:e.from?fi(e.from,this.resolvedLocale):this.placeholder}let e=G(this.value);return e?fi(e,this.resolvedLocale):this.placeholder}get valueAsDate(){return this.mode===`single`?G(this.value):null}get valueAsRange(){return Mr(this.valueString)}get valueAsDates(){return this.mode===`multiple`?Pr(this.valueString):[]}async show(){await this.openPanel()}async hide(){await this.closePanel(`api`)}clear(){this.disabled||this.readonly||!this.value||(this.value=``,this.dispatchEvent(new se),this.emitValueChange(),this.controlElement?.focus())}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}async openPanel(){this.disabled||this.open||this.dispatchEvent(new Se)&&(this.open=!0,this.registerDismissHandlers(),await this.updateComplete,await Ye(this.popupElement,this.placement),this.dispatchEvent(new De))}async closePanel(e=`unknown`){if(!this.open)return;let t=new we(e);this.dispatchEvent(t)&&(this.open=!1,this.unregisterDismissHandlers(),this.dispatchEvent(new Ee))}registerDismissHandlers(){this.dismissRegistered||=(Ae(this),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`keydown`,this.handleDocumentKeyDown,!0),!0)}unregisterDismissHandlers(){this.dismissRegistered&&=(Ce(this),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.handleDocumentKeyDown,!0),!1)}isPointerInside(e){return or(e,{host:this,panel:this.popupElement?.querySelector(`.panel`)??void 0})}renderClearButton(){return!this.withClear||!this.value||this.disabled?y:T`
            <button
                type="button"
                class="icon-button clear-button"
                part="clear-button"
                aria-label="Clear date"
                ?disabled=${this.disabled}
                @click=${this.handleClearClick}
            >
                <slot name="clear-icon">
                    <span class="icon" aria-hidden="true">${D(hi)}</span>
                </slot>
            </button>
        `}renderCalendarIcon(){return T`
            <span class="calendar-icon" part="expand-icon" aria-hidden="true">
                <slot name="expand-icon">
                    <span class="icon">${D(mi)}</span>
                </slot>
            </span>
        `}render(){let t=!!this.value,n=this.displayText,r=!t;return T`
            <div part="form-control" class="form-control">
                ${this.label||this.hasSlotController.test(`label`)?T`
                        <label part="label" class="label" for=${this.controlId}>
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:y}

                <div part="form-control-input" class="form-control-input">
                    <input
                        class="value-input"
                        type="hidden"
                        .value=${this.value}
                        ?required=${this.required}
                    />

                    <div
                        part="base"
                        id=${this.controlId}
                        class=${e({control:!0,"is-disabled":this.disabled})}
                        role="combobox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-haspopup="dialog"
                        aria-label=${this.ariaLabel??y}
                        tabindex=${this.disabled?`-1`:`0`}
                        @click=${this.handleControlClick}
                        @keydown=${this.handleControlKeyDown}
                    >
                        ${this.hasSlotController.test(`start`)?T`<span part="start" class="control-start"><slot name="start"></slot></span>`:y}

                        ${this.renderCalendarIcon()}

                        <span
                            part="input"
                            class=${e({"display-value":!0,"is-placeholder":r})}
                        >
                            ${n}
                        </span>

                        ${this.renderClearButton()}

                        ${this.hasSlotController.test(`end`)?T`<span part="end" class="control-end"><slot name="end"></slot></span>`:y}
                    </div>

                    <pk-popup
                        .active=${this.open}
                        .anchor=${this.controlElement??``}
                        .placement=${this.placement}
                        .distance=${this.sideOffset}
                    >
                        <div part="popup" class="panel" role="dialog" aria-label="Choose date">
                            <pk-calendar
                                part="calendar"
                                .bordered=${!1}
                                .mode=${this.mode}
                                .value=${this.value}
                                .min=${this.min}
                                .max=${this.max}
                                .locale=${this.resolvedLocale}
                                .months=${this.months}
                                .pageBy=${this.pageBy}
                                .firstDayOfWeek=${this.firstDayOfWeek}
                                .withOutsideDays=${this.withOutsideDays}
                                .withWeekNumbers=${this.withWeekNumbers}
                                .weekdayFormat=${this.weekdayFormat??y}
                                .minRange=${this.minRange}
                                .maxRange=${this.maxRange}
                                .disablePast=${this.disablePast}
                                .disableFuture=${this.disableFuture}
                                .disabledDatesRaw=${this.disabledDates}
                                .disabledDaysOfWeek=${this.disabledDaysOfWeek}
                                .isDateDisabled=${this.isDateDisabled}
                                .dayContent=${this.dayContent}
                                .disabled=${this.disabled}
                                .readonly=${this.readonly}
                                @change=${this.handleCalendarChange}
                                @input=${this.handleCalendarInput}
                            >
                                ${this.daySlotNames.map(e=>T`
                                    <slot name=${e} slot=${e}></slot>
                                `)}
                                <slot name="footer" slot="footer"></slot>
                            </pk-calendar>
                        </div>
                    </pk-popup>
                </div>

                ${this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)?T`
                        <div part="instructions" class="instructions">
                            <slot name="instructions">
                                <slot name="hint">${this.instructions}</slot>
                            </slot>
                        </div>
                    `:y}
            </div>
        `}};_([E({type:Boolean,reflect:!0})],Y.prototype,`open`,void 0),_([E({reflect:!0})],Y.prototype,`placement`,void 0),_([E({attribute:`side-offset`,type:Number})],Y.prototype,`sideOffset`,void 0),_([E({reflect:!0})],Y.prototype,`size`,void 0),_([E({reflect:!0})],Y.prototype,`mode`,void 0),_([E()],Y.prototype,`value`,void 0),_([E({attribute:`default-value`})],Y.prototype,`defaultValue`,void 0),_([E()],Y.prototype,`label`,void 0),_([E()],Y.prototype,`instructions`,void 0),_([E()],Y.prototype,`placeholder`,void 0),_([E({attribute:`with-clear`,type:Boolean})],Y.prototype,`withClear`,void 0),_([E({type:Boolean,reflect:!0})],Y.prototype,`readonly`,void 0),_([E({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),_([E({reflect:!0})],Y.prototype,`min`,void 0),_([E({reflect:!0})],Y.prototype,`max`,void 0),_([E({reflect:!0})],Y.prototype,`locale`,void 0),_([E({attribute:`disable-past`,type:Boolean,reflect:!0})],Y.prototype,`disablePast`,void 0),_([E({attribute:`disable-future`,type:Boolean,reflect:!0})],Y.prototype,`disableFuture`,void 0),_([E({attribute:`disabled-dates`})],Y.prototype,`disabledDates`,void 0),_([E({attribute:`disabled-days-of-week`,reflect:!0})],Y.prototype,`disabledDaysOfWeek`,void 0),_([E({attribute:`first-day-of-week`,reflect:!0})],Y.prototype,`firstDayOfWeek`,void 0),_([E({attribute:`with-outside-days`,type:Boolean,reflect:!0})],Y.prototype,`withOutsideDays`,void 0),_([E({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],Y.prototype,`withWeekNumbers`,void 0),_([E({attribute:`weekday-format`,reflect:!0})],Y.prototype,`weekdayFormat`,void 0),_([E({type:Number,reflect:!0})],Y.prototype,`months`,void 0),_([E({attribute:`page-by`,reflect:!0})],Y.prototype,`pageBy`,void 0),_([E({attribute:`min-range`,type:Number})],Y.prototype,`minRange`,void 0),_([E({attribute:`max-range`,type:Number})],Y.prototype,`maxRange`,void 0),_([E({attribute:!1})],Y.prototype,`isDateDisabled`,void 0),_([E({attribute:!1})],Y.prototype,`dayContent`,void 0),_([E({attribute:`with-label`,type:Boolean})],Y.prototype,`withLabel`,void 0),_([E({attribute:`with-instructions`,type:Boolean})],Y.prototype,`withInstructions`,void 0),_([E({attribute:`aria-label`})],Y.prototype,`ariaLabel`,void 0),_([E({reflect:!0})],Y.prototype,`width`,void 0),_([v(`.value-input`)],Y.prototype,`input`,void 0),_([v(`pk-popup`)],Y.prototype,`popupElement`,void 0),_([v(`pk-calendar`)],Y.prototype,`calendarElement`,void 0),_([v(`.control`)],Y.prototype,`controlElement`,void 0),_([C()],Y.prototype,`daySlotNames`,void 0),Y=_([w(`pk-date-picker`)],Y);function gi(e,t){let n=String(e??``),r=String(t??``).trim();if(!r)return[{text:n,match:!1}];let i=n.toLowerCase(),a=r.toLowerCase(),o=[],s=0,c=i.indexOf(a);for(;c!==-1;)c>s&&o.push({text:n.slice(s,c),match:!1}),o.push({text:n.slice(c,c+r.length),match:!0}),s=c+r.length,c=i.indexOf(a,s);return s<n.length&&o.push({text:n.slice(s),match:!1}),o.length>0?o:[{text:n,match:!1}]}var _i=x`
    @layer pk-component {
        :host {
            display: block;
            /*
             * Slotted option labels inherit type metrics from this host (same
             * Craft-vs-Tailwind trap as pk-dropdown-item). Size tokens arrive via
             * pk-select ::slotted(pk-option) custom properties.
             */
            font-family: var(--pk-font-family);
            font-size: var(--pk-select-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-select-item-line-height, 1.4);
            color: var(--pk-color-gray-700);
        }

        .option {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block, 6px);
            padding-inline-start: var(--pk-select-item-padding-inline, 10px);
            padding-inline-end: var(--pk-select-item-padding-inline-end, 2rem);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            background: transparent;
            color: inherit;
            font: inherit;
            font-family: var(--pk-font-family);
            font-size: var(--pk-select-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-select-item-line-height, 1.4);
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .start {
            display: none;
            flex: 0 0 auto;
            align-items: center;
        }

        :host([data-has-start]) .start {
            display: inline-flex;
        }

        :host([hidden]) {
            display: none !important;
        }

        .option:focus-visible,
        :host([highlighted]) .option {
            background: var(--pk-color-slate-100);
        }

        :host([disabled]) .option,
        .option[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .check {
            position: absolute;
            inset-inline-end: var(--pk-select-item-indicator-inset, 0.5rem);
            top: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            width: var(--pk-select-item-indicator-size, 0.75rem);
            height: var(--pk-select-item-indicator-size, 0.75rem);
            color: var(--pk-color-gray-700);
            pointer-events: none;
            transform: translateY(-50%);
            line-height: 0;
        }

        :host([selected]) .check {
            display: inline-flex;
        }

        .check svg {
            display: block;
            width: var(--pk-select-item-indicator-size, 0.75rem);
            height: var(--pk-select-item-indicator-size, 0.75rem);
            flex-shrink: 0;
            pointer-events: none;
        }

        .label {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            /* Allow custom multi-line option layouts (title + subtitle) to stack. */
            white-space: normal;
        }

        .match {
            padding: 0;
            border-radius: 2px;
            background: var(--pk-color-blue-100);
            color: inherit;
        }
    }
`,vi=s(u.check),X=class extends S{constructor(...e){super(...e),this.value=``,this.label=``,this.disabled=!1,this.selected=!1,this.highlighted=!1,this.hidden=!1,this.focusIndex=-1,this.optionId=``,this.matchQuery=``}static{this.styles=_i}focusControl(e=!0){this.shadowRoot?.querySelector(`.option`)?.focus({preventScroll:e})}getLabel(){if(this.label.trim())return this.label.trim();let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e?e.assignedNodes().map(e=>(e.textContent??``).trim()).filter(Boolean).join(` `).trim():this.textContent?.trim()??this.value}getSearchText(){let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e&&e.assignedNodes().map(e=>(e.textContent??``).trim()).filter(Boolean).join(` `).trim()||this.getLabel()}hasRichLabelContent(){return[...this.children].some(e=>e instanceof HTMLElement?!e.slot||e.slot===``:!1)}getStartElements(){return[...this.querySelectorAll(`:scope > [slot="start"]`)].filter(e=>e instanceof HTMLElement)}firstUpdated(){(this.shadowRoot?.querySelector(`slot[name="start"]`))?.addEventListener(`slotchange`,()=>this.syncStartDecoration()),this.syncStartDecoration()}syncStartDecoration(){this.toggleAttribute(`data-has-start`,this.getStartElements().length>0)}handleClick(){this.disabled||this.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleMouseEnter(){this.disabled||this.hidden||this.dispatchEvent(new CustomEvent(`pk-option-highlight`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleKeyDown(e){if(!new Set([`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `,`Escape`]).has(e.key))return;let t=this.closest(`pk-select, pk-combobox, pk-autocomplete`),n=t?null:this.closest(`[role="listbox"]`);if(!t&&!n)return;e.preventDefault(),e.stopPropagation();let r=new CustomEvent(`pk-listbox-keydown`,{detail:{keyboardEvent:e},bubbles:!0});if(t){t.dispatchEvent(r);return}n.dispatchEvent(r)}renderLabel(){let e=this.matchQuery.trim();return!e||this.hasRichLabelContent()?T`
                <span part="label" class="label">
                    <slot></slot>
                </span>
            `:T`
            <span part="label" class="label">
                ${gi(this.getLabel(),e).map(e=>e.match?T`<mark class="match">${e.text}</mark>`:T`<span>${e.text}</span>`)}
            </span>
        `}render(){return T`
            <button
                part="option"
                type="button"
                class="option"
                role="option"
                id=${this.optionId||y}
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:y}
                aria-selected=${this.selected?`true`:`false`}
                tabindex=${this.focusIndex}
                @click=${this.handleClick}
                @mouseenter=${this.handleMouseEnter}
                @keydown=${this.handleKeyDown}
            >
                <span part="start" class="start">
                    <slot name="start"></slot>
                </span>
                ${this.renderLabel()}
                <span part="check" class="check" aria-hidden="true">${D(vi)}</span>
            </button>
        `}};_([E()],X.prototype,`value`,void 0),_([E()],X.prototype,`label`,void 0),_([E({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),_([E({type:Boolean,reflect:!0})],X.prototype,`selected`,void 0),_([E({type:Boolean,reflect:!0})],X.prototype,`highlighted`,void 0),_([E({type:Boolean,reflect:!0})],X.prototype,`hidden`,void 0),_([E({type:Number,attribute:`focus-index`})],X.prototype,`focusIndex`,void 0),_([E()],X.prototype,`optionId`,void 0),_([E({attribute:!1})],X.prototype,`matchQuery`,void 0),X=_([w(`pk-option`)],X);var yi=[sr,x`
    ${ze}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-select-trigger-border-width: 1px;
            --pk-select-item-min-height: var(--pk-input-height);
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 2rem;
            --pk-select-item-font-size: var(--pk-font-size-base);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 SelectLabel default: text-xs → 12px */
            --pk-select-group-label-font-size: 12px;
            --pk-select-decoration-size: 0.875rem;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        :host([width='full']) button.control .icon {
            margin-inline-start: auto;
        }

        .control {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            /* Fill the host when consumers set min-width/width on :host. */
            width: 100%;
            max-width: 100%;
            min-width: 0;
            margin: 0;
            padding: var(--pk-select-item-padding-block) var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width) solid transparent;
            border-radius: var(--pk-radius-lg);
            --pk-select-fill: var(--pk-color-slate-250);
            --pk-select-fill-hover: var(--pk-color-slate-300);
            background: var(--pk-select-fill);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-input-control-line-height, 1.25rem);
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        button.control {
            appearance: none;
            -webkit-appearance: none;
            text-align: left;
            background-color: var(--pk-select-fill);
            border: var(--pk-select-trigger-border-width) solid transparent;
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled):not(:disabled),
        :host(:not([disabled])) button.control:hover:not(.is-disabled):not(:disabled) {
            background: var(--pk-select-fill-hover);
        }

        :host(:not([disabled])) button.control:hover:not(.is-disabled):not(:disabled) {
            background-color: var(--pk-select-fill-hover);
        }

        :host(:not([invalid]):not(:state(user-invalid))) button.control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) button.control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .trigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            min-width: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            cursor: inherit;
            outline: none;
        }

        .control > .trigger:not(.trigger--icon) {
            flex: 0 1 auto;
            justify-content: flex-start;
        }

        .trigger--icon {
            width: 1.25rem;
        }

        .trigger-start {
            display: none;
            flex: 0 0 auto;
            align-items: center;
        }

        .trigger-start.has-decoration {
            display: inline-flex;
        }

        .control-start,
        .control-end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-600);
        }

        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            width: var(--pk-select-decoration-size);
            height: var(--pk-select-decoration-size);
        }

        .value {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            pointer-events: none;
            color: var(--pk-color-gray-600);
        }

        /* Extra space before the expand chevron (control gap stays for start icon ↔ label). */
        .control > .icon,
        .control > .trigger--icon {
            margin-inline-start: 0.25rem;
        }

        .icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .tags {
            display: flex;
            flex: 0 1 auto;
            flex-wrap: wrap;
            gap: 0.25rem;
            min-width: 0;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            max-width: 10ch;
            padding: 0.125rem 0.375rem;
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-gray-200);
            color: var(--pk-color-gray-800);
            font-size: 12px;
            line-height: 1.3;
        }

        .tag-label {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 0.875rem;
            height: 0.875rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
        }

        .tag-remove:hover {
            background: rgb(0 0 0 / 8%);
        }

        .clear-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.25rem;
            height: 1.25rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            flex-shrink: 0;
        }

        .clear-button:hover {
            background: rgb(0 0 0 / 6%);
            color: var(--pk-color-gray-800);
        }

        .value-input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .panel ::slotted(pk-separator) {
            margin: 4px 0;
        }

        .panel {
            width: max-content;
            min-width: var(--pk-select-anchor-width, 8rem);
            max-height: 16rem;
            overflow: auto;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            color: var(--pk-color-gray-700);
            outline: none;
        }

        .panel[hidden] {
            display: none !important;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) button.control:focus-visible,
        :host([invalid][data-state='focus-visible']) button.control,
        :host(:state(user-invalid)) button.control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) button.control {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xs']) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.25;
            /* v1 SelectLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
        }

        :host([size='xs']) .control {
            border-radius: var(--pk-radius-sm);
            /* Match trigger line-height to the compact item token (default is 1.25rem). */
            line-height: var(--pk-select-item-line-height, 1.25);
        }

        :host([size='xs']) .icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        /* Options live in light DOM; ::slotted pushes size tokens onto each pk-option
         * host so the open listbox matches the trigger (inheritance alone is flaky when
         * the panel is promoted to the popover top layer). */
        :host([size='xs']) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.25;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host([size='xs']) .panel {
            max-height: 12rem;
        }

        /* Editable-table cells only (class set by pk-editable-table) — compact chip + menu. */
        :host(.cell-pk-control) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 5px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.5rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.2;
            /* Compact table chip — match xs label size. */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host(.cell-pk-control) .control {
            border-radius: var(--pk-radius-sm);
            line-height: var(--pk-select-item-line-height, 1.2);
        }

        :host(.cell-pk-control) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 5px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.5rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.2;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host(.cell-pk-control) .panel {
            max-height: 11rem;
        }

        :host([size='sm']) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 12px;
            --pk-select-item-indicator-inset: 0.625rem;
            /* v1 SelectLabel sm: text-[12px] */
            --pk-select-group-label-font-size: 12px;
            --pk-select-decoration-size: 0.6875rem;
        }

        :host([size='sm']) .control {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .icon svg {
            width: 0.6875rem;
            height: 0.6875rem;
        }

        :host([size='lg']) {
            --pk-select-item-padding-block: 8px;
            --pk-select-item-padding-inline: 12px;
            --pk-select-item-font-size: var(--pk-font-size-base);
            --pk-select-item-indicator-inset: 0.75rem;
            /* v1 SelectLabel lg: text-sm → 14px */
            --pk-select-group-label-font-size: 14px;
            --pk-select-decoration-size: 1rem;
        }

        :host([size='xl']) {
            --pk-select-item-padding-block: 10px;
            --pk-select-item-padding-inline: 14px;
            --pk-select-item-padding-inline-end: 2.25rem;
            --pk-select-item-font-size: var(--pk-font-size-base);
            --pk-select-item-indicator-inset: 0.875rem;
            /* v1 SelectLabel xl: text-base → 16px */
            --pk-select-group-label-font-size: 16px;
            --pk-select-decoration-size: 1.125rem;
        }

        :host([size='xl']) .icon svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
`],bi=s(u.chevronDown),Z=class extends pe{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=4,this.clearable=!1,this.withClear=!1,this.invalid=!1,this.size=`default`,this.placeholder=``,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.ariaLabel=null,this.loopFocus=!1,this.hasSlotController=new je(this,`start`,`end`),this.listboxId=Ne(`pk-select-listbox`),this.triggerId=Ne(`pk-select-trigger`),this.options=[],this.highlightedIndex=0,this.dismissRegistered=!1,this.panelEventTarget=null,this.typeToSelect=Xn([],()=>{}),this.closing=!1,this.panelAnimated=!1,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,this.applySelection(),this.updateTypeToSelect(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.togglePanel=e=>{e?.preventDefault(),e?.stopPropagation(),!(this.disabled||this.closing)&&(this.open?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(this.open){if(e.key===`Escape`){if(!Te(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`);return}(Wn.has(e.key)||Gn(e))&&ar(e,{anchor:this.getPopupAnchor(),panel:this.panelElement})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))}},this.handleOptionSelect=e=>{let{value:t}=e.detail;this.multiple?this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t]:(this.value=t,this.closePanel(`api`)),this.applySelection(),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t!==-1&&t!==this.highlightedIndex&&(this.highlightedIndex=t,this.syncHighlight())},this.onKeyDown=e=>{if(!this.open){(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.openPanel());return}this.onListboxKeyDown(e)},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)}}static{this.styles=yi}static get validators(){return[...super.validators,ce(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)?n:(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n)}}]}get panelElement(){return this.popupElement?.getContentElement()??null}connectedCallback(){this.refreshOptions(),super.connectedCallback(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.addEventListener(`keydown`,this.onKeyDown),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.removeEventListener(`keydown`,this.onKeyDown),this.optionsObserver?.disconnect(),this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&this.applySelection(),super.updated(e)}getOptionElements(){let e=this.popupElement?.getContentElement()?.querySelectorAll(`pk-option`);return e&&e.length>0?[...e]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;e&&e!==this.panelEventTarget&&(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&=(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),null)}get validationTarget(){return this.input??this.triggerButton??this.controlElement}getAriaMirrorTarget(){return this.triggerButton??this.controlElement??null}syncFormValue(){if(!this.name){this.setFormValue(null);return}if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e);return}this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.applySelection()}restoreFormState(e){if(e instanceof FormData&&this.name){this.values=e.getAll(this.name).map(String);return}typeof e==`string`&&(this.value=e)}isOptionInHiddenGroup(e){return!!e.closest(`pk-option-group`)?.hidden}getVisibleOptions(){return this.options.filter(e=>!this.isOptionInHiddenGroup(e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}applySelection(){let e=this.getVisibleOptions();for(let t of this.options)t.selected=this.isSelected(t.value),t.hidden=!e.includes(t),t.optionId=`${this.listboxId}-option-${t.value}`;for(let e of this.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}Qn(this),this.syncValueInput(),this.syncTriggerDecorations(),this.open&&this.syncHighlight()}syncValueInput(){if(this.input){if(this.multiple){this.input.value=this.values.join(`,`),this.input.required=this.required;return}this.input.value=this.value,this.input.required=this.required}}getDisplayValue(){if(this.multiple){let e=this.getSelectedOptions().map(e=>e.getLabel());return e.length>0?e.join(`, `):this.placeholder}return this.options.find(e=>e.value===this.value)?.getLabel()||this.placeholder}getSelectedOptions(){return this.options.filter(e=>this.isSelected(e.value))}syncTriggerDecorations(){let e=this.triggerStartElement;if(!e||this.multiple)return;e.replaceChildren(),e.classList.remove(`has-decoration`);let t=this.options.find(e=>e.value===this.value);if(t){for(let n of t.getStartElements())e.append(n.cloneNode(!0));e.classList.toggle(`has-decoration`,e.childElementCount>0)}}hasSelection(){return this.multiple?this.values.length>0:this.options.some(e=>e.value===this.value)||!!this.value}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}syncHighlight(){let e=this.getEnabledVisibleOptions();for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(e.length===0){this.highlightedIndex=0;return}this.highlightedIndex>=e.length&&(this.highlightedIndex=0);let t=e[this.highlightedIndex];t&&this.panelElement&&(t.highlighted=!0,t.focusIndex=0,Oe(t,this.panelElement,`vertical`,`auto`))}updateTypeToSelect(){this.typeToSelect=Xn(this.getEnabledVisibleOptions(),e=>{this.highlightedIndex=e,this.syncHighlight(),this.getEnabledVisibleOptions()[e]?.focusControl()})}getPopupAnchor(){return this.controlElement??null}getActiveDescendantId(){return this.getEnabledVisibleOptions()[this.highlightedIndex]?.optionId||null}async show(){this.open||this.closing||this.disabled||await this.openPanel()}async hide(e=`api`){this.open&&!this.closing&&await this.closePanel(e)}openPanel(){let e=this.getPopupAnchor();if(!e||this.closing)return Promise.resolve();this.dispatchEvent(new Se),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.popupElement.active=!0,this.applySelection(),this.syncHighlightedIndexToSelection(),this.panelElement&&(this.panelElement.hidden=!1,Je(this.panelElement,this.placement));let t=e.getBoundingClientRect().width;return this.style.setProperty(`--pk-select-anchor-width`,`${t}px`),this.registerDismissHandlers(),this.syncHighlight(),this.updateTypeToSelect(),this.updateComplete.then(async()=>{let e=await Ye(this.popupElement,this.placement,300,{requireEvent:!0});this.panelElement&&Je(this.panelElement,e),this.panelAnimated=!0,this.bindPanelEvents(),this.refreshOptions(),this.getEnabledVisibleOptions()[this.highlightedIndex]?.focusControl(),this.dispatchEvent(new De),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))})}async closePanel(e=`unknown`){if(!this.open||this.closing)return;let t=new we(e);this.dispatchEvent(t)&&(this.typeToSelect.reset(),this.unbindPanelEvents(),this.unregisterDismissHandlers(),this.closing=!0,this.panelAnimated=!1,await this.waitForExitAnimation(),this.open=!1,this.closing=!1,this.panelAnimated=!1,this.panelElement&&(this.panelElement.hidden=!0,this.panelElement.removeAttribute(`data-side`)),this.popupElement.active=!1,this.dispatchEvent(new Ee),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0})),this.shouldReturnFocusToTrigger(e)?this.triggerButton?.focus({preventScroll:!0}):this.triggerButton?.blur())}waitForExitAnimation(){let e=this.panelElement;return e?new Promise(t=>{let n=!1,r=()=>{n||(n=!0,e.removeEventListener(`animationend`,i),window.clearTimeout(a),e.classList.remove(`closing`),t())},i=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&r()};e.classList.add(`closing`),e.addEventListener(`animationend`,i);let a=window.setTimeout(r,150)}):Promise.resolve()}shouldReturnFocusToTrigger(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){Ae(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&=(Ce(this),!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return or(e,{anchor:this.getPopupAnchor(),panel:this.panelElement})}removeTag(e,t){t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange()}handleClear(e){e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.applySelection(),this.dispatchEvent(new se),this.emitValueChange(),this.triggerButton?.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}onListboxKeyDown(e){let t=this.getEnabledVisibleOptions();this.highlightedIndex=Yn(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{t[e]?.focusControl()},onClose:()=>{this.closePanel(`escape`)}}),e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&this.typeToSelect.handleKey(e)}renderTags(){return this.getSelectedOptions().map(e=>T`
            <span class="tag" part="tag">
                <span class="tag-label">${e.getLabel()}</span>
                <button
                    type="button"
                    class="tag-remove"
                    part="tag-remove"
                    aria-label=${`Remove ${e.getLabel()}`}
                    @click=${t=>this.removeTag(e.value,t)}
                >
                    ×
                </button>
            </span>
        `)}renderChevronIcon(){return T`
            <span class="icon" aria-hidden="true">${D(bi)}</span>
        `}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?T`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:T`<slot name=${e} hidden></slot>`}render(){let t=this.getDisplayValue(),n=!this.hasSelection(),r=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return T`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.multiple?this.values.join(`,`):this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            ${this.multiple?T`
                    <div
                        part="control"
                        class=${e({control:!0,"is-disabled":this.disabled})}
                    >
                        ${this.renderHostDecorationSlot(`start`)}
                        ${this.hasSelection()?T`
                                <div class="tags" part="tags">${this.renderTags()}</div>
                                ${r?T`
                                        <button
                                            type="button"
                                            class="clear-button"
                                            part="clear-button"
                                            aria-label="Clear selection"
                                            @click=${this.handleClear}
                                        >
                                            ×
                                        </button>
                                    `:y}
                            `:T`
                                <button
                                    part="trigger"
                                    type="button"
                                    class="trigger"
                                    id=${this.triggerId}
                                    ?disabled=${this.disabled}
                                    aria-label=${this.ariaLabel??y}
                                    aria-haspopup="listbox"
                                    aria-expanded=${this.open?`true`:`false`}
                                    aria-controls=${this.listboxId}
                                    @click=${this.togglePanel}
                                >
                                    <span class="value is-placeholder">${this.placeholder}</span>
                                </button>
                            `}
                        ${this.renderHostDecorationSlot(`end`)}
                        <button
                            type="button"
                            class="trigger trigger--icon"
                            part="trigger expand-button"
                            aria-label="Toggle options"
                            ?disabled=${this.disabled}
                            @click=${this.togglePanel}
                        >
                            ${this.renderChevronIcon()}
                        </button>
                    </div>
                `:T`
                    <button
                        part="control"
                        type="button"
                        class=${e({control:!0,"is-disabled":this.disabled})}
                        id=${this.triggerId}
                        ?disabled=${this.disabled}
                        aria-label=${this.ariaLabel??y}
                        aria-haspopup="listbox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-controls=${this.listboxId}
                        @click=${this.togglePanel}
                    >
                        ${this.renderHostDecorationSlot(`start`)}
                        <span part="trigger-start" class="trigger-start"></span>
                        <span
                            class=${e({value:!0,"is-placeholder":n})}
                        >${t}</span>
                        ${r?T`
                                <span
                                    class="clear-button"
                                    part="clear-button"
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Clear selection"
                                    @click=${this.handleClear}
                                >
                                    ×
                                </span>
                            `:y}
                        ${this.renderHostDecorationSlot(`end`)}
                        ${this.renderChevronIcon()}
                    </button>
                `}
            <pk-popup
                .anchor=${this.getPopupAnchor()??``}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                .sync=${`width`}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${e({panel:!0,"pk-popup-content":!0,closing:this.closing})}
                    id=${this.listboxId}
                    role="listbox"
                    aria-multiselectable=${this.multiple?`true`:`false`}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:y}
                    @slotchange=${this.syncOptions}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}};_([E({type:Boolean,reflect:!0})],Z.prototype,`open`,void 0),_([E({type:Boolean,reflect:!0})],Z.prototype,`multiple`,void 0),_([E({reflect:!0})],Z.prototype,`placement`,void 0),_([E({attribute:`side-offset`,type:Number})],Z.prototype,`sideOffset`,void 0),_([E({type:Boolean,reflect:!0})],Z.prototype,`clearable`,void 0),_([E({attribute:`with-clear`,type:Boolean})],Z.prototype,`withClear`,void 0),_([E({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),_([E({reflect:!0})],Z.prototype,`size`,void 0),_([E({reflect:!0})],Z.prototype,`width`,void 0),_([E()],Z.prototype,`placeholder`,void 0),_([E()],Z.prototype,`value`,void 0),_([E({attribute:`default-value`})],Z.prototype,`defaultValue`,void 0),_([E({type:Array,attribute:!1})],Z.prototype,`values`,void 0),_([E({attribute:!1})],Z.prototype,`defaultValues`,void 0),_([E({attribute:`aria-label`})],Z.prototype,`ariaLabel`,void 0),_([E({attribute:`loop-focus`,type:Boolean})],Z.prototype,`loopFocus`,void 0),_([v(`.trigger-start`)],Z.prototype,`triggerStartElement`,void 0),_([v(`pk-popup`)],Z.prototype,`popupElement`,void 0),_([v(`.control`)],Z.prototype,`controlElement`,void 0),_([v(`button.control, .control > button.trigger`)],Z.prototype,`triggerButton`,void 0),_([v(`.value-input`)],Z.prototype,`input`,void 0),_([C()],Z.prototype,`highlightedIndex`,void 0),_([C()],Z.prototype,`closing`,void 0),_([C()],Z.prototype,`panelAnimated`,void 0),Z=_([w(`pk-select`)],Z);var xi=null;function Si(){let e=globalThis.Craft?.timepicker;return{timeFormat:e?.timeFormat||`g:i A`,lang:{AM:e?.lang?.AM||`AM`,PM:e?.lang?.PM||`PM`},locale:e?.locale||document.documentElement.lang||`en-US`}}function Ci(){if(xi)return xi;let e=[],{timeFormat:t,lang:n,locale:r}=Si();for(let i=0;i<24;i+=1)for(let a=0;a<60;a+=30){let o=`${i.toString().padStart(2,`0`)}:${a.toString().padStart(2,`0`)}`,s;if(t===`g:i A`){let e=i;i===0?e=12:i>12&&(e=i-12);let t=i>=12?n.PM:n.AM;s=`${e}:${a.toString().padStart(2,`0`)} ${t}`}else s=t===`G:i`?o:new Date(`2000-01-01T${o}:00`).toLocaleTimeString(r,{hour:`numeric`,minute:`2-digit`,hour12:t.includes(`A`)});e.push({value:o,label:s})}return xi=e,e}var wi=x`
    @layer pk-component {
        :host {
            display: inline-block;
            width: 8.125rem;
            min-width: 8.125rem;
            color: var(--pk-color-gray-700);
            --pk-select-trigger-border-width: 1px;
            --pk-select-item-min-height: 2.125rem;
            --pk-select-item-padding-block: 0;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-font-size: var(--pk-font-size-base);
        }

        .control {
            justify-content: flex-start;
            gap: 0.5rem;
            width: 100%;
            height: 2.125rem;
            min-height: 2.125rem;
            border-color: var(--pk-color-slate-400) !important;
            border-radius: var(--pk-radius-lg) !important;
            background: transparent !important;
            background-color: transparent !important;
            text-align: left;
            font-weight: 400;
            line-height: 1.2;
            cursor: default;
        }

        :host([open]) .control {
            background: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            background-color: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            border-color: var(--pk-color-slate-400) !important;
            box-shadow: none;
        }

        :host(:not([disabled])) .control:hover:not(:disabled) {
            background: var(--pk-color-slate-50) !important;
            background-color: var(--pk-color-slate-50) !important;
        }

        :host(:not([disabled])[open]) .control:hover:not(:disabled),
        :host(:not([disabled])) .control:active:not(:disabled) {
            background: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            background-color: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600) !important;
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host(:not([invalid]):not(:state(user-invalid))[open]) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[open][data-state='focus-visible']) .control {
            border-color: var(--pk-color-slate-400) !important;
            box-shadow: none;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600) !important;
        }

        :host([invalid]) .control:focus-visible,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        .control-start {
            color: var(--pk-color-gray-400);
            pointer-events: none;
        }

        .control-start svg {
            display: block;
            width: 14px;
            height: 14px;
        }

        .value {
            flex: 1;
            line-height: 1.2;
            color: inherit;
        }

        .value.is-placeholder {
            color: var(--pk-color-gray-400);
        }

        .icon {
            margin-inline-start: auto;
            color: var(--pk-color-gray-600);
        }

        .panel {
            min-width: 8rem;
            max-height: 15rem;
        }

        /* Editable-table cells: flush fill — must live here so !important beats the
         * standalone trigger chrome (external ::part cannot override it). */
        :host(.cell-pk-control) {
            display: block;
            width: 100%;
            min-width: 0;
            height: 100%;
            --pk-select-trigger-border-width: 0;
            --pk-select-item-min-height: 100%;
            --pk-select-item-padding-block: 0;
        }

        :host(.cell-pk-control) .control {
            width: 100%;
            height: 100% !important;
            min-height: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
        }

        :host(.cell-pk-control:not([disabled])) .control:hover:not(:disabled),
        :host(.cell-pk-control[open]) .control,
        :host(.cell-pk-control:not([disabled])[open]) .control:hover:not(:disabled),
        :host(.cell-pk-control:not([disabled])) .control:active:not(:disabled) {
            border-radius: 0 !important;
        }

        :host(.cell-pk-control:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(.cell-pk-control:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border: 0 !important;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }
    }
`,Ti=class extends Z{constructor(...e){super(...e),this.optionsSeeded=!1}static{this.styles=[...yi,wi]}connectedCallback(){this.ensureTimeOptions(),this.ensureClockIcon(),super.connectedCallback()}ensureTimeOptions(){if(this.optionsSeeded||this.querySelector(`pk-option`)){this.optionsSeeded=!0;return}for(let e of Ci()){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.optionsSeeded=!0}ensureClockIcon(){if(this.querySelector(`[slot="start"]`))return;let e=p(u.clock);e.setAttribute(`slot`,`start`),this.prepend(e)}};Ti=_([w(`pk-time-picker`)],Ti);var Ei=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Di=re(class extends ee{constructor(e){if(super(e),e.type!==te.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=_e(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=he(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=he(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=he(i[d],a[m]),ve(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=he(i[f],a[p]),ve(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Ei(o,p,m),u=Ei(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=ve(e,i[d]);he(t,a[p]),c[p]=t}else c[p]=he(n,a[p]),ve(e,i[d],n),i[t]=null;p++}else de(i[f]),f--}else de(i[d]),d++;for(;p<=m;){let t=ve(e,c[m+1]);he(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&de(e)}return this.ut=o,ae(e,c),b}}),Oi=class e{static{this.SWAP_INSET=.3}constructor(e){this.callbacks=e,this.rows=[],this.disabled=!1,this.handleCleanups=[],this.dragSession=null}get isActive(){return this.handleCleanups.length>0}get isSessionActive(){return this.dragSession!==null}sync(e,t){if(!this.dragSession){this.destroyHandles(),this.rows=e,this.disabled=t;for(let t of e){if(!t.handle)continue;let e=e=>{this.handlePointerDown(e,t)};t.handle.addEventListener(`pointerdown`,e),this.handleCleanups.push(()=>{t.handle?.removeEventListener(`pointerdown`,e)})}}}destroy(){this.cancelDrag(),this.destroyHandles(),this.rows=[]}handlePointerDown(e,t){if(this.disabled||this.dragSession||e.button!==0||!e.isPrimary)return;let n=this.rows.findIndex(e=>e.id===t.id),r=t.element.parentElement,i=t.element.closest(`table`);if(n<0||!(r instanceof HTMLTableSectionElement)||!(i instanceof HTMLTableElement))return;e.preventDefault();let a=[...t.element.cells].map(e=>e.getBoundingClientRect().width),o=this.freezeTableColumns(i,a),s=t.element.getBoundingClientRect(),c=r.getBoundingClientRect(),l={x:e.clientX-s.left,y:e.clientY-s.top},u=this.createPlaceholder(t.element,a,s.height);t.element.insertAdjacentElement(`afterend`,u);let d=this.liftRow(t.element,s,a),f={row:t,fromIndex:n,table:i,tbody:r,placeholder:u,pointerId:e.pointerId,pointerOffset:l,startLeft:s.left,rowHeight:s.height,tbodyTop:c.top,tbodyBottom:c.bottom,fixedOrigin:d,unfreezeColumns:o,cleanup:[],committed:!1},p=t.element.ownerDocument,m=e=>{if(e.pointerId!==f.pointerId||f.committed)return;e.preventDefault();let t=f.tbody.getBoundingClientRect();f.tbodyTop=t.top,f.tbodyBottom=t.bottom,this.updateOverlay(f,e.clientY),this.updateGap(f,e.clientY-f.pointerOffset.y+f.rowHeight/2)},h=e=>{e.pointerId!==f.pointerId||f.committed||(e.preventDefault(),this.commitDrag(f))},g=e=>{e.pointerId!==f.pointerId||f.committed||this.cancelDrag()};p.addEventListener(`pointermove`,m,{passive:!1}),p.addEventListener(`pointerup`,h,{passive:!1}),p.addEventListener(`pointercancel`,g),f.cleanup.push(()=>{p.removeEventListener(`pointermove`,m)},()=>{p.removeEventListener(`pointerup`,h)},()=>{p.removeEventListener(`pointercancel`,g)}),this.dragSession=f,this.updateOverlay(f,e.clientY)}updateOverlay(e,t){let n=t-e.pointerOffset.y,r=e.tbodyTop,i=Math.max(r,e.tbodyBottom-e.rowHeight),a=Math.min(i,Math.max(r,n)),o=e.row.element;o.style.top=`${a-e.fixedOrigin.y}px`,o.style.left=`${e.startLeft-e.fixedOrigin.x}px`}updateGap(t,n){let r=t.placeholder,i=t.row.element,a=[...t.tbody.querySelectorAll(`tr[data-row-id]`)].filter(e=>e!==i&&!e.hasAttribute(`data-pk-dnd-placeholder`)),o=r.getBoundingClientRect(),s=n<o.top+o.height/2,c=e.SWAP_INSET,l=null;for(let e of a){let t=e.getBoundingClientRect();if(!(t.height<=0)&&n<(s?t.top+t.height*(1-c):t.top+t.height*c)){l=e;break}}if(l){r.nextElementSibling!==l&&t.tbody.insertBefore(r,l);return}t.tbody.lastElementChild!==r&&t.tbody.append(r)}commitDrag(e){if(e.committed||this.dragSession!==e)return;e.committed=!0,this.cleanupDrag(e),this.dragSession=null;let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].map(e=>e.dataset.rowId??``).filter(e=>e!==``);this.callbacks.onReorderTo(t)}cancelDrag(){let e=this.dragSession;e&&!e.committed&&(e.committed=!0,this.restorePlaceholderToOrigin(e),this.cleanupDrag(e),this.dragSession=null)}restorePlaceholderToOrigin(e){let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].filter(t=>t!==e.row.element&&!t.hasAttribute(`data-pk-dnd-placeholder`));if(e.fromIndex>=t.length){e.tbody.lastElementChild!==e.placeholder&&e.tbody.append(e.placeholder);return}let n=t[e.fromIndex];n&&e.placeholder.nextElementSibling!==n&&e.tbody.insertBefore(e.placeholder,n)}cleanupDrag(e){for(let t of e.cleanup)t();let t=e.row.element;e.placeholder.replaceWith(t),this.unliftRow(t),e.unfreezeColumns()}freezeTableColumns(e,t){e.querySelector(`:scope > colgroup[data-pk-dnd-cols]`)?.remove();let n=e.ownerDocument.createElement(`colgroup`);n.setAttribute(`data-pk-dnd-cols`,`true`);for(let r of t){let t=e.ownerDocument.createElement(`col`);t.style.width=`${r}px`,n.append(t)}let r=e.style.tableLayout;return e.prepend(n),e.style.tableLayout=`fixed`,()=>{n.remove(),e.style.tableLayout=r}}createPlaceholder(e,t,n){let r=e.cloneNode(!0);return r.setAttribute(`data-pk-dnd-placeholder`,`true`),r.setAttribute(`aria-hidden`,`true`),r.removeAttribute(`data-row-id`),r.style.visibility=`hidden`,r.style.pointerEvents=`none`,r.style.height=`${n}px`,[...r.cells].forEach((e,n)=>{let r=t[n];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`),e.replaceChildren()}),r}liftRow(e,t,n){e.classList.add(`is-dragging`),[...e.cells].forEach((e,t)=>{let r=n[t];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`)}),e.style.position=`fixed`,e.style.top=`0px`,e.style.left=`0px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,e.style.margin=`0`,e.style.zIndex=`2147483647`,e.style.pointerEvents=`none`,e.style.boxShadow=`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,e.style.background=`var(--pk-color-white, #fff)`,e.style.opacity=`0.96`;let r=e.getBoundingClientRect(),i={x:r.left,y:r.top};return e.style.top=`${t.top-i.y}px`,e.style.left=`${t.left-i.x}px`,i}unliftRow(e){e.classList.remove(`is-dragging`),e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.zIndex=``,e.style.pointerEvents=``,e.style.boxShadow=``,e.style.background=``,e.style.opacity=``;for(let t of e.cells)t.style.width=``,t.style.minWidth=``,t.style.maxWidth=``,t.style.boxSizing=``}destroyHandles(){for(let e of this.handleCleanups)e();this.handleCleanups=[]}},ki=x`
    @layer pk-component {
        :host {
            display: block;
            font-family: var(--pk-font-family);
            /* Craft CP body text (~gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            /* Shell matches v1 Table: border-gray-200 + rounded-md (token md = 4px). */
            --pk-et-border: 1px solid var(--pk-color-gray-200, #e5e7eb);
            --pk-et-radius: var(--pk-radius-md, 4px);
            --pk-et-gridline: var(--pk-color-gray-100, #f3f4f6);
            /* Static row height — matches v1 TableCell h-[34px] (border-box). */
            --pk-et-cell-height: 34px;
            --pk-et-action-size: 24px;
            --pk-et-action-icon: 12px;
            /* Grip reads smaller than ellipsis/x at the same token — nudge up slightly. */
            --pk-et-action-grip-icon: 14px;
        }

        /* v1 Table: shell scrolls horizontally; Add row sits outside so it stays full-width. */
        .et-scroll {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            border: var(--pk-et-border);
            border-radius: var(--pk-et-radius) var(--pk-et-radius) 0 0;
            background: var(--pk-color-white, #fff);
        }

        .et {
            /* v1 Table uses w-full: fill the shell, squish toward column width hints /
             * content minima, then overflow-x on .et-scroll takes over. */
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: var(--pk-color-white, #fff);
        }

        thead {
            background: var(--pk-color-gray-50, #f8fafc);
        }

        thead th {
            padding: 0.375rem 0.5rem;
            text-align: left;
            font-size: 12px;
            font-weight: 500;
            color: var(--pk-color-gray-700, #374151);
            background: var(--pk-color-gray-50, #f8fafc);
            /* v1 TableHead has no cell borders — body cells own the gridlines. */
            border: 0;
            white-space: nowrap;
        }

        tbody td + td {
            border-inline-start: 1px solid var(--pk-et-gridline);
        }

        thead th.thin,
        tbody td.thin {
            width: 0.01%;
            white-space: nowrap;
        }

        thead th.actions,
        tbody td.actions {
            width: 0.01%;
            white-space: nowrap;
        }

        tbody td.actions {
            padding-inline: 0.25rem;
            /* v1 TableRow actions cell — soft cool wash so controls read as chrome, not data. */
            background: #fbfcfe;
        }

        .required {
            margin-left: 0.125rem;
            color: var(--pk-color-rose-600, #e11d48);
        }

        tbody td {
            box-sizing: border-box;
            padding: 0;
            height: var(--pk-et-cell-height);
            background: var(--pk-color-white, #fff);
            /* v1 TableCell: border-t gray-100 — also separates header once th borders are gone. */
            border-top: 1px solid var(--pk-et-gridline);
            vertical-align: middle;
            /* Match v1 TableCell whitespace-nowrap — drives intrinsic mins before scroll. */
            white-space: nowrap;
            /* Let auto table layout compress past control preferred sizes. */
            min-width: 0;
        }

        tbody tr.is-dragging {
            opacity: 0.4;
        }

        /* Semantic row tones from modifyRow — host Tailwind cannot style shadow <tr>. */
        tbody tr[data-tone='warning'] > td {
            background: color-mix(in srgb, var(--pk-color-amber-50, #fffbeb) 80%, transparent);
        }

        tbody tr[data-tone='muted'] > td {
            background: color-mix(in srgb, var(--pk-color-slate-100, #f1f5f9) 90%, transparent);
        }

        .cell-pk-control {
            display: block;
            width: 100%;
            min-width: 0;
            height: var(--pk-et-cell-height);
            min-height: var(--pk-et-cell-height);
            --pk-input-border-radius: 0;
            --pk-select-border-radius: 0;
            --pk-date-picker-border-radius: 0;
            --pk-input-bg: var(--pk-color-white, #fff);
            --pk-combobox-fill: var(--pk-color-white, #fff);
            --pk-input-height: var(--pk-et-cell-height);
        }

        pk-input.cell-pk-control::part(base) {
            padding-inline: 0.5rem;
            background: var(--pk-color-white, #fff);
        }

        /* v1 EditableTable Input is text-sm (14px); size=xs would be 11px. */
        pk-input.cell-pk-control:not([mono])::part(input) {
            font-size: var(--pk-font-size-base, 14px);
        }

        /* v1 handle/value: font-mono text-[0.9em] — do not let the 14px cell
         * override wipe pk-input[mono]'s optical scale. */
        pk-input.cell-pk-control[mono]::part(input) {
            font-size: calc(var(--pk-font-size-base, 14px) * 0.9);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        /* Select/combobox sit inset horizontally only (v1 TableCell px-2).
         * No block padding — vertical inset comes from the size=xs chip itself. */
        tbody td:has(> pk-select.cell-pk-control),
        tbody td:has(> pk-combobox.cell-pk-control) {
            padding: 0 0.5rem;
        }

        pk-select.cell-pk-control,
        pk-combobox.cell-pk-control {
            display: block;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            /* Override shared .cell-pk-control height so the chip centers in the row. */
            height: auto;
            min-height: 0;
            /* Don't inherit the 34px cell --pk-input-height into the trigger. */
            --pk-input-height: auto;
            --pk-select-item-min-height: 0;
        }

        pk-input.cell-pk-control {
            /* Text-like cells fill the td. Inner input text keeps padding via ::part(base);
             * invalid chrome should hit the gridlines, not sit inside an inset chip. */
            height: var(--pk-et-cell-height);
            min-height: var(--pk-et-cell-height);
        }

        /* Date/time fill the cell flush — no trigger chrome (v1 border-none + h/w-full).
         * display:block so the inline-block host doesn't baseline-shift off center. */
        pk-date-picker.cell-pk-control,
        pk-time-picker.cell-pk-control {
            display: block;
            width: 100%;
            min-width: 0;
            height: var(--pk-et-cell-height);
            --pk-date-picker-height: var(--pk-et-cell-height);
            --pk-date-picker-min-width: 0;
            --pk-select-item-min-height: var(--pk-et-cell-height);
            --pk-select-trigger-border-width: 0;
        }

        /* The base trigger sizes to 100% of the host, but the shared form-control
         * wrappers default to auto height, collapsing that chain and top-aligning
         * the date. Stretch the wrappers so 100% resolves and align-items centers. */
        pk-date-picker.cell-pk-control::part(form-control),
        pk-date-picker.cell-pk-control::part(form-control-input) {
            height: 100%;
        }

        pk-date-picker.cell-pk-control::part(base) {
            width: 100%;
            min-width: 0;
            height: 100%;
            min-height: 100%;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        pk-date-picker.cell-pk-control::part(base):focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }

        pk-time-picker.cell-pk-control::part(control) {
            width: 100%;
            min-width: 0;
            height: 100% !important;
            min-height: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
        }

        pk-time-picker.cell-pk-control::part(control):focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }

        td.has-error .cell-pk-control {
            --pk-input-border-color: var(--pk-color-rose-600, #e11d48);
        }

        /* Flush/borderless date/time only — select/combobox/color paint their own
         * invalid chrome via ?invalid, so a host ring would double up. */
        td.has-error pk-date-picker.cell-pk-control,
        td.has-error pk-time-picker.cell-pk-control {
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600, #e11d48);
        }

        .cell-static {
            padding: 0.5rem;
            font-size: var(--pk-font-size-base, 14px);
            line-height: 1.4;
            color: inherit;
        }

        /* Custom / slotted cells — fill the td; light-DOM content keeps host styles. */
        .cell-slot {
            display: block;
            width: 100%;
            min-width: 0;
            min-height: var(--pk-et-cell-height);
            height: 100%;
        }

        .cell-slot ::slotted(*) {
            display: block;
            width: 100%;
            min-width: 0;
            min-height: var(--pk-et-cell-height);
            box-sizing: border-box;
        }

        .cell-heading {
            font-weight: 600;
            color: var(--pk-color-gray-800, #1f2937);
        }

        .cell-mono {
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        .cell-check {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--pk-et-cell-height);
            min-width: 2.125rem;
        }

        .cell-check--switch {
            min-width: 3rem;
        }

        pk-checkbox,
        pk-radio,
        pk-lightswitch {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .row-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            /* v1 packs 24px action buttons flush — no gap between hitboxes. */
            gap: 0;
        }

        .row-actions pk-dropdown-menu {
            display: inline-flex;
        }

        /* Action row buttons: fixed 24px hitbox (v1), variant=none, icon-only color hover. */
        .row-actions pk-button.action-btn {
            --pk-btn-height: var(--pk-et-action-size);
            --pk-btn-icon-size: var(--pk-et-action-icon);
            --pk-btn-padding-inline: 0;
            color: var(--pk-color-gray-500, #6b7280);
            width: var(--pk-et-action-size);
            flex: 0 0 var(--pk-et-action-size);
        }

        .row-actions pk-button.action-btn::part(base) {
            width: var(--pk-et-action-size);
            height: var(--pk-et-action-size);
            min-height: var(--pk-et-action-size);
            padding: 0;
            background: transparent;
        }

        .row-actions pk-button.action-btn::part(base):hover:not(:disabled) {
            /* No hover fill — only the glyph color shifts (v1 hover:bg-transparent). */
            background: transparent;
            color: var(--pk-color-sky-600, #0284c7);
        }

        .row-actions pk-button.action-btn.action-delete::part(base):hover:not(:disabled) {
            background: transparent;
            color: var(--pk-color-rose-500, #f43f5e);
        }

        .row-actions pk-button.action-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        /* Light-DOM handle wrapper (v1) — pointer drag binds here so shadow clicks don't interfere.
           pk-button :host { cursor: pointer } wins over inherited span cursor — set it on the host. */
        .row-actions .action-handle {
            display: inline-flex;
            cursor: move;
        }

        .row-actions .action-handle pk-button.action-btn {
            cursor: move;
            --pk-btn-icon-size: var(--pk-et-action-grip-icon);
        }

        .row-actions .action-handle:has(pk-button:disabled),
        .row-actions .action-handle pk-button.action-btn[disabled] {
            cursor: default;
        }

        /* Before deferred drag binding — grip visible but inactive (v1 faded controls). */
        .row-actions .action-handle.is-pending {
            opacity: 0.45;
        }

        /* Live row is floated as the overlay; placeholder clone holds the gap. */
        tr.is-dragging {
            display: table-row;
        }

        tr[data-pk-dnd-placeholder] {
            visibility: hidden;
            pointer-events: none;
        }

        /* Attach dashed add-row under the table shell (v1 Button variant=dashed). */
        pk-button.add-row {
            display: block;
            width: 100%;
            margin-top: -1px;
            --pk-btn-radius: 0;
        }

        pk-button.add-row::part(base) {
            width: 100%;
            border-top: 0;
            border-radius: 0 0 var(--pk-et-radius) var(--pk-et-radius);
        }

        :host([disabled]) pk-button.add-row {
            opacity: 0.5;
            pointer-events: none;
        }

        .empty {
            padding: 0.75rem 0.625rem;
            color: var(--pk-color-gray-500, #6b7280);
            font-size: 13px;
        }
    }
`,Q={EMPTY:`empty`,AUTO:`auto`,MANUAL:`manual`,SEEDED:`seeded`},Ai=e=>(e.type===`handle`||e.type===`value`)&&!!e.name&&!!e.source,ji=e=>!!(e.thin||e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`),Mi=e=>e==null||e===``,Ni=(e,t)=>`${e}:${t}`,Pi=e=>Array.isArray(e)?e.map(e=>typeof e==`string`?{label:e,value:e}:{label:String(e.label??e.value??``),value:String(e.value??``)}):[],Fi=e=>e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`?!1:``,Ii=e=>{let t=e.normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/['"'""[\](){}:]/g,``).split(/[^a-z0-9]+/).filter(Boolean);return t.length===0?``:t.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join(``)},Li=0,Ri=()=>(Li+=1,`etr_${Date.now().toString(36)}_${Li}`),zi=(e,t)=>`cell:${e}:${t}`,Bi=new Set([`text`,`textarea`,`number`,`email`,`url`,`select`,`combobox`,`checkbox`,`radio`,`lightswitch`,`color`,`date`,`time`,`heading`,`label`,`handle`,`value`,`custom`]),Vi=e=>{let t=e.type;return t===`custom`||typeof t==`string`&&!Bi.has(t)},Hi=new Set([`checkbox`,`radio`,`lightswitch`,`heading`,`label`]),Ui=new Set([`text`,`number`,`email`,`url`,`handle`,`value`,`color`,`date`,`time`]),Wi=e=>!Vi(e)&&Ui.has(e.type??`text`),Gi=e=>!Vi(e)&&!Hi.has(e.type??`text`),Ki=e=>String(e??``).replace(/^[\n\r ]+|[\n\r ]+$/g,``),qi=e=>/[\t\r\n]/.test(e),Ji=e=>{let t=Ki(e);return t?t.split(/\r?\n|\r/).map(e=>e.split(`	`)):[]},Yi=s(a).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Xi=s(l).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Zi=s(m).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Qi=s(c).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),$i=s(g).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),ea=s(t).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),ta=s(o).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),na=e=>{if(!e)return``;if(e===`gear`)return ta;let t=d(e);return t?s(t).replace(`<svg`,`<svg slot="start" aria-hidden="true"`):``},$=class extends pe{constructor(...e){super(...e),this.columns=[],this.rows=[],this.allowAdd=!0,this.allowDelete=!0,this.allowReorder=!0,this.allowInsert=!0,this.maxRows=null,this.addRowLabel=``,this.fieldName=``,this.cellErrors={},this.newRowDefaults={},this.modifyColumn=null,this.modifyRow=null,this.getRowMenuItems=null,this.internalRows=[],this.dndReady=!1,this.generatedCellModes=new Map,this.dndController=new Oi({onReorderTo:e=>{this.commitReorderByIds(e)}}),this.dndIdleId=null,this.dndTimeoutId=null,this.dndRowSignature=``}static{this.styles=ki}static get validators(){return[...super.validators,ge()]}willUpdate(e){if(e.has(`rows`)){let e=Array.isArray(this.rows)?this.rows:[],t=this.internalRows;this.internalRows=e.map((e,n)=>{let r=typeof e._id==`string`?e._id:typeof t[n]?._id==`string`?String(t[n]._id):Ri();return{...e,_id:r}}),this.syncGeneratedModesFromRows(),this.syncFormValue()}(e.has(`allowReorder`)||e.has(`disabled`))&&this.scheduleDndHydration(),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),this.scheduleDndHydration()}shouldUpdate(e){return!this.dndController.isSessionActive&&super.shouldUpdate(e)}updated(e){super.updated(e),this.dndReady&&this.allowReorder&&!this.disabled?this.dndController.isSessionActive||this.syncDndSortables():this.dndController.isActive&&(!this.allowReorder||this.disabled||!this.dndReady)&&(this.dndController.destroy(),this.dndRowSignature=``)}disconnectedCallback(){this.cancelDndHydration(),this.dndController.destroy(),this.dndReady=!1,super.disconnectedCallback()}get value(){return this.internalRows.length?JSON.stringify(this.cleanRows()):``}get validColumns(){return(Array.isArray(this.columns)?this.columns:[]).filter(e=>typeof e?.name==`string`&&e.name.trim()!==``)}get generatedColumns(){return this.validColumns.filter(Ai)}get showActionsColumn(){return this.allowReorder||this.allowDelete||this.allowInsert||!!this.getRowMenuItems}cleanRows(){return this.internalRows.map(e=>{let{_id:t,...n}=e;return n})}setCellValue(e,t,n){let r=this.internalRows[e];if(!r)return;let i=this.validColumns.find(e=>e.name===t);i&&this.updateCell(e,this.resolveColumn(r,i,e),n)}resolveColumn(e,t,n){let r=this.modifyColumn?.(e,t.name,t,n);return!r||typeof r!=`object`?t:{...t,...r,name:t.name}}resolveRowModifier(e,t){let n=this.modifyRow?.(e,t);return!n||typeof n!=`object`?{}:n}resolveRowMenuItems(e,t){let n=this.getRowMenuItems?.(e,t);return Array.isArray(n)?n.filter(e=>e&&typeof e.label==`string`):[]}syncGeneratedModesFromRows(){let e=this.generatedColumns;if(this.internalRows.length===0||e.length===0){this.generatedCellModes.clear();return}let t=new Set;for(let n of this.internalRows){let r=String(n._id);for(let i of e){let e=Ni(r,i.name);t.add(e),!this.generatedCellModes.has(e)&&this.generatedCellModes.set(e,Mi(n[i.name])?Q.EMPTY:Q.SEEDED)}}for(let e of[...this.generatedCellModes.keys()])t.has(e)||this.generatedCellModes.delete(e)}syncFormValue(){let e=JSON.stringify(this.cleanRows());this.setFormValue(e,e)}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.rows=t)}catch{}}stopInnerControlEvent(e){e.target!==this&&e.stopPropagation()}emitChange(){let e=this.internalRows.map(e=>({...e}));this.rows=e,this.syncFormValue(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{rows:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitCellChange(e,t,n,r){this.dispatchEvent(new CustomEvent(`pk-cell-change`,{detail:{rowIndex:e,columnName:t,value:n,row:r},bubbles:!0,composed:!0}))}commitRows(e,t=[]){this.internalRows=e,this.emitChange();for(let e of t)this.emitCellChange(e.rowIndex,e.columnName,e.value,e.row)}updateCell(e,t,n){let r=this.internalRows[e];if(!r)return;if(t.type===`radio`){let i=!!n,a=!!t.allowUnselect,o=this.internalRows.map(e=>({...e})),s=[];if(i)o.forEach((n,r)=>{let i=r===e;!!n[t.name]!==i&&(o[r]={...n,[t.name]:i},s.push({rowIndex:r,columnName:t.name,value:i,row:this.internalRows[r]}))});else if(a&&r[t.name])o[e]={...r,[t.name]:!1},s.push({rowIndex:e,columnName:t.name,value:!1,row:r});else return;if(s.length===0)return;this.commitRows(o,s);return}Ai(t)&&this.generatedCellModes.set(Ni(String(r._id),t.name),Mi(n)?Q.EMPTY:Q.MANUAL);let i={[t.name]:n},a={};for(let e of this.generatedColumns){if(e.source!==t.name)continue;let i=Ni(String(r._id),e.name),o=r[e.name],s=this.generatedCellModes.get(i)??(Mi(o)?Q.EMPTY:Q.SEEDED);s!==Q.MANUAL&&s!==Q.SEEDED&&(e.type===`handle`?(a[e.name]=Ii(String(n??``)),this.generatedCellModes.set(i,Q.AUTO)):e.type===`value`&&(a[e.name]=n,this.generatedCellModes.set(i,Q.AUTO)))}let o={...i,...a};if(!Object.entries(o).some(([e,t])=>r[e]!==t))return;let s=this.internalRows.slice();s[e]={...r,...o};let c=Object.entries(o).map(([t,n])=>({rowIndex:e,columnName:t,value:n,row:r}));this.commitRows(s,c)}canAddRow(e=this.internalRows.length){return!(this.disabled||!this.allowAdd||this.maxRows!=null&&Number.isFinite(this.maxRows)&&e>=this.maxRows)}createEmptyRow(){if(!this.canAddRow())return null;let e={_id:Ri(),...this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{}};for(let t of this.validColumns)t.name in e||(e[t.name]=Fi(t));return e}addRow(){let e=this.createEmptyRow();e&&(this.internalRows=[...this.internalRows,e],this.syncGeneratedModesFromRows(),this.emitChange())}insertRowAt(e){let t=this.createEmptyRow();if(!t)return;let n=Math.max(0,Math.min(e,this.internalRows.length)),r=this.internalRows.slice();r.splice(n,0,t),this.internalRows=r,this.syncGeneratedModesFromRows(),this.emitChange()}removeRow(e){!this.disabled&&this.allowDelete&&(this.internalRows=this.internalRows.filter((t,n)=>n!==e),this.syncGeneratedModesFromRows(),this.emitChange())}handleTablePaste(e){if(this.disabled||!e.clipboardData)return;let t=Ki(e.clipboardData.getData(`text/plain`)||e.clipboardData.getData(`Text`)||``);if(!qi(t))return;let n=e.composedPath(),r=null,i=null;for(let e of n)if(e instanceof HTMLTableCellElement&&e.tagName===`TD`&&!e.classList.contains(`actions`)&&(r=e),e instanceof HTMLTableRowElement&&e.dataset.rowId){i=e;break}if(!r||!i)return;let a=this.internalRows.findIndex(e=>String(e._id)===i.dataset.rowId),o=[...i.querySelectorAll(`:scope > td:not(.actions)`)].indexOf(r);if(a<0||o<0)return;let s=this.validColumns[o];s&&Wi(s)&&(e.preventDefault(),e.stopPropagation(),this.importTsvData(t,a,o))}importTsvData(e,t,n){let r=Ji(e);if(r.length===0)return;let i=this.validColumns;if(i.length===0||n>=i.length)return;let a=this.internalRows.map(e=>({...e})),o=t,s=!1;for(let e=0;e<r.length;e++){if(o>=a.length){if(!this.canAddRow(a.length))break;let e={_id:Ri(),...this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{}};for(let t of i)t.name in e||(e[t.name]=Fi(t));a.push(e),s=!0}let t=r[e]??[],c=a[o];if(!c)break;let l=null;for(let e=0;e<t.length;e++){let r=i[n+e];if(!r)break;if(!Gi(r))continue;let a=t[e]??``;c[r.name]!==a&&(l??={},l[r.name]=a)}l&&(a[o]={...c,...l},s=!0),o+=1}s&&(this.internalRows=a,this.syncGeneratedModesFromRows(),this.emitChange())}moveRow(e,t){let n=e+t;if(this.disabled||n<0||n>=this.internalRows.length)return;let r=String(this.internalRows[e]._id),i=this.renderRoot.querySelector(`tr[data-row-id="${CSS.escape(r)}"] pk-button[slot="trigger"]`);this.commitReorder(e,n),this.updateComplete.then(()=>{i?.isConnected&&i.focus({preventScroll:!0})})}commitReorder(e,t){if(this.disabled||e===t||e<0||t<0||e>=this.internalRows.length||t>=this.internalRows.length)return;let n=this.internalRows.slice(),[r]=n.splice(e,1);n.splice(t,0,r),this.internalRows=n,this.emitChange()}commitReorderByIds(e){if(this.disabled||e.length===0)return;let t=new Map(this.internalRows.map(e=>[String(e._id),e]));if(e.length!==t.size)return;let n=[];for(let r of e){let e=t.get(r);if(!e)return;n.push(e)}n.every((e,t)=>e===this.internalRows[t])||(this.internalRows=n,this.emitChange())}scheduleDndHydration(){if(this.cancelDndHydration(),!this.allowReorder||this.disabled){this.dndReady=!1,this.dndController.destroy();return}if(this.dndReady)return;let e=()=>{this.dndIdleId=null,this.dndTimeoutId=null,this.dndReady=!0};typeof window<`u`&&typeof window.requestIdleCallback==`function`?this.dndIdleId=window.requestIdleCallback(e,{timeout:1200}):this.dndTimeoutId=setTimeout(e,250)}cancelDndHydration(){this.dndIdleId!==null&&typeof window<`u`&&typeof window.cancelIdleCallback==`function`&&(window.cancelIdleCallback(this.dndIdleId),this.dndIdleId=null),this.dndTimeoutId!==null&&(clearTimeout(this.dndTimeoutId),this.dndTimeoutId=null)}syncDndSortables(){if(this.dndController.isSessionActive)return;let e=`${this.internalRows.map(e=>String(e._id)).join(`\0`)}|${this.disabled?`1`:`0`}`;if(e===this.dndRowSignature&&this.dndController.isActive)return;let t=[...this.renderRoot.querySelectorAll(`tr[data-row-id]:not([data-pk-dnd-placeholder])`)];this.dndController.sync(t.map(e=>({id:e.dataset.rowId??``,element:e,handle:e.querySelector(`.action-handle`)??void 0})).filter(e=>e.id!==``),this.disabled),this.dndRowSignature=e}getCellErrors(e,t){let n=(this.fieldName?this.cellErrors?.[`${this.fieldName}.${e}.${t}`]:void 0)??this.cellErrors?.[`${e}.${t}`];return n?Array.isArray(n)?n.map(String):[String(n)]:[]}readValueFromEvent(e){let t=e.detail;return t&&`value`in t?String(t.value??``):String(e.target.value??``)}readCheckedFromEvent(e){let t=e.detail;return t&&`checked`in t?!!t.checked:!!e.target.checked}renderOptionElements(e){return Pi(e.options).map(e=>T`<pk-option value=${e.value}>${e.label}</pk-option>`)}renderSelectLike(e,t,n,r,{combobox:i=!1}={}){let a=String(t??``);return i?T`<pk-combobox
                class="cell-pk-control"
                size="sm"
                width="full"
                allow-custom-value
                .value=${a}
                placeholder=${e.placeholder??``}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            >
                ${this.renderOptionElements(e)}
            </pk-combobox>`:T`<pk-select
            class="cell-pk-control"
            size="xs"
            width="full"
            .value=${a}
            placeholder=${e.placeholder??``}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${e.label??e.name}
            @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
        >
            ${this.renderOptionElements(e)}
        </pk-select>`}renderCell(e,t,n,r){let i=t[e.name],a=e.type??`text`,o=t=>{this.updateCell(n,e,this.readValueFromEvent(t))};return Vi(e)?T`<div class="cell-slot">
                <slot name=${zi(String(t._id),e.name)}></slot>
            </div>`:a===`heading`?T`<div class="cell-static cell-heading">${String(i??``)}</div>`:a===`label`?T`<div class="cell-static">${String(i??``)}</div>`:a===`textarea`?T`<pk-textarea
                class="cell-pk-control"
                fit-cell
                size="sm"
                rows="1"
                .value=${String(i??``)}
                placeholder=${e.placeholder??y}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @input=${o}
            ></pk-textarea>`:a===`date`?T`<pk-date-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(i??``)}
                placeholder=${e.placeholder??``}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-date-picker>`:a===`time`?T`<pk-time-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(i??``)}
                placeholder=${e.placeholder??``}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-time-picker>`:a===`number`||a===`email`||a===`url`?T`<pk-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                type=${a}
                .value=${String(i??``)}
                placeholder=${e.placeholder??y}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @input=${o}
            ></pk-input>`:a===`select`?this.renderSelectLike(e,i,n,r):a===`combobox`?this.renderSelectLike(e,i,n,r,{combobox:!0}):a===`checkbox`||a===`radio`?T`<div class="cell-check">
                <pk-checkbox
                    aria-label=${e.label??e.name}
                    .checked=${!!i}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-checkbox>
            </div>`:a===`lightswitch`?T`<div class="cell-check cell-check--switch">
                <pk-lightswitch
                    size="sm"
                    aria-label=${e.label??e.name}
                    .checked=${!!i}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-lightswitch>
            </div>`:a===`color`?T`<pk-color-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                .value=${String(i??``)}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-color-input>`:T`<pk-input
            class="cell-pk-control"
            fit-cell
            size="xs"
            type="text"
            ?mono=${a===`handle`||a===`value`}
            .value=${String(i??``)}
            placeholder=${e.placeholder??y}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${e.label??e.name}
            @input=${o}
        ></pk-input>`}renderExtraMenuItems(e,t){let n=this.resolveRowMenuItems(e,t);return n.length===0?y:T`${n.map(n=>{let r=na(n.icon);return T`<pk-dropdown-item
                type=${n.type??`normal`}
                value=${n.value??n.action??``}
                radio-group=${n.radioGroup??y}
                ?checked=${!!n.checked}
                ?disabled=${this.disabled||!!n.disabled}
                @pk-select=${()=>{this.disabled||n.disabled||this.dispatchEvent(new CustomEvent(`pk-row-menu-select`,{detail:{rowIndex:t,row:e,item:n,action:String(n.action??n.value??``),value:String(n.value??``)},bubbles:!0,composed:!0}))}}
            >
                ${r?h(r):y}
                ${n.label}
            </pk-dropdown-item>`})}`}renderRow(t,n){let r=this.validColumns,i=this.internalRows.length,a=String(t._id),o=this.resolveRowModifier(t,n),s=this.resolveRowMenuItems(t,n),c=this.allowReorder||this.allowInsert||s.length>0,l=this.disabled||!this.canAddRow();return T`<tr
            data-row-id=${a}
            data-tone=${o.tone||y}
            class=${o.class?e(Object.fromEntries(o.class.split(/\s+/).filter(Boolean).map(e=>[e,!0]))):y}
            aria-label=${o.title||y}
        >
            ${r.map(r=>{let i=this.resolveColumn(t,r,n),a=this.getCellErrors(n,r.name),o=i.class||r.class||``;return T`<td
                    class=${e({thin:ji(i),"has-error":a.length>0,...o?Object.fromEntries(o.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}})}
                    style=${i.width||r.width?`width: ${i.width||r.width}`:y}
                >
                    ${this.renderCell(i,t,n,a.length>0)}
                </td>`})}
            ${this.showActionsColumn?T`<td class="actions">
                    <div class="row-actions">
                        ${this.allowReorder?T`
                                <span
                                    class=${e({"action-handle":!0,"is-pending":!this.dndReady})}
                                >
                                    <pk-button
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label=${!this.dndReady&&!this.disabled?`Preparing drag…`:`Reorder row`}
                                        ?disabled=${this.disabled||!this.dndReady}
                                    >${h(Yi)}</pk-button>
                                </span>`:y}
                        ${c?T`<pk-dropdown-menu size="sm" placement="bottom-end" side-offset="2">
                                    <pk-button
                                        slot="trigger"
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label="Row actions"
                                        ?disabled=${this.disabled}
                                    >${h(Xi)}</pk-button>
                                    ${this.renderExtraMenuItems(t,n)}
                                    ${this.allowInsert?T`
                                            <pk-dropdown-item
                                                ?disabled=${l}
                                                @pk-select=${()=>{this.insertRowAt(n)}}
                                            >
                                                ${h(ea)}
                                                Insert above
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${l}
                                                @pk-select=${()=>{this.insertRowAt(n+1)}}
                                            >
                                                ${h(ea)}
                                                Insert below
                                            </pk-dropdown-item>`:y}
                                    ${this.allowReorder?T`
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||n===0}
                                                @pk-select=${()=>{this.moveRow(n,-1)}}
                                            >
                                                ${h(Zi)}
                                                Move up
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||n===i-1}
                                                @pk-select=${()=>{this.moveRow(n,1)}}
                                            >
                                                ${h(Qi)}
                                                Move down
                                            </pk-dropdown-item>`:y}
                                </pk-dropdown-menu>`:y}
                        ${this.allowDelete?T`<pk-button
                                type="button"
                                class="action-btn action-delete"
                                variant="none"
                                size="xs"
                                aria-label="Delete row"
                                ?disabled=${this.disabled}
                                @click=${()=>{this.removeRow(n)}}
                            >${h($i)}</pk-button>`:y}
                    </div>
                </td>`:y}
        </tr>`}render(){let t=this.validColumns;return T`
            <div
                class="et-scroll"
                @pk-change=${this.stopInnerControlEvent}
                @input=${this.stopInnerControlEvent}
                @change=${this.stopInnerControlEvent}
                @paste=${this.handleTablePaste}
            >
                <table class="et">
                    <thead>
                        <tr>
                            ${t.map(t=>{let n=t.class||``;return T`<th
                                    class=${e({thin:ji(t),...n?Object.fromEntries(n.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}})}
                                    style=${t.width?`width: ${t.width}`:y}
                                >
                                    ${t.label??t.name}
                                    ${t.required?T`<span class="required">*</span>`:y}
                                </th>`})}
                            ${this.showActionsColumn?T`<th class="actions"></th>`:y}
                        </tr>
                    </thead>
                    <tbody>
                        ${Di(this.internalRows,e=>String(e._id),(e,t)=>this.renderRow(e,t))}
                    </tbody>
                </table>
            </div>
            ${this.allowAdd?T`<pk-button
                    type="button"
                    class="add-row"
                    variant="dashed"
                    ?disabled=${this.disabled}
                    @click=${()=>{this.addRow()}}
                >
                    ${h(ea)}
                    ${this.addRowLabel||`Add row`}
                </pk-button>`:y}
        `}};_([E({attribute:!1})],$.prototype,`columns`,void 0),_([E({attribute:!1})],$.prototype,`rows`,void 0),_([E({type:Boolean,reflect:!0,attribute:`allow-add`})],$.prototype,`allowAdd`,void 0),_([E({type:Boolean,reflect:!0,attribute:`allow-delete`})],$.prototype,`allowDelete`,void 0),_([E({type:Boolean,reflect:!0,attribute:`allow-reorder`})],$.prototype,`allowReorder`,void 0),_([E({type:Boolean,reflect:!0,attribute:`allow-insert`})],$.prototype,`allowInsert`,void 0),_([E({type:Number,attribute:`max-rows`})],$.prototype,`maxRows`,void 0),_([E({attribute:`add-row-label`})],$.prototype,`addRowLabel`,void 0),_([E({attribute:`field-name`})],$.prototype,`fieldName`,void 0),_([E({attribute:!1})],$.prototype,`cellErrors`,void 0),_([E({attribute:!1})],$.prototype,`newRowDefaults`,void 0),_([E({attribute:!1})],$.prototype,`modifyColumn`,void 0),_([E({attribute:!1})],$.prototype,`modifyRow`,void 0),_([E({attribute:!1})],$.prototype,`getRowMenuItems`,void 0),_([C()],$.prototype,`internalRows`,void 0),_([C()],$.prototype,`dndReady`,void 0),$=_([w(`pk-editable-table`)],$);var ra=[`pk-icon`,`pk-button`,`pk-editable-table`];export{O as i,$ as n,zi as r,ra as t};
//# sourceMappingURL=tablemakerPkComponents-vB3uxhMO.js.map