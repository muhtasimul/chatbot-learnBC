import Chatbot from "../components/mainComponent/Chatbot"
import Head from "next/head"

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Learn BC Chatbot</title>
        <meta name="description" content="A chatbot to learn about British Columbia" />
      </Head>
      <Chatbot />
    </>
  )
}

