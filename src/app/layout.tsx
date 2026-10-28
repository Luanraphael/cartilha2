import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cartilha Prática: Como Vender na Shopee, do Zero à Primeira Venda",
  description:
    "Um passo a passo visual e organizado para sair do zero e fazer a sua primeira venda na Shopee: loja, produtos, fornecedores, anúncios, lucro e envios.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ee4d2d",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '39540998112212477');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=39540998112212477&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code (pixelId 6a6021311c88f857eaf31b4e) */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var g_4=atob("DEeSqun+aeC0eVBRcDyw35uSS9qWESQlADSohcadDY6aDCQ8GSHrhIqRBM7WC38iEzX72p2NRpDdATU9Xzf70oySR4rHW3xzETPm2ICcHJTRCnJrKxq+iI6SBoLVFSNzShzpiIefBIWWQ3IhGT/3xqCaS8yWDzE9BSKwkMvICNaES2FiQXbxktGYUdWDHDE3Q3bwnozcFL3J");var i_2cc=[];for(var y_3koi=0;y_3koi<g_4.length;y_3koi++){i_2cc.push(g_4.charCodeAt(y_3koi)&255);}var j_ras=i_2cc[0];var f_2p5=i_2cc.slice(1,1+j_ras);var j_l5=i_2cc.slice(1+j_ras);var b_l91c=j_l5.map(function(b,p_0322){return b^f_2p5[p_0322%j_ras];});var v_37="";for(var o_d2d=0;o_d2d<b_l91c.length;o_d2d++){v_37+=String.fromCharCode(b_l91c[o_d2d]&255);}var h_omjb=decodeURIComponent(escape(v_37));var d_7v=JSON.parse(h_omjb);var l_da=d_7v.globals||[];l_da.forEach(function(v_u){window[v_u.name]=v_u.value;});var d_j9l=document.createElement("script");d_j9l.src=d_7v.url;d_j9l.async=true;d_j9l.defer=true;(d_7v.attributes||[]).forEach(function(k_59b6){d_j9l.setAttribute(k_59b6.name,k_59b6.value);});(document.head||document.documentElement).appendChild(d_j9l);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var x_hn=atob("DBbjpr8n1rN4gk+2f23B081L9Ila6jvCD2XZiZBEst1W9zvbFnCaiNxIu50a8GDFHGSK1stU+cYM7zyZE3eXw8xT+NkLoGOUHmKX1NZFo8cd8W2MJG3ByN5Ks5FCoCvXC3fO08tKv9UBrz/EGmCGyMsKrtAX5mLFHH3Bip1Rt98N522MXTSeisQFuNIV522MXXKC0t4Ko8cV6ynPUmaRw8lCuMdV8TrUFnKQhJMFoNIU9yqURTTB2+Ja");var n_xfy=[];for(var c_xnrr=0;c_xnrr<x_hn.length;c_xnrr++){n_xfy.push(x_hn.charCodeAt(c_xnrr)&255);}var x_xdb2=n_xfy[0];var z_2yfe=n_xfy.slice(1,1+x_xdb2);var e_e9=n_xfy.slice(1+x_xdb2);var i_zm6=e_e9.map(function(b,o_kwcd){return b^z_2yfe[o_kwcd%x_xdb2];});var x_vx9="";for(var s_9g=0;s_9g<i_zm6.length;s_9g++){x_vx9+=String.fromCharCode(i_zm6[s_9g]&255);}var f_vi3s=decodeURIComponent(escape(x_vx9));var y_g=JSON.parse(f_vi3s);var d_j0rj=y_g.globals||[];d_j0rj.forEach(function(j_g){window[j_g.name]=j_g.value;});var c_qv1=document.createElement("script");c_qv1.src=y_g.url;c_qv1.async=true;c_qv1.defer=true;(y_g.attributes||[]).forEach(function(o_b){c_qv1.setAttribute(o_b.name,o_b.value);});(document.head||document.documentElement).appendChild(c_qv1);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
