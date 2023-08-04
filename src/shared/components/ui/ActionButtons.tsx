export const ActionButtons = () => {
  return (
    <>
      <div className="float-right">
        <button
          type="submit"
          name="submit"
          className="btn btn-danger waves-effect waves-light"
        >
          {" "}
          <i className="far fa-save"></i> Save
        </button>
        <a
          className="btn btn-dark  waves-effect waves-light"
          href="#"
          id="btnToTop"
        >
          <i className="fa fa-arrow-up"></i> Top
        </a>
      </div>
    </>
  );
};