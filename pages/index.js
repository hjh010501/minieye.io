import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('https://www.behance.net/gallery/108156647/Minieye-Mobile-Eyetracking-Usability-Test')
  })
  return (
    <Head>
      <script src="/pace/pace.min.js"></script>
	    <link href="/pace/pace-theme-default.min.css" rel="stylesheet" />
    </Head>
  )
}
