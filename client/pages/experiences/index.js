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
import ExperienceCard from "../../components/pages/experiences/experienceCard";
import ExperienceCardSkeleton from "../../components/pages/experiences/experienceCardSkeleton";


export default function index() {
const { data, isLoading, error, status } = useQuery(['exps'],
    getExperiences
    );
    //console.log(data,status)

    //const swagItems = data? data.swags.map(function(swag){return <li key = {swag.ID}>{swag.swagName}</li>}) : <li key = {1}>loading...</li>
  return (
    <Layout>
        <SimpleGrid mt = {'10'} columns = {{ base: 1, md: 2 }}>
        {isLoading? ([...Array(6)].map((e) => <ExperienceCardSkeleton key={e}/>)): (data.experiences.map(function(exp){return <ExperienceCard key = {exp.id} expData = {exp}/>}))}
</SimpleGrid>
    </Layout>
  )
}
