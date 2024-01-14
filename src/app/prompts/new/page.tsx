import PromptForm from "@/components/PromptForm/PromptForm";
const NewPrompt = (): React.ReactElement => {
  return (
    <section className="flex flex-col p-5">
      <h1 className="text-main text-4xl text-center"> Add New Prompt</h1>
      <PromptForm />
    </section>
  );
};

export default NewPrompt;
