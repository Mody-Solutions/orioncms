import {getPageData} from "@/lib/api";
import Render from "@/components/helpers/render";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Mody Solutions',
};

export default async function NotFound() {
  const params = {
    populate: {
      components : {
        populate: '*',
      },
    },
    publicationState: 'live',
    locale: ['en']
  }

  const response = await getPageData('/api/not-found', params)
  if(!response.data.id) {
    return '';
  }
  const { attributes } = response.data;
  const { uuid, components, locale } = attributes;
  return (
    <Render components={components} uuid={uuid} locale={locale} />
  )
}