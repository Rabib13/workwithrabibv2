export type Tweet = {
  text: string;
  url: string;
  date: string;
  topic: string;
};

export const tweets: Tweet[] = [
  {
    text: "Been chewing on this for a while. In AI infra, what we call \"the unit of compute\" keeps getting bigger. A year and a half ago, the unit was the chip. Then models outgrew the chip...",
    url: "https://x.com/rabib_ai/status/2058331123487551944",
    date: "May 23, 2026",
    topic: "AI infra",
  },
  {
    text: "The network layer matters more than people think for inference. Today's inference models can largely be serviced within one rack using the scale-up fabric, but larger models and longer context windows change the shape of the problem...",
    url: "https://x.com/rabib_ai/status/2053557780506972590",
    date: "May 10, 2026",
    topic: "Inference",
  },
  {
    text: "SF tech bubble so strong that people do not understand the power of distribution and overestimate the demand for the best and greatest of models...",
    url: "https://x.com/rabib_ai/status/2051104602184151157",
    date: "May 4, 2026",
    topic: "Distribution",
  },
  {
    text: "The model layer is getting commoditized, and I think the big players already realize this. There's been a 1,500x price drop in inference costs in 6 years...",
    url: "https://x.com/rabib_ai/status/2050980369663750188",
    date: "May 3, 2026",
    topic: "AI economics",
  },
];
