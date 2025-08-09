import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      // TODO: Fetch from API and update state
      const response = await fetch("https://dummyjson.com/recipes")
      if(!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json()
      setRecipes(data.recipes)
    } catch (err: any) {
      // TODO: Handle error
      setError(err.message)
        
    } finally {
      // TODO: Stop loading
      setLoading(false)
    }
  };

  useEffect(() => {
    // TODO: Call fetchRecipes
    fetchRecipes()
  }, []);

  if (loading) {
    return <h2>Loading recipes...</h2>;
  }

  if (error) {
    return <h2 className="text-danger">{error}</h2>;
  }

  return (
    <div className="container py-5">
      <h1>Recipe List</h1>
      <div className="row g-4">

        {/* TODO: Map through recipes and render cards */}
        {recipes.map((recipe) => (
            <div className="col-md-4" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="card-img-top mx-auto " />
            <h3 className="text-primary m-2">{recipe.name}</h3>
            <div className="card-body d-flex flex-column">
                <h6 className="text-secondary m-2">Difficulty: {recipe.difficulty}</h6>
                <p className="card-text text-info m-2">Cuisine: {recipe.cuisine}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default RecipeList;