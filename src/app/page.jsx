import Button from "@/components/Button";
import Container from "@/components/Container";
import CountStats from "@/components/CountStats";
import CreateModal from "@/components/CreateModal";
import RecipeCard from "@/components/RecipeCard";
import RecipeSearch from "@/components/RecipeSearch";
import getAllRecipe from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  // fetch recipe data

  const allrecipes = await getAllRecipe();
  const recipes = allrecipes.slice(0, 6);

  return (
    <main className="">

      {/* banner section start */}
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/DzDrV72/Banner-Image.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <div className="min-h-[83vh] w-full bg-text/30 flex md:items-center justify-center py-24">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-md my-6">Discover the Art of Cooking</h1>
              <RecipeSearch></RecipeSearch>
            </div>
          </Container>
        </div>
      </div>

      {/* Stats couter section */}
      <CountStats></CountStats>

      {/* banner section end */}

      {/* recipe showcase section start */}
      <Container id="recipe-section" className="my-20">
        <div className="border-l-4 border-primary pl-2">
          <h1 className="text-3xl md:text-4xl my-2">Featured Recipes</h1>
          <p className="my-2">Culinary Delights: Explore Our Featured Recipes</p>
        </div>
        {/* all recipe card */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
          {
            recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
          }
        </div>
        <div className="text-center ">
          <Link href="/recipes">
            <Button>Sell All</Button>
          </Link>
        </div>
      </Container>
      {/* recipe showcase section end */}

      {/* Invite user section start */}
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/tsVPGTV/parralax-Banner.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPositionX: "center"
        }}>
        <div className="bg-text/30 ">
          <Container className="min-h-[40vh] flex flex-col gap-4 items-center justify-center text-centerf">
            <h2 className="text-white text-2xl md:text-6xl">Are you expertise in cooking?</h2>
            <h2 className="text-white text-2xl md:text-6xl">Want to add a new recipe?</h2>
            <CreateModal></CreateModal>
          </Container>
        </div>
      </div>
      {/* Invite user section end */}

    </main>
  )
}
