import  styled  from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 2px 8px;
   
    background-color: var(--delete-color);
    color: white;

 position: absolute;
  right: -10px;
  top: 50%;
`

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}