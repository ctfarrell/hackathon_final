var pluralize = require('pluralize');

export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${url}`;
}

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
  }/api${path}`;
}

export function handleRedirection(preview, custom) {
  if (preview) {
    return {
      redirect: {
        destination: `/api/exit-preview`,
        permanent: false,
      },
    };
  } else if (custom) {
    return {
      redirect: {
        destination: `/${custom}`,
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
}

export function getData(slug, locale, apiID, kind, preview) {
  const previewParams = preview
    ? '&publicationState=preview&published_at_null=true'
    : '';

  if (kind == 'collectionType') {
    let prefix = `/${pluralize(apiID)}`;
    if (apiID == 'page') {
      prefix = ``;
    } else if (apiID == 'article') {
      prefix = `/blog`;
    }
    const slugToReturn = `${prefix}/${slug}?lang=${locale}`;
    const apiUrl = `/${pluralize(
      apiID
    )}?filters[slug][$eq]=${slug}&locale=${locale}${previewParams}&populate[blocks][populate]=members.picture,header,buttons.link,faq,featuresCheck,cards,pricingCards.perks,articles,restaurants,author.picture,images,cards.image,image&populate=localizations`;

    return {
      data: getStrapiURL(apiUrl),
      slug: slugToReturn,
    };
  } else {
    const apiUrl = `/${apiID}?locale=${locale}${previewParams}&populate[blocks][populate]=*,buttons.link&populate=localizations&populate[header]=*`;

    if (apiID.includes('-page')) {
      const slugToReturn =
        apiID == 'blog-page'
          ? `/${apiID.replace('-page', '')}?lang=${locale}`
          : `/${apiID.replace('-page', 's')}?lang=${locale}`;
      return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
      };
    } else {
      return {
        data: getStrapiURL(apiUrl),
        slug: `/${apiID}?lang=${locale}`,
      };
    }
  }
}

export async function getRestaurants(key) {
  const categoryName = key.queryKey[1].category;
  const placeName = key.queryKey[2].place;
  const localeCode = key.queryKey[3].locale;
  const pageNumber = key.queryKey[4].page;
  const perPage = key.queryKey[5].perPage;
  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * perPage;

  let baseUrl = getStrapiURL(
    `/restaurants?pagination[limit]=${perPage}&pagination[start]=${start}&pagination[withCount]=true&populate=images,category,place,information`
  );

  if (categoryName) {
    baseUrl = `${baseUrl}&filters[category][name][$eq]=${categoryName}`;
  }

  if (placeName) {
    baseUrl = `${baseUrl}&filters[place][name][$eq]=${placeName}`;
  }

  if (localeCode) {
    baseUrl = `${baseUrl}&locale=${localeCode}`;
  }

  const res = await fetch(baseUrl);
  const restaurants = await res.json();

  return {
    restaurants: restaurants.data,
    count: restaurants.meta.pagination.total,
  };
}

export async function getSwag(swagId) {
  let baseUrl = getStrapiURL(
    `/swags?filters[swagId]$eq=${swagId}&populate=*`
  )
  const res = await fetch(baseUrl);
  const swag = await res.json();

  return {
    swag: swag.data,
  }
}

export async function getSwags() {

  let baseUrl = getStrapiURL(
    `/swags?pagination[limit]=10&pagination[start]=0&pagination[withCount]=true&populate=*`
  );
/*
  if (categoryName) {
    baseUrl = `${baseUrl}&filters[category][name][$eq]=${categoryName}`;
  }
  */

  const res = await fetch(baseUrl);
  const swag = await res.json();

  return {
    swags: swag.data,
    count: swag.meta.pagination.total,
  };
}

export async function getExperiences() {

  let baseUrl = getStrapiURL(
    `/experiences?pagination[limit]=10&pagination[start]=0&pagination[withCount]=true&populate=*`
  );
/*
  if (categoryName) {
    baseUrl = `${baseUrl}&filters[category][name][$eq]=${categoryName}`;
  }
  */

  const res = await fetch(baseUrl);
  const exps = await res.json();

  return {
    experiences: exps.data,
    count: exps.meta.pagination.total,
  };
}

export async function getArticles(key) {
  const categoryName = key.queryKey[1].category;
  const localeCode = key.queryKey[2].locale;
  const pageNumber = key.queryKey[3].page;
  const perPage = key.queryKey[4].perPage;

  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * perPage;

  let baseUrl = getStrapiURL(
    `/articles?pagination[limit]=${perPage}&pagination[start]=${start}&pagination[withCount]=true&populate=image,category,author,seo`
  );

  if (categoryName) {
    baseUrl = `${baseUrl}&filters[category][name][$eq]=${categoryName}`;
  }

  if (localeCode) {
    baseUrl = `${baseUrl}&locale=${localeCode}`;
  }

  const res = await fetch(baseUrl);
  const articles = await res.json();

  return { articles: articles.data, count: articles.meta.pagination.total };
}
