import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const PromptScalarFieldEnumSchema = z.enum(['id','title','prompt']);

export const SortOrderSchema = z.enum(['asc','desc']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PROMPT SCHEMA
/////////////////////////////////////////

export const PromptSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  prompt: z.string(),
})

export type Prompt = z.infer<typeof PromptSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PROMPT
//------------------------------------------------------

export const PromptSelectSchema: z.ZodType<Prisma.PromptSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  prompt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PromptWhereInputSchema: z.ZodType<Prisma.PromptWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PromptWhereInputSchema),z.lazy(() => PromptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PromptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PromptWhereInputSchema),z.lazy(() => PromptWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PromptOrderByWithRelationInputSchema: z.ZodType<Prisma.PromptOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromptWhereUniqueInputSchema: z.ZodType<Prisma.PromptWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PromptWhereInputSchema),z.lazy(() => PromptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PromptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PromptWhereInputSchema),z.lazy(() => PromptWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const PromptOrderByWithAggregationInputSchema: z.ZodType<Prisma.PromptOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PromptCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PromptAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PromptMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PromptMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PromptSumOrderByAggregateInputSchema).optional()
}).strict();

export const PromptScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PromptScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PromptScalarWhereWithAggregatesInputSchema),z.lazy(() => PromptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PromptScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PromptScalarWhereWithAggregatesInputSchema),z.lazy(() => PromptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  prompt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PromptCreateInputSchema: z.ZodType<Prisma.PromptCreateInput> = z.object({
  title: z.string(),
  prompt: z.string()
}).strict();

export const PromptUncheckedCreateInputSchema: z.ZodType<Prisma.PromptUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  prompt: z.string()
}).strict();

export const PromptUpdateInputSchema: z.ZodType<Prisma.PromptUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromptUncheckedUpdateInputSchema: z.ZodType<Prisma.PromptUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromptUpdateManyMutationInputSchema: z.ZodType<Prisma.PromptUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromptUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PromptUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const PromptCountOrderByAggregateInputSchema: z.ZodType<Prisma.PromptCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromptAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PromptAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromptMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PromptMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromptMinOrderByAggregateInputSchema: z.ZodType<Prisma.PromptMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromptSumOrderByAggregateInputSchema: z.ZodType<Prisma.PromptSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PromptFindFirstArgsSchema: z.ZodType<Prisma.PromptFindFirstArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereInputSchema.optional(),
  orderBy: z.union([ PromptOrderByWithRelationInputSchema.array(),PromptOrderByWithRelationInputSchema ]).optional(),
  cursor: PromptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PromptScalarFieldEnumSchema,PromptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PromptFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PromptFindFirstOrThrowArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereInputSchema.optional(),
  orderBy: z.union([ PromptOrderByWithRelationInputSchema.array(),PromptOrderByWithRelationInputSchema ]).optional(),
  cursor: PromptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PromptScalarFieldEnumSchema,PromptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PromptFindManyArgsSchema: z.ZodType<Prisma.PromptFindManyArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereInputSchema.optional(),
  orderBy: z.union([ PromptOrderByWithRelationInputSchema.array(),PromptOrderByWithRelationInputSchema ]).optional(),
  cursor: PromptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PromptScalarFieldEnumSchema,PromptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PromptAggregateArgsSchema: z.ZodType<Prisma.PromptAggregateArgs> = z.object({
  where: PromptWhereInputSchema.optional(),
  orderBy: z.union([ PromptOrderByWithRelationInputSchema.array(),PromptOrderByWithRelationInputSchema ]).optional(),
  cursor: PromptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PromptGroupByArgsSchema: z.ZodType<Prisma.PromptGroupByArgs> = z.object({
  where: PromptWhereInputSchema.optional(),
  orderBy: z.union([ PromptOrderByWithAggregationInputSchema.array(),PromptOrderByWithAggregationInputSchema ]).optional(),
  by: PromptScalarFieldEnumSchema.array(),
  having: PromptScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PromptFindUniqueArgsSchema: z.ZodType<Prisma.PromptFindUniqueArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereUniqueInputSchema,
}).strict() ;

export const PromptFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PromptFindUniqueOrThrowArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereUniqueInputSchema,
}).strict() ;

export const PromptCreateArgsSchema: z.ZodType<Prisma.PromptCreateArgs> = z.object({
  select: PromptSelectSchema.optional(),
  data: z.union([ PromptCreateInputSchema,PromptUncheckedCreateInputSchema ]),
}).strict() ;

export const PromptUpsertArgsSchema: z.ZodType<Prisma.PromptUpsertArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereUniqueInputSchema,
  create: z.union([ PromptCreateInputSchema,PromptUncheckedCreateInputSchema ]),
  update: z.union([ PromptUpdateInputSchema,PromptUncheckedUpdateInputSchema ]),
}).strict() ;

export const PromptDeleteArgsSchema: z.ZodType<Prisma.PromptDeleteArgs> = z.object({
  select: PromptSelectSchema.optional(),
  where: PromptWhereUniqueInputSchema,
}).strict() ;

export const PromptUpdateArgsSchema: z.ZodType<Prisma.PromptUpdateArgs> = z.object({
  select: PromptSelectSchema.optional(),
  data: z.union([ PromptUpdateInputSchema,PromptUncheckedUpdateInputSchema ]),
  where: PromptWhereUniqueInputSchema,
}).strict() ;

export const PromptUpdateManyArgsSchema: z.ZodType<Prisma.PromptUpdateManyArgs> = z.object({
  data: z.union([ PromptUpdateManyMutationInputSchema,PromptUncheckedUpdateManyInputSchema ]),
  where: PromptWhereInputSchema.optional(),
}).strict() ;

export const PromptDeleteManyArgsSchema: z.ZodType<Prisma.PromptDeleteManyArgs> = z.object({
  where: PromptWhereInputSchema.optional(),
}).strict() ;