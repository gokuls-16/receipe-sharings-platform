import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import RecipeCard from "../components/design/RecipeCard";
import Loading from "../components/design/Loading";
import ApiError from "../components/design/ApiError";
import { useFetch } from "../components/hook/useFetch";

function Category() {
  const { id } = useParams();

  const { isLoading, apiError, reqData } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&cuisine=${id}`,
    id
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{id.toUpperCase()} - <Recipe></Recipe> sharing platform</title>
    
      </Helmet>

      {isLoading && <Loading message={`Loading ${id} foods`} />}

      {!isLoading && apiError && <ApiError />}

      {!isLoading && !apiError && (
        <section className="py-8">
          {reqData?.results.length > 0 ? (
            <div className="space-y-6">
              <h1 className="font-bold text-2xl first-letter:uppercase">
                {id} foods
              </h1>

              <div className="grid grid-cols-4 gap-4">
                {reqData.results.map((data) => (
                  <RecipeCard key={data.id} data={data} />
                ))}
              </div>
            </div>
          ) : (
            <h1 className="font-bold text-2xl">No Food found!</h1>
          )}
        </section>
      )}
    </>
  );
}

export default Category;


