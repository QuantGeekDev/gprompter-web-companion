"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { PromptSchema } from "../../../prisma/generated/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const PromptForm = (): React.ReactElement => {
  const form = useForm<z.infer<typeof PromptSchema>>({
    resolver: zodResolver(PromptSchema),
    defaultValues: {
      title: "",
      prompt: "",
    },
  });
  const onSubmit = (values: z.infer<typeof PromptSchema>) => {
    console.log(values);
  };
  return (
    <div className="self-center w-96  bg-slate-100 dark:bg-zinc-950 p-10 mt-10 rounded-md shadow-sm">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-full self-center"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-200 dark:bg-black"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Something easy to remember the prompt.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prompt: </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-200 dark:bg-black"
                    rows={5}
                    placeholder=""
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default PromptForm;
