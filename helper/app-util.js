import { connectToDatabase, findSingleDocument } from "./db-util";
import answerArray from "./answerArray";

export async function bcAnswers(result) {
    let client;
    let solution;
    const findSolution = answerArray.find(x => result.match(x.ans))

    try {
        client = await connectToDatabase()
    } catch (e) {
        console.log('Connection Error')
        return
    }

    try {
        solution = await findSingleDocument(client, findSolution.type)
        client.close()
    } catch (e) {
        console.log("Solution Error")
        return
    }

    return solution

}