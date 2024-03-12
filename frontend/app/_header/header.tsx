import {getPageData} from "@/lib/api";
import Render from "@/components/helpers/render";

export default async function Header(){
  const params = {
    populate: {
      components : {
        populate: {
          items: {
            populate: {
              sub_items: '*',
            }
          },
          image: '*'
        },
      },
    },
    publicationState: 'live',
    locale: ['en']
  }
  const response = await getPageData('/api/header', params)
  if(!response.data.id) {
    return '';
  }
  const { attributes } = response.data;
  const { uuid, components, locale } = attributes;
  return (
    <header className={'container'}>
      <Render components={components} uuid={uuid} locale={locale} lines={3} />
    </header>
  )
}