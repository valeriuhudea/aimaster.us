import type { NextApiRequest, NextApiResponse } from "next";

interface filterRequest extends NextApiRequest {
    body: any
}

export default async function handler(req: filterRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed")
      return
    }
    const reqData = req.body
  
    if(reqData) {
        try {
            var urls = []
            var urlsData = []
            Object.keys(reqData).forEach(async function(key, index) {
                console.log(reqData[key][0])
                reqData[key][0].forEach(rslt => urls.push(rslt.link))
            })
            return res.status(200).json({ ai: urls });
        } catch(e){
            console.log(e)
        }
        return res.status(200).json({ ai: "test" });
    } else {
        return res.status(200).json({ ai: "failed" });
    }
}