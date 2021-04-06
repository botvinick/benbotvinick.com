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
          <span className="break-all bg-clip-text text-transparent font-black bg-gradient-to-r from-pink-500 to-pink-400">Botv</span>
          inick
        </h1>

        <div className="mt-12 space-y-6 text-white text-md max-w-prose">
          <div>
            When I was fourteen I started writing code to pull pranks on my buddies. Two years later I moved to Boston
            and started consulting for startups.
          </div>

          <div>
            When I was seventeen I founded a company called{' '}
            <a href="https://metalabs.io" target="_blank" rel="noreferrer" className="transition bg-clip-text text-transparent font-black bg-gradient-to-r from-blue-300 to-blue-400 hover:text-white">Meta Labs</a>.
            Six months later I gave up on school. I'm eighteen now so I don't really know what's next.
          </div>

          <div>
            If you want to get in touch with me, my email is ben [at] metalabs.io. I answer <i>almost</i> everything.
          </div>
        </div>

        <div className="mt-12 text-white text-xl max-w-prose space-x-4">
          <a href="https://twitter.com/benbotvinick" className="transition hover:text-gray-800">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://github.com/botv" className="transition hover:text-gray-800">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://linkedin.com/in/botv" className="transition hover:text-gray-800">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a href="https://instagram.com/benbotvinick" className="transition hover:text-gray-800">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </main>
    </div>
  );
}
