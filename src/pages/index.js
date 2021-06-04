import React from 'react';
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <NextSeo title="Ben Botvinick" />

      <main className="h-screen bg-black py-8 px-12 overflow-hidden">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white -ml-2 md:-ml-3">
          <div>Ben</div>
          <span
            className="text-transparent bg-clip-text bg-cover bg-center bg-pink-300"
            style={{ backgroundImage: 'url(/img/sky.jpeg)' }}
          >
          Botv</span>
          inick
        </h1>

        <div className="mt-12 space-y-6 text-white text-md max-w-prose">
          <div>
            When I was fourteen I started writing code to pull pranks on my buddies. Two years later I moved to Boston
            and took a job at a startup.
          </div>

          <div>
            When I was seventeen I started a company called{' '}
            <a href="https://hyper.co" target="_blank" rel="noreferrer" className="transition bg-clip-text text-transparent font-black text-pink-200 hover:text-white">Hyper</a>.
            Six months later I gave up on school. Now we're doing pretty well.
          </div>

          <div>
            If you want to get in touch with me, my email is ben [at] hyper.co. I answer <i>almost</i> everything.
          </div>
        </div>

        <div className="mt-12 text-white text-xl max-w-prose space-x-4">
          <a href="https://twitter.com/benbotvinick" className="transition hover:text-pink-200">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://github.com/botv" className="transition hover:text-pink-200">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://linkedin.com/in/botv" className="transition hover:text-pink-200">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a href="https://instagram.com/benbotvinick" className="transition hover:text-pink-200">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </main>
    </div>
  );
}
