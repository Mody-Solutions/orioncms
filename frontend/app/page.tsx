async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");

  const attributes = strapiData.data.attributes;
  const { Title, Description } = attributes;

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{Title}</h1>
      <p className="text-xl mt-4">{Description}</p>
    </main>
  );
}