import{_ as e,a as t,c as n,d as r,h as i,m as a,o,s,v as c,y as l}from"./icons-BR8JcQj2-CqR11aHb.js";import{a as u,d,h as f,i as p,o as m,p as h,u as g}from"./directive-Dt008SrX.js";import{i as _,n as v,t as y}from"./tablemakerPkComponents-vB3uxhMO.js";import{f as b}from"./animate-with-class-CsDwYnXL-DpFfZCiB.js";var x=customElements;if(!x.__pkSafeDefine){let e=x.define.bind(x);x.define=((t,n,r)=>{x.get(t)||e(t,n,r)}),x.__pkSafeDefine=!0}var S=class extends p{constructor(...e){super(...e),this.icon=``,this.name=``,this.unsubscribeRegistry=null}static{this.styles=f`
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
    `}connectedCallback(){super.connectedCallback(),this.unsubscribeRegistry=n(()=>{this.requestUpdate()})}disconnectedCallback(){this.unsubscribeRegistry?.(),this.unsubscribeRegistry=null,super.disconnectedCallback()}render(){let e=o(this.icon||this.name);return e?h`${b(t(e,{title:this.label}))}`:d}};u([g()],S.prototype,`icon`,void 0),u([g()],S.prototype,`name`,void 0),u([g()],S.prototype,`label`,void 0),S=u([m(`pk-icon`)],S),s({check:r,ellipsis:a,gear:i,plus:e,trash:c,xmark:l});var C=[_,v,S],w=!1;async function T(){if(!w){for(let e of C)if(typeof e!=`function`)throw Error(`Table Maker Plugin Kit constructor missing from bundle`);await Promise.all(y.map(e=>customElements.whenDefined(e))),w=!0}}await T();
//# sourceMappingURL=pluginKit-BTicQ835.js.map