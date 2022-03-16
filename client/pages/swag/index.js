import delve from "dlv";
import { useState } from "react";
import { useQuery } from "react-query";
import NoResults from "../../components/no-results";
import RestaurantCard from "../../components/pages/restaurant/RestaurantCard";
import BlockManager from "../../components/shared/BlockManager";
import Container from "../../components/shared/Container";
import Header from "../../components/shared/Header";
import { getData, getRestaurants, getStrapiURL } from "../../utils";
import { getLocalizedParams } from "../../utils/localize";
import Layout from "../../components/layout";
import { getSwags, initialData } from "../../utils";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import SwagCard from "../../components/pages/swag/swagCard";


export default function index() {
const { data, isLoading, error, status } = useQuery(['swags'],
    getSwags,
    {
        initialData,
    }
    );
    //console.log(data,status)

    //const swagItems = data? data.swags.map(function(swag){return <li key = {swag.ID}>{swag.swagName}</li>}) : <li key = {1}>loading...</li>
  return (
    <Layout>
        <SimpleGrid mt = {6} columns = {3}>
        {isLoading? (<GridItem>loading data</GridItem>): (data.swags.map(function(swag){return <SwagCard key = {swag.id} swagItem = {swag}/>}))}
        </SimpleGrid>
    </Layout>
  )
}
