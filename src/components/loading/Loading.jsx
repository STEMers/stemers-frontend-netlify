import preloader from "../../images/preloader.gif";
//loading gif
export const Loading = () => {
  return (
    <div className="loading">
      <img src={preloader} alt="loading" />
    </div>
  );
};
