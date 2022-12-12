
import { useRouter } from "next/router";

export default function Setting({ query }) {
  const router = useRouter();
  return (
    <>
        <h1>routerから取得: {router.query.name}</h1>
        <h1>getServerSidePropsから取得: {query.name}</h1>
    </>
  )
}

export async function getServerSideProps({ query }) {
    return {
        props: { query }
    }
}