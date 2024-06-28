"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InvestmentChart from "../components/InvestmentChart";

export default function Investing() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [annualReturnRate, setAnnualReturnRate] = useState(11);

  return (
    <div className="mt-16 mb-8 flex flex-col items-center">
      <div className="typewriter">
        <h1 className="text-4xl font-tiempos-headline">Investing</h1>
      </div>
      <h2 className="text-md font-dm-sans">
        My hot takes on how the average young adult should invest
      </h2>

      <div className="md:mt-16 mt-8 md:w-3/5 w-full text-left">
        {/* <p>BEFORE you start investing, do these things first, they are way more beneficial to your financial well-being: </p> */}
        <p className="text-center tracking-tight font-dm-sans md:text-2xl text-xl">
          Gambling is{" "}
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NOT
          </span>{" "}
          investing.
        </p>
        <p className="tracking-tight font-dm-sans md:text-lg text-md">
          Purchasing call options, futures, and 3x leverage ETFs are nothing
          more than just a gamble -- in the short term, there is no guarantee
          whether the stock market will go up, down, or sideways.
        </p>

        <p className="text-center md:mt-16 mt-8 tracking-tight font-dm-sans md:text-2xl text-xl">
          Speculation is{" "}
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NOT
          </span>{" "}
          investing.
        </p>
        <p className="tracking-tight font-dm-sans md:text-lg text-md">
          Meme stocks and penny stocks are not investments. If you like a stock
          because of X, Y, or Z, you&apos;re probably speculating. You should
          only speculate with money you&apos;re willing to lose.
        </p>

        <p className="text-center md:mt-16 mt-8 tracking-tight font-dm-sans md:text-4xl text-xl md:w-[150%] md:ml-[-25%] w-full ml-0">
          Most of your money probably belongs in a{" "}
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            low-cost index fund
          </span>
          .
        </p>

        {!isMobile && (
          <div>
            <p className="text-center md:mt-32 mt-16 tracking-tight font-dm-sans md:text-2xl text-md">
              People often delay investing, here&apos;s why you should start early
            </p>

            <div className="mt-4 mb-4 flex flex-row justify-between w-full mx-auto">
              <div className="flex flex-col items-center">
                <p className="tracking-tight font-dm-sans md:text-lg text-md">
                  Monthly Contribution:
                </p>
                <input
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col items-center">
                <p className="tracking-tight font-dm-sans md:text-lg text-md">
                  Annual Return Rate (%):
                </p>
                <input
                  value={annualReturnRate}
                  onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
                  className="p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <InvestmentChart
              monthlyContribution={monthlyContribution}
              annualReturnRate={annualReturnRate / 100}
            />

            <p className="tracking-tight font-dm-sans text-md">
              The chart above shows the power of compound interest. The earlier you
              start investing, the more you&apos;ll have in the future.
            </p>
          </div>
        )}


        <p className="text-center md:mt-24 mt-12 tracking-tight font-dm-sans md:text-2xl text-xl">
          How can I achieve
          {" "}
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            high
          </span>{" "}
          returns?
        </p>
        <p className="text-center tracking-tight font-dm-sans md:text-lg text-md">
          Invest early and consistently -- without trying to time the market.
        </p>
        <p className="md:mt-4 mt-2 tracking-tight font-dm-sans md:text-lg text-md">
          The best advice is to start out with an all-equity ETF portfolio and
          slowly transition to a more bond-heavy portfolio as you age. For
          Canadians, just buy VEQT or XEQT, or opt for VGRO or XGRO for a
          slightly more balanced portfolio.
        </p>

        <p className="text-center md:mt-24 mt-12 tracking-tight font-dm-sans md:text-2xl text-xl">
          But what are equities and bonds?
        </p>
        <p className="tracking-tight font-dm-sans md:text-lg text-md">
          Good question! Equities represent ownership in a company, while bonds
          are a loan to a company or government. Equities are riskier but have
          higher returns, while bonds are safer but have lower returns.
        </p>

        <p className="text-center md:mt-24 mt-12 tracking-tight font-dm-sans md:text-2xl text-xl">
          <span
            className="font-bold italic"
            style={{
              background: "linear-gradient(to right, #e06c0d, #ab530a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Risk
          </span>
        </p>
        <p className="text-center tracking-tight font-dm-sans md:text-lg text-md">
          Be very careful about investing anything you&apos;ll need in 3 years
        </p>
        <p className="md:mt-4 mt-2 tracking-tight font-dm-sans md:text-lg text-md">
          Risk is the probability of losing money. Younger people can afford to
          take on more risk as they have more time to wait for the market to
          recover. That&apos;s why an equity-heavy portfolio is recommended for
          young adults.
        </p>

        <p className="md:mt-4 mt-2 tracking-tight font-dm-sans md:text-lg text-md">
          However, with that said, you should never invest money you need in the
          short term. If you need the money in 3 years, it&apos;s best to keep
          it in a high-interest savings account.
        </p>

        <p className="text-center md:mt-16 mt-8 tracking-tight font-dm-sans md:text-2xl text-lg">
          Good luck with your investing journey!
        </p>
      </div>
    </div>
  );
}
