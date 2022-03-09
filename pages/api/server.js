import { bcAnswers } from "../../helper/app-util"


export default async function handler(req, res) {

    if (req.method === "POST") {

        let pattern = /(population?|(premier?|governor?)|(largest|capital) city|capital|(visit?|holiday?|vacation?|travel?)|(travel|go|going).*?(Vancouver Island).*?)|(national|provincial) park?|park?|(summa?(ry|rize|rise)|learn)|(first nation?|indigenous)|(climate|weather)|\bH(ello|i)\b|history/gi

        let text = req.body.string
        let test_pattern = pattern.test(text)


        if (test_pattern) {
            let result = text.match(pattern)

            const testHello = (/\bH(ello|i)\b/gi).test(result)

            if (result.length === 1 && testHello) {
                res.json({
                    type: "greeting",
                    answer: `Hello friends, please type a question to learn more about our beautiful province. E.g. Where can I visit in British Columbia?`
                })
            } else if (result.length === 2 && testHello) {

                const completeResult = await bcAnswers(result[1], collection)
                res.json(completeResult)



            } else if (result.length === 2) {
                res.json({
                    type: "Specify",
                    answer: `Multiple matches please type one of the words to get a specific result: ${result[0]}, ${result[1]}`
                })
            } else if (result.length === 1) {
                const completeResult = await bcAnswers(result[0])
                res.json(completeResult)


            } else {
                res.json({
                    type: "Specify",
                    answer: `Multiple matches, please be more specific`
                })
            }

        } else {
            res.json({
                type: "Error",
                answer: "Sorry, Could not find please search something else"
            })
        }

    }
}

