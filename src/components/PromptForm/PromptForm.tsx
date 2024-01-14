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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
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
                <Textarea placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PromptForm;
