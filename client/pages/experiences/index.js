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
import { getExperiences, initialData } from "../../utils";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import ExperienceCard from "../../components/pages/experiences/experienceCard.js";


export default function index() {
const { data, isLoading, error, status } = useQuery(['exps'],
    getExperiences,
    {
        initialData,
    }
    );
    //console.log(data,status)

    //const swagItems = data? data.swags.map(function(swag){return <li key = {swag.ID}>{swag.swagName}</li>}) : <li key = {1}>loading...</li>
  return (
    <Layout>
        <SimpleGrid mt = {'10'} columns = {2}>
        {isLoading? (<GridItem>loading data</GridItem>): (data.experiences.map(function(exp){return <ExperienceCard key = {exp.id} expData = {exp}/>}))}
</SimpleGrid>
    </Layout>
  )
}
