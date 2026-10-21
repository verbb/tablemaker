import{b as e,c as t,f as n,g as r,h as i,l as a,o,s,v as c,y as l}from"./icons-k1pvx6yX-CkUe4Wxw.js";import{c as u,d,h as f,l as p,o as m,p as h,s as g}from"./directive-C0vuPHAp.js";import{i as _,n as v,t as y}from"./tablemakerPkComponents-CVYBuW8h.js";import{f as b}from"./animate-with-class-CjTZI0NU-CR-bBYI-.js";var x=customElements;if(!x.__pkSafeDefine){let e=x.define.bind(x);x.define=((t,n,r)=>{x.get(t)||e(t,n,r)}),x.__pkSafeDefine=!0}var S=class extends g{constructor(...e){super(...e),this.icon=``,this.name=``,this.unsubscribeRegistry=null}static{this.styles=f`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: none;
            /* Square em box + slight baseline nudge for inline text. Flex
             * parents (e.g. button slots) should zero vertical-align. */
            width: 1em;
            height: 1em;
            line-height: 1;
            vertical-align: -0.125em;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
            /* Allow intentional path overhang past the icon canvas. */
            overflow: visible;
        }
    `}connectedCallback(){super.connectedCallback(),this.unsubscribeRegistry=a(()=>{this.requestUpdate()})}disconnectedCallback(){this.unsubscribeRegistry?.(),this.unsubscribeRegistry=null,super.disconnectedCallback()}render(){let e=s(this.icon||this.name);return e?h`${b(o(e,{title:this.label}))}`:d}};u([m()],S.prototype,`icon`,void 0),u([m()],S.prototype,`name`,void 0),u([m()],S.prototype,`label`,void 0),S=u([p(`pk-icon`)],S),t({check:n,ellipsis:i,gear:r,plus:c,trash:l,xmark:e});var C=[_,v,S],w=!1;async function T(){if(!w){for(let e of C)if(typeof e!=`function`)throw Error(`Table Maker Plugin Kit constructor missing from bundle`);await Promise.all(y.map(e=>customElements.whenDefined(e))),w=!0}}await T();
//# sourceMappingURL=pluginKit-Dus7RO1b.js.map