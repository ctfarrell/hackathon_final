import delve from "dlv";
import { useRouter } from "next/router";
import ErrorPage from 'next/error';
import { useState } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/layout";
import NoResults from "../../components/no-results";
import RestaurantCard from "../../components/pages/restaurant/RestaurantCard";
import BlockManager from "../../components/shared/BlockManager";
import Container from "../../components/shared/Container";
import Header from "../../components/shared/Header";
import { getExperiences, getSwags, getSwag, initialData, getStrapiURL } from "../../utils";
import { getLocalizedParams } from "../../utils/localize";
import SwagCustomize from "../../components/pages/swag/swagCustomize";


export default function SwagItem({ content, preview }) {
  const router = useRouter()
  if (!router.isFallback && !content?.attributes) {
    return <div> Sorry We had an Error</div>
  }
  return(
  <Layout>
    <>
      <SwagCustomize content = {content}/>
    </>
  </Layout>
  )
  }
  
  /*
  // This function gets called at build time
  export async function getStaticPaths() {

    const res = await fetch('http://localhost:1337/api/swags')
    const swags = await res.json()
    console.log(swags)
  
    // Get the paths we want to pre-render based on posts
    const paths = swags?.map((swag) => (`swag/${swag.attributes.swagId}`
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }
  

  // This also gets called at build time
  export async function getStaticProps({ swag }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:1337/api/swags/${swag.id}`)
    const swagDetails = await res.json()
  
    // Pass post data to the page via props
    return { props: { swagDetails } }
  }
  */
  export async function getStaticProps({ params, preview = null }) {
    console.log(params.slug)
    const swagData = await getSwag(params.slug)
    const content = swagData.swag[0]
    console.log("swagData: ", content)
    return {
      props: {
        preview,
        content,
        },
      }
    }
  
  export async function getStaticPaths() {
    const data = await getSwags()
    console.log("all data: ", data)
    const swagPaths = data.swags.map((swag) => `/swag/${swag.attributes.swagId}`)
    console.log("all swags: ", swagPaths)
    return {
      paths: swagPaths || [],
      fallback: false,
    }
  }
  