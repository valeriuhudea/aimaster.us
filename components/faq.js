import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What can the AI do for me? ",
    answer: "Da. Un tur virtual 360 aduce beneficii si expunere potentialilor clienti. Cu Google Street View si Profilele Google Business cu tur virtual se atrage mult mai multa atentie.",
  },
  {
    question: "Can we interface with any AI? ",
    answer: "Majoritatea domeniilor de activitate ar putea beneficia in urma unui tur virtual si expunere pe Google Street View. Business: Piata Imobiliara, Restaurante, Sali de fitness, Insitutii Medicale, Hoteluri si Pensiuni, Locatii de evenimente si nunti, Teatru sau Cinema.",
  },
  {
    question: "What AI's are currently running? ",
    answer:
      "OpenAI, Microsoft, Google"
  },
  {
    question: "How does and AI work? ",
    answer:
      "AI start with symbolic neural networks tha perform logical operations and interface with Machine Learning Models for accurate insights.",
  },
];
