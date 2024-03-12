import qs from 'qs';
export async function getPageData(path: string, params : object = {}) {
  const baseUrl = process.env.ORION_BACKEND_URL;
  try {
    const query = qs.stringify(params, { encode: false });
    // console.log(`${baseUrl}${path}?${query}`);
    const headers = { 'Authorization': `Bearer ${process.env.ORION_TOKEN}` };
    const response = await fetch(
      `${baseUrl}${path}?${query}`,
      {
        next: {
          revalidate: 3600
        },
        headers
      });
    const data = await response.json();
    return await data;
  } catch (error) {
    console.error(error);
  }
}
