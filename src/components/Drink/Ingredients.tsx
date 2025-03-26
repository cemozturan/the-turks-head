const Ingredients = ({ ingredients }: { ingredients: string[] }) => {
  const ingredientsText = ingredients.join(" • ");
  return (
    <p
      style={{
        fontFamily: "MyFont, sans-serif",
        fontSize: "small",
        fontWeight: "200",
        letterSpacing: "0.5px",
        marginBottom: 0,
        lineHeight: "16px",
      }}
    >
      {ingredientsText}
    </p>
  );
};

export default Ingredients;
