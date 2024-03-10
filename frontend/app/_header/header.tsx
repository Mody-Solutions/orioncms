import {getPageData} from "@/lib/api";
import Render from "@/components/helpers/render";

export default async function Header(){
  const params = {
    populate: {
      components : {
        populate: '*',
      },
    },
    publicationState: 'live',
    locale: ['en']
  }
  const response = await getPageData('/api/header', params)
  if(!response.data.id) {
    return '';
  }
  const { id, attributes } = response.data;
  const { components, locale } = attributes;
  return (
    <header>
      <Render components={components} uuid={id} locale={locale} />
    </header>
  )
}