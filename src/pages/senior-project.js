import React from 'react';
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <NextSeo title="Senior Project — Ben Botvinick" />

      <main className="h-screen bg-tan-50 py-8 px-6 sm:px-12">
        <img src="/img/hyper.svg" alt="Hyper logo" className="w-48" />

        <div className="mt-8 space-y-6 text-black text-sm max-w-prose">
          <div>
            Dear Milton,
          </div>

          <div>
            I've spent the past year and a half building a company called <a href="https://hyper.co" target="_blank" rel="noreferrer" className="transition underline hover:text-pink-300">Hyper</a>.
          </div>

          <div>
            Hyper allows anyone to turn their online community into a business. I know that sounds complex, but it's
            actually quite simple. Let me break it down.
          </div>

          <div>
            Across the internet, there are hundreds of millions of "group chats" — communities of people coming together
            to talk about anything. These communities exist on hundreds of platforms: iMessage, WhatsApp, Telegram,
            Slack, Discord...you name it.
          </div>

          <div>
            In some cases, these communities are exclusive: you need to pay a monthly subscription in order to
            participate. The real-world analogy is a country club, where you pay an annual membership for access to
            shared facilities.
          </div>

          <div>
            So how do these communities convince people to pay to be in a group chat?! Many people start with a social
            media account, and convince their followers that they can gain access to exclusive content by paying to be
            in the community. Others advertize that if you pay to join their group, they'll teach you something, like
            how to take your photography skills to the next level.
          </div>

          <div>
            The issue is, <i>payments are hard</i>. Even if you can convince someone to join your group, collecting
            their credit card info and billing them on a monthly basis is not easy.
          </div>

          <div>
            Which is why we built Hyper. We provide all the software that an online community needs to collect payments
            from its members without cobbling together tools like PayPal, Venmo, and then keeping track of everything in
            a massive spreadsheet.
          </div>

          <div>
            To give you an idea of where we are today:
          </div>

          <ul className="list-disc ml-8">
            <li>We have helped thousands of communities make nearly $10M in revenue.</li>
            <li>We have served over 250,000 individual users across 6 continents.</li>
            <li>We have dozens of customers who have quit their jobs and use Hyper to put food on the table, some making more than $1M a year.</li>
            <li>There are eight people who work at Hyper.</li>
            <li>We have raised hundreds of thousands of dollars from top venture capitalists, and the company is valued in the tens of millions.</li>
            <li>In two weeks, we're moving the entire company out to Silicon Valley into what we're calling the "Hyper House" (a beautiful condo in Mountain View, California).</li>
          </ul>

          <div>
            This isn't just my senior project; it's my life's work. It'd be impossible to wrap everything we do at Hyper
            into a neat presentation. So if you're curious to learn more about the company, the team, the mission, or
            our plans for the future, feel free to shoot me an email at ben [at] hyper [dot] co. I look forward to hearing from you.
          </div>

          <div>
            Cheers,<br />
            Ben
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
