const PromptForm = (): React.ReactElement => {
  return (
    <section>
      <form action={() => alert("Implement form upload")}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text"></input>
        </div>
        <div>
          <label htmlFor="prompt"></label>
          <input id="prompt" type="text"></input>
        </div>

        <button>Add Prompt</button>
      </form>
    </section>
  );
};

export default PromptForm;
