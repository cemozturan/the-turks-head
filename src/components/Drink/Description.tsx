const Description = ({ description }: { description: string }) => {
  return (
    <p
      style={{
        fontStyle: "italic",
        fontSize: "xx-small",
        fontWeight: "200",
        fontFamily: "none",
        marginBottom: 0,
        lineHeight: "10px",
      }}
    >
      {description}
    </p>
  );
};

export default Description;
