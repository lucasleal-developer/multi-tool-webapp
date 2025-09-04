import Head from 'next/head';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <>
      <Head>
        <title>App Next.js Simples</title>
        <meta name="description" content="Uma aplicação simples em Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <h1 className="title">
            Bem-vindo ao <span className="highlight">Next.js!</span>
          </h1>

          <p className="description">
            Esta é uma aplicação web simples criada com Next.js
          </p>

          <Counter />

          <div className="features">
            <div className="feature-card">
              <h3>⚡ Rápido</h3>
              <p>Next.js oferece performance otimizada por padrão</p>
            </div>

            <div className="feature-card">
              <h3>🚀 Moderno</h3>
              <p>Construído com React e TypeScript</p>
            </div>

            <div className="feature-card">
              <h3>📱 Responsivo</h3>
              <p>Funciona perfeitamente em qualquer dispositivo</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}