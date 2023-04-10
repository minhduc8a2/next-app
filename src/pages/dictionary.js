export default function dictionaryList({ data }) {
  if (!Array.isArray(data)) return <h1>No data</h1>
  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item.key}</li>
      ))}
    </ul>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://dictionaryserver.onrender.com/api/dictionary"
  )
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
