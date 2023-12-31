import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      alt,
      url, 
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      image,
      url,
      
    }`,
    { slug }
  )
}