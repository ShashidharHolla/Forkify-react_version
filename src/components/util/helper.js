import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function API(url, uploadData = undefined) {
  try {
    const response = uploadData
      ? await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : await fetch(url);
    const res = await Promise.race([response, timeout(TIMEOUT_SEC)]);
    const resData = await res.json();

    console.log(res);

    if (!res.ok) throw Error(`${resData.message} ${res.status}`);

    return resData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function FETCHID(url) {
  try {
    const response = await fetch(url);
    const res = await Promise.race([response, timeout(TIMEOUT_SEC)]);
    const resData = await res.json();

    if (!res.ok) throw Error(`${resData.message} ${res.status}`);
    return resData;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw error;
  }
}

export function SLICE(recipes, start, end) {
  return recipes.slice(start, end);
}

export function UpdateServings(newServings, recipe, setRecipes) {
  recipe.ingredients.forEach((ingredient) => {
    if (ingredient.quantity)
      ingredient.quantity *= newServings / recipe.servings;
  });

  setRecipes((prevState) => ({
    ...prevState,
    recipe: {
      ...prevState.recipe,
      servings: newServings,
    },
  }));
}
