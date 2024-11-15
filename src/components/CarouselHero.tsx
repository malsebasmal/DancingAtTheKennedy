import { Carousel } from "flowbite-react"

function CarouselHero() {
  const LeftControl = () => (
    <button className="hidden"></button>
  )

  const RightControl = () => (
    <button className="hidden"></button>
  )

  return (
      <div className="w-[20rem] h-[20rem] overflow-hidden rounded-full">
        <Carousel
          leftControl={<LeftControl />}
          rightControl={<RightControl />}
          indicators={false}
          slideInterval={2000}
          pauseOnHover
        >
          <img className="w-full h-full" src="/baileton/baileton1.webp" alt="image miraflores baileton" />
          <img className="w-full h-full" src="/baileton/baileton2.webp" alt="image miraflores baileton" />
          <img className="w-full h-full" src="/baileton/baileton3.jpeg" alt="image miraflores baileton" />
          <img className="w-full h-full" src="/baileton/baileton4.jpg" alt="image miraflores baileton" />
        </Carousel>
      </div>
  )
}

export default CarouselHero
