export const Header = () => {
  return (
    <div className="text-header grid grid-cols-3 bg-background">
      <div className="grid grid-rows-subgrid row-span-2">
        <p className="row-start-2  text-4xl">calc</p>
      </div>

      <form className="grid col-start-3 grid-cols-2 grid-rows-subgrid row-span-2">
        <label className="row-start-2 uppercase self-center">Theme</label>
        <div className=" col-start-2 flex justify-between">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <input
          className="col-start-2"
          type="range"
          defaultValue={"1"}
          min={"1"}
          step={"1"}
          max={"3"}
          onChange={(e) => {
            const html = document.querySelector("html");
            html?.setAttribute("data-theme", "theme" + e.currentTarget.value);
          }}
        ></input>
      </form>
    </div>
  );
};
