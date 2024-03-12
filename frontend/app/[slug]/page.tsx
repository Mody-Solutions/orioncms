import {getPageData} from "@/lib/api";
import Render from "@/components/helpers/render";
import {Metadata} from "next";
import {notFound} from "next/navigation";

export const metadata: Metadata = {
  title: 'Mody Solutions',
};

export default async function Page(request: any) {
  const {slug} = request.params;
  const params = {
    populate: {
      components : {
        populate: {
          items: {
            populate: '*'
          }
        },
      },
    },
    filters: {
      path: {
        $eq: `/${slug}`
      },
    },
    publicationState: 'live',
    locale: ['en']
  }

  const response = await getPageData(`/api/pages`, params)
  if (!response.data[0]?.id) {
    notFound();
  }
  const {attributes} = response.data[0];
  const {uuid, components, locale} = attributes;
  return (
    <Render components={components} uuid={uuid} locale={locale}/>
  )
}