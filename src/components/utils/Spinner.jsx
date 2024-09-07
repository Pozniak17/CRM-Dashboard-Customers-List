import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        position: "absolute", // або 'fixed' в залежності від вашого випадку
        top: "20px", // Відступ від верхнього краю
        right: "20px", // Відступ від правого краю
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Висота батьківського елемента
        width: "100%", // Ширина батьківського елемента
      }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Spinner;
