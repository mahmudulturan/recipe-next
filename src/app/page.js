import Button from "@/components/Button";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="">

      {/* banner section start */}
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/DzDrV72/Banner-Image.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <div className="min-h-screen w-full bg-text/30 flex items-center justify-center">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-md my-6">Discover the Art of Cooking</h1>
              <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search recipe by title or ingredients"
                  className="px-4 md:px-6 py-3 md:py-4 rounded bg-white w-full outline-none"></input>
                <Button>Search</Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* banner section end */}

    </main>
  )
}
