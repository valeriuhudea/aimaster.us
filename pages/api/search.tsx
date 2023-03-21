import type { NextApiRequest, NextApiResponse } from "next";
import data from '../../data/results.json';

const searchGoogleUrl = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_CX}&q=`
const results = []

interface GoogleSearchRequest extends NextApiRequest {
  body: {
    query: string;
    resCount: number;
  };
}

async function paginatedFetch(url, count) {
  let startIndex = 1
  const response = await fetch(`${url}&start=${startIndex}`)
  if (response.status == 200) {
    let res = await response.json()
    results.push(res.items)
    let nextPage = res.queries.nextPage[0].startIndex
    while (nextPage < count) {
      let newUrl = `${url}&start=${nextPage}`
      const newReq = await fetch(newUrl)
      let newRes = await newReq.json()
      results.push(newRes.items)
      nextPage +10
    }
    return results
  } else {
    return data
  }
}

export default async function handler(req: GoogleSearchRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }
  const query = req.body.query;
  const resCount = req.body.resCount

  if(query) {  
    var searchUrl = searchGoogleUrl+query
    if(resCount > 10) {
      const nrOfSearches = Math.ceil(resCount / 10)
      const allRes = await paginatedFetch(searchUrl, resCount)
      return res.status(200).json({ results: allRes });
    } else {
      const allRes = await paginatedFetch(searchUrl, resCount)
      return res.status(200).json({results: allRes})
    }
  }
}