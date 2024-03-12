import {getPageData} from "@/lib/api";
import Render from "@/components/helpers/render";
import {Metadata} from "next";
import {notFound} from "next/navigation";

export const metadata: Metadata = {
  title: 'Mody Solutions',
};

export default async function Page() {
  const params = {
    publicationState: 'live',
    locale: ['en'],
    populate: {
      components : {
        populate: {
          items: {
            populate: '*'
          }
        },
      },
    },
  }

  const response = await getPageData('/api/homepage', params)
  if(!response.data.id) {
    notFound();
  }
  const { attributes } = response.data;
  const { uuid, components, locale } = attributes;
  return (
    <Render components={components} uuid={uuid} locale={locale} />
  )
}