import { assert } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

interface aiRequest extends NextApiRequest {
    body: object
}

export default async function handler(req: aiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed")
      return
    }
    const reqData = req.body
  
    if(reqData) {
        try {
            const masterData = reqData
            console.log(masterData)
            return res.status(200).json({ ai: "urls" });
        } catch(e){
            console.log(e)
        }
        return res.status(200).json({ ai: "test" });
    } else {
        return res.status(200).json({ ai: "failed" });
    }
}