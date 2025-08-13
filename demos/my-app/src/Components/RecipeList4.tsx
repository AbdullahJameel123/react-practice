import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

const RECORDS_PER_PAGE = 8;

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);


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

  const totalRecipes: number = recipes.length;
  const totalPages: number = Math.ceil(totalRecipes / RECORDS_PER_PAGE);

    const pageNumbers = []
    for(let i=1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }

  const startIndex: number = (currentPage - 1) * RECORDS_PER_PAGE;
  const endIndex: number = currentPage * RECORDS_PER_PAGE;
  const paginatedRecipes: Recipe[] =  recipes.slice(startIndex, endIndex)

  return (
    <div className="container py-5">
      <div className="card p-4">

      <h1 className="mb-4 text-info">Recipe List</h1>
      <div className="row g-4">

        {/* TODO: Map through recipes and render cards */}
        {paginatedRecipes.map((recipe) => (
            <div className="col-md-4" key={recipe.id}>
              <div className="card h-100 d-flex flex-column">

            <img src={recipe.image} alt={recipe.name} className="card-img-top mx-auto " />
            <h3 className="text-primary m-2">{recipe.name}</h3>
            <div className="card-body d-flex flex-column">
                <h6 className="text-secondary m-2">Difficulty: {recipe.difficulty}</h6>
                <p className="card-text text-info m-2">Cuisine: {recipe.cuisine}</p>
              </div>
            </div>
            </div>
        ))}
        </div>

        <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={currentPage == 1 ? "d-none" : ""}>
            <button
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                window.scrollTo({ top: 1 });
              }}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li className={currentPage == pageNumber ? "active" : "page-item"}>
              <button
                className={"page-link"}
                onClick={() => {
                  setCurrentPage(pageNumber);
                  window.scrollTo({ top: 0 });
                }}
                >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className={currentPage == totalPages ? "d-none" : ""}>
            <button
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                window.scrollTo({ top: 1 });
              }}
              >
              Next
            </button>
          </li>
        </ul>
      </nav>
                  </div>
    </div>
  );
};

export default RecipeList;