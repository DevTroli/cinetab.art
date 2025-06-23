import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      'mono': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
                    }
                  }
                }
              }
            `,
          }}
        />

        {/* Meta tags básicas para seu projeto */}
        <meta name="description" content="CineTab - Discussões autênticas sobre cinema" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-zinc-950 text-zinc-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
