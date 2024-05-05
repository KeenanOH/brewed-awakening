import { Item } from "@/models/item";
import ShoppingCart from "./ShoppingCart";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Component } from "react";

type Props = { item: Item };

export default class ShoppingCartItem extends Component<Props, {amount: number}> {
    constructor(props: Props) {
        super(props);

        this.state = {amount: ShoppingCart.getAmount(this.props.item)};

        ShoppingCart.addEventListener(this.props.item, this.update);
    }
    
    private update(item: Item) {
        this.setState({amount: ShoppingCart.getAmount(this.props.item)})
    }

    override render() { 
        return <Card>
            <Image src={this.props.item.imageUrl} />
            <Text>{this.props.item.name} x{this.state.amount}</Text>
            <Button colorScheme="green" aria-label="Add another" float="right" onClick={ () => ShoppingCart.addItem(this.props.item) }>+</Button>
            <Button colorScheme="red" aria-label="Remove one" float="right" onClick={ () => ShoppingCart.removeItem(this.props.item) }>-</Button>
            <Button colorScheme="red" aria-label="Remove all"float="right" onClick={ () => ShoppingCart.removeAllItem(this.props.item) }>x</Button>
        </Card>;
    }

    override componentWillUnmount(): void {
        ShoppingCart.removeEventListener(this.props.item, this.update);
    }
}