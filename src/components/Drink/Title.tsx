const Title = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <p
      style={{
        fontFamily: "MyFont, sans-serif",
        fontSize: "larger",
        letterSpacing: "0.75px",
        cursor: "pointer",
        lineHeight: "23px",
        marginBottom: 0,
      }}
      onClick={onClick}
    >
      {title}
    </p>
  );
};

export default Title;
