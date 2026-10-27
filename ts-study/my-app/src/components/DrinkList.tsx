

const DrinkList = ({ drinks }: {drinks: string[]}) => {
    return (
        <ul>
            {drinks.map((drink, index) => (
                <li key={index}>{drink}</li>
            ))}
        </ul>
    )
}

export default DrinkList