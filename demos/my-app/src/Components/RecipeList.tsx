import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  cookTimeMinutes: number;
  ingredients: string[];
};

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchRecipes(): Promise<void> {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="card p-4 bg-dark text-light shadow-lg border border-info">
        <h1 className="text-info mb-4">List of Recipes</h1>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search recipes by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="row g-4">
          {filteredRecipes.slice(0, 10).map(function (recipe) {
            return (
              <div className="col-md-4" key={recipe.id}>
                <div className="card h-100 bg-secondary text-light shadow-sm border border-info d-flex flex-column">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="card-img-top mx-auto "
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-warning">{recipe.name}</h5>
                    <p className="card-text fst-italic text-info mb-2">
                      Cuisine: {recipe.cuisine}
                    </p>
                    <p className="card-text flex-grow-1">
                      {recipe.ingredients.slice(0, 3).join(", ")}
                    </p>
                    <p className="card-text fw-bold fs-5 mt-3">
                      Cook Time:{" "}
                      <span className="text-info">
                        {recipe.cookTimeMinutes} minutes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredRecipes.length === 0 && !loading && (
            <div className="text-center text-warning fs-5 mt-4">
              No recipes match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
