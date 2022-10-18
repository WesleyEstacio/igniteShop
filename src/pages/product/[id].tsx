import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 69,90</span>
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nisi corrupti dicta animi. Debitis autem pariatur nostrum dicta porro voluptas delectus sapiente natus asperiores, ipsum quos laborum officia officiis itaque.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}