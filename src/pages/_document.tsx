import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,height=device-height"
            key="viewport"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <meta name="theme-color" content="#087da1" key="themeColor" />
        </Head>

        <body>
          <style jsx>{`
            /* A Modern CSS Reset */
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
            ul[class],
            ol[class] {
              padding: 0;
            }
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            ul[class],
            ol[class],
            figure,
            blockquote,
            dl,
            dd {
              margin: 0;
            }
            body {
              min-height: 100vh;
              scroll-behavior: smooth;
              text-rendering: optimizeSpeed;
              line-height: 1.5;
            }
            ul[class],
            ol[class] {
              list-style: none;
            }
            a:not([class]) {
              text-decoration-skip-ink: auto;
            }
            img {
              max-width: 100%;
              display: block;
            }
            article > * + * {
              margin-top: 1em;
            }
            input,
            button,
            textarea,
            select {
              font: inherit;
            }
            img:not([alt]) {
              filter: blur(10px);
            }
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
          `}</style>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
